function Dice(){
this.roll = 0
}

Dice.prototype.roll = function(){
    this.roll = Math.floor(Math.random() * 6)
}

