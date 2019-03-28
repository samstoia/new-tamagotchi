// import Tamagotchi, { lifeCycleTicks, dayDuration, nightDuration } from './../src/tamagotchi.js';
//
// describe('Tamagotchi', function() {
//   let tamagotchi;
//
//   beforeEach(function() {
//     jasmine.clock().install();
//     tamagotchi = new Tamagotchi("Tom", new Date(2019, 2, 25));
//     tamagotchi.start();
//   });
//
//   afterEach(function() {
//     jasmine.clock().uninstall();
//   });
//
//   it('should create a tamagotchi', function() {
//     expect(tamagotchi.name).toEqual("Tom");
//     expect(tamagotchi.birthday).toEqual(new Date(2019, 2, 25));
//   });
//
//   it('should start the timer ', function() {
//     jasmine.clock().tick(20001);
//     expect(tamagotchi.timer).toEqual(2);
//     expect(tamagotchi.name).toEqual("Tom");
//   });
//
//   it('should pause the game', function(){
//     jasmine.clock().tick(20001);
//     tamagotchi.pauseGame();
//     jasmine.clock().tick(30001);
//     expect(tamagotchi.timer).toEqual(2);
//     expect(tamagotchi.isTicking).toEqual(false);
//   });
//
//   it('should resume the game after a pause', function(){
//     jasmine.clock().tick(20001); // 20 sec
//     tamagotchi.pauseGame();
//     jasmine.clock().tick(30001);
//     tamagotchi.start();
//     jasmine.clock().tick(20001);
//     expect(tamagotchi.timer).toEqual(4);
//     expect(tamagotchi.isTicking).toEqual(true);
//   });
//
//   it('should change lifeCycleIndex based on lifeCycleTicks and game timer', function(){
//     jasmine.clock().tick(lifeCycleTicks[0] * 10000 + 1); // 100 sec
//     tamagotchi.checkLifeCycle();
//     expect(tamagotchi.lifeCycleIndex).toEqual(1);
//   });
//
//   it("should check if it is daytime", function(){
//     jasmine.clock().tick((dayDuration + nightDuration + 1) * 10000 + 1);
//     expect(tamagotchi.isDaytime()).toEqual(true);
//   });
//
//   it("should check if it is nighttime", function(){
//     jasmine.clock().tick((dayDuration + nightDuration + 22) * 10000 + 1);
//     expect(tamagotchi.isDaytime()).toEqual(false);
//   });
//
//   it('should increase hunger by one five times per day', function() {
//     jasmine.clock().tick((dayDuration / 5 + 1) * 10000 + 1);
//     expect(tamagotchi.hunger).toEqual(3);
//   });
//
//   it('should decrease hunger by one if given snack', function(){
//     tamagotchi.feedSnack();
//     expect(tamagotchi.hunger).toEqual(1);
//   });
//
//   it('should decrease hunger by one two given meal', function(){
//     tamagotchi.feedMeal();
//     expect(tamagotchi.hunger).toEqual(0);
//   });
//   it('should increase tiredness by one for each part of the day', function(){
//   //  tamagotchi.increaseTiredness();
//     jasmine.clock().tick(((dayDuration + nightDuration) / 5 + 1) * 10000 + 1);
//     expect(tamagotchi.tiredness).toEqual(1);
//   });
//
//   it('should reset tiredness to zero after sleeping', function() {
//     jasmine.clock().tick(((dayDuration + nightDuration) / 5 + 1) * 10000 + 1);
//     tamagotchi.sleep();
//     expect(tamagotchi.tiredness).toEqual(0);
//   });
//
//   it('should get sick when two sickness conditions are true', function() {
//     expect(tamagotchi.sick).toEqual(false);
//     tamagotchi.tiredness = 5;
//     tamagotchi.hunger = 5;
//     tamagotchi.getSick();
//     expect(tamagotchi.sick).toEqual(true);
//   });
//   it('should cure tamagotchi when give medicine button is pressed', function(){
//     tamagotchi.tiredness = 5;
//     tamagotchi.hunger = 5;
//     tamagotchi.getSick();
//     expect(tamagotchi.sick).toEqual(true);
//     tamagotchi.giveMedicine();
//     expect(tamagotchi.sick).toEqual(false);
//   });
//
//   it('should clean up poops', function(){
//     tamagotchi.poops = 1;
//     tamagotchi.cleanPoops();
//     expect(tamagotchi.poops).toEqual(0);
//   });
//
//   it('should know if tamagotchi is dead', function(){
//     tamagotchi.die();
//     expect(tamagotchi.dead).toEqual(true);
//   });
// });
