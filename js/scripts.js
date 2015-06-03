
function Player(mark) {
  this.mark = mark;
  this.won = false;
}

function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.markedBy = false;
}

Space.prototype.coordinates = function() {
  return [this.xCoordinate, this.yCoordinate];
}

Space.prototype.mark_by = function(Player) {
  this.markedBy = Player
  return this.markedBy;
}

function Board() {
  this.width = 3;
  this.height = 3;

  this.spaces = [];
  var x, y;
  for (x=1; x <= this.width; x++) {
    this.spaces[x] = [];
    for (y=1; y <= this.height; y++) {
      this.spaces[x][y] = new Space(x, y);
    }
  }
}

Board.prototype.find = function(x,y) {
  return this.spaces[x][y];
}

Board.prototype.turn = function(player) {
    if (turnCount > 9) {
      alert("Game ends in a tie.");
    } else if (turnCount % 2 === 0) {
      console.log("Player X's turn");

    player marks soemthing
      SPACEID.mark_by(player)
      if (player.winCondition){
        return player.mark + " has won!"
      } else


    } else if {
      console.log("Player O's turn");
      board.turn(player2);
  }
  space.mark_by(player)
}

Board.prototype.winCondition = function(player) {
  if (((this.spaces[1][1].markedBy === player) && (this.spaces[2][1].markedBy === player) && (this.spaces[3][1].markedBy === player))
    || ((this.spaces[2][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[3][2].markedBy === player))
    || ((this.spaces[3][1].markedBy === player) && (this.spaces[3][2].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[1][1].markedBy === player) && (this.spaces[1][2].markedBy === player) && (this.spaces[1][3].markedBy === player))
    || ((this.spaces[2][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[2][3].markedBy === player))
    || ((this.spaces[3][1].markedBy === player) && (this.spaces[3][2].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[1][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[3][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[1][3].markedBy === player))) {

      return player.won = true;
  }
}

  turnCounter++;
  console.log("End.");
}

function Game() {
  turnCount = 1;
  var board = new Board();
  var player1 = new Player("X"), player2 = new Player("O");
}


$(document).ready(function(){

  $("btn#newgame").submit(function(event) {
    event.preventDefault();
    var newGame = new Game();

    $(".game").click(function() {
      var square = document.getElementById()
      player.mark_by(square);
    })





  })
















})
