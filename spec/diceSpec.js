describe("Dice", function() {
  let dice;

  beforeEach(function() {
    dice = new Dice();

  });

//   const mockMath = Object.create(global.Math);
//   mockMath.random = () => 0.5;
//   global.Math = mockMath;

  describe("Dice", function() {
    it("Dice Generates a number", function() {
      dice.roll();
      expect(dice.rollScore).toEqual(1);
    });
  });
});
