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

      it("Gives the total score of the rolls", function(){
        dice.roll()
        dice.roll()
        dice.roll()
        game.score()
        game.total()
        expect(game.totalScore).toEqual(3)
      })
    });
  });
  