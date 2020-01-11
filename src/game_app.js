function Game(dice) {
    this.dice = dice
    this.rollScore = 0 
    this.totalScore = 0
}

Game.prototype.score = function(){
    this.rollScore += this.dice.rollScore
}

Game.prototype.total = function(){
    this.totalScore += this.rollScore
}