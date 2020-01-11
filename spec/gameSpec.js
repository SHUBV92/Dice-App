describe("Game", function() {
    let dice;
    let game;
  
    beforeEach(function() {
      dice = new Dice()
      game = new Game(dice);

    });
    
    describe("Game", function() {
      it("Registers the score of a roll", function() {
        dice.roll()
        game.score()
        expect(game.rollScore).toEqual(1);
      });
    });
  });
  