function Game(dice) {
    this.dice = dice
    this.rollScore = 0 
}

Game.prototype.score = function(){
    this.rollScore += this.dice.rollScore
}

