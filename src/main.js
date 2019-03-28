import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import Tamagotchi from './tamagotchi.js';

$(document).ready(function() {
  let tamagotchi;

  $.ajax({
    url: `https://api.giphy.com/v1/gifs/random?tag=tamagotchi&api_key=UEGJVQedNxWPuSqwbryHMFAFED8cnuEO`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('#showGif').attr("src", `${response.data.image_url}`);
    },
    error: function() {
      $('#showGif').attr("src", 'https://chittagongit.com//images/error-image-icon/error-image-icon-18.jpg');
    }
  });

  $('#gameStartForm').submit(function(event) {
    event.preventDefault();

    $('#openingForm').hide();
    let name = $('#inputName').val();
    tamagotchi = new Tamagotchi(name);
    $('#gameStart').show();
    $('.tamagotchiName').append(tamagotchi.name)
  });

  $('#gameStartButton').click(function() {
    $('#gameStart').hide();
    $('#tamagotchiHome').show();
    $('#buttonContainer').show();

    setInterval(() => {
     tamagotchi.increaseHunger();
     tamagotchi.increaseTiredness();


     tamagotchi.getSick();
     console.log(tamagotchi);
     if(tamagotchi.sick) {
         $('.sickRow').show();
         $('#medicineButton').show();
       } else {
         $('.sickRow').hide();
         $('#medicineButton').hide();
       }

     if (tamagotchi.tiredness > 3) {
       $('#sleepButton').show();
     }

     $('#tamagotchiHunger').text(tamagotchi.hunger);
     $('#tamagotchiTiredness').text(tamagotchi.tiredness);
     $('#tamagotchiPoops').text(tamagotchi.droppings);


   }, 5000);

   $('#feedSnack').click(function() {
     tamagotchi.feedSnack();
   });

   $('#feedMeal').click(function() {
     if(tamagotchi.hunger < 2){
       $("#cantDo").show();
       $("#cantDo").text("I'm not hungry enough for a meal!");
       setTimeout(function(){
         $("#cantDo").hide();
       }, 2000);
     } else {
       tamagotchi.feedMeal();
     }
   });

   $('#sleepButton').click(function(){
     tamagotchi.sleep();
   });

   $('#medicineButton').click(function(){
     tamagotchi.giveMedicine();
     $('#medicineButton').hide()
   });

   $('#cleanPoops').click(function() {
     if (!tamagotchi.droppings){
       $("#cantDo").show();
       $("#cantDo").text("There aren't any poops around!");
       setTimeout(function(){
         $("#cantDo").hide();
       }, 2000);
     }
     else{
       tamagotchi.cleanPoops();
     }
   });
   
  });
});
