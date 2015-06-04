var tokenAttributeName = 'token';
var idAttributeName = 'id';

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

Board.prototype.mark_by = function(Player) {
  this.markedBy = Player
  return this.markedBy;
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

  turnCounter++;
}

function Game() {
  turnCount = 1;
  board = new Board();
  player1 = new Player("X"), player2 = new Player("O");
}

$(document).ready(function(e) {

  $("button").click(function(e) {
    var newGame = new Game();
    alert("Player 'X' begins.")
  });

  $('canvas.field').click(function(e) {
    var field = $(this);
    var fieldId = field.attr(idAttributeName);
    var holding = fieldId.split(",")

    var num1 = holding.shift();
    var num = parseInt(num1);
    var xnum = [] ;
    xnum.push(num);

    var num2 = holding.shift();
    var num = parseInt(num2);
    var ynum = [];
    ynum.push(num);

    board.find(xnum, ynum).mark_by(player1);
    console.log(board.find(xnum, ynum))
  });

});






// Board.prototype.turn = function(player) {
//// turnCount % 2 === 0
//   }

// if (turnCount > 9) {
//    alert("Game ends in a tie.");
//  } else if (true) {
// console.log("Player X's turn");


    //    player
    //   } else
    //    console.log("Player O's turn");
    //    $('li').click(function(e) {
    //        var linker = this.id;
    //        player.mark_by(linker);
    //        alert(linker);
    //    });
    // //  else {}

//     //  player marks something
//     //   SPACEID.mark_by(player)
//       if (player.winCondition){
//         return player.mark + " has won!"
//

//       board.turn(player2);
//   }
//   space.mark_by(player)

//  });
