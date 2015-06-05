var idAttributeName = 'id';

var circleColor = 'lightblue';
var crossColor = 'lightgreen';

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
  if  (((this.spaces[1][1].markedBy === player) && (this.spaces[2][1].markedBy === player) && (this.spaces[3][1].markedBy === player))
    || ((this.spaces[1][2].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[3][2].markedBy === player))
    || ((this.spaces[1][3].markedBy === player) && (this.spaces[2][3].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[1][1].markedBy === player) && (this.spaces[1][2].markedBy === player) && (this.spaces[1][3].markedBy === player))
    || ((this.spaces[2][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[2][3].markedBy === player))
    || ((this.spaces[3][1].markedBy === player) && (this.spaces[3][2].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[1][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[3][3].markedBy === player))
    || ((this.spaces[3][1].markedBy === player) && (this.spaces[2][2].markedBy === player) && (this.spaces[1][3].markedBy === player))) {

      return player.won = true;
  }

}

function Game() {
  turnCount = 1;
  board = new Board();
  player1 = new Player("X"), player2 = new Player("O");
}

function drawCircle(fieldId) {
  var canvas =  document.getElementById(fieldId);
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var innerRadius = 0.5 * canvas.width / 2;
  var outerRadius = 0.75 * canvas.width / 2;

  context.beginPath();
  context.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI, false);
  context.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI, true);
  context.fillStyle = circleColor;
  context.fill();
};

function drawCross(fieldId) {
  var canvas =  document.getElementById(fieldId);
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  var innerMostPointsOffset = 0.20 * canvas.width / 2;
  var innerEndingPointsXOffset = 0.4 * canvas.width / 2;
  var innerEndingPointsYOffset = 0.75 * canvas.width / 2;
  var outerEndingPointsXOffset = 0.75 * canvas.width / 2;
  var outerEndingPointsYOffset = 0.75 * canvas.width / 2;

  context.fillStyle = crossColor;
  context.beginPath();
  context.moveTo(centerX - innerMostPointsOffset, centerY);
  context.lineTo(centerX - outerEndingPointsXOffset, centerY - outerEndingPointsYOffset);
  context.lineTo(centerX - innerEndingPointsXOffset, centerY - innerEndingPointsYOffset);
  context.lineTo(centerX, centerY - innerMostPointsOffset);
  context.lineTo(centerX + innerEndingPointsXOffset, centerY - innerEndingPointsYOffset);
  context.lineTo(centerX + outerEndingPointsXOffset, centerY - outerEndingPointsYOffset);
  context.lineTo(centerX + innerMostPointsOffset, centerY);
  context.lineTo(centerX + outerEndingPointsXOffset, centerY + outerEndingPointsYOffset);
  context.lineTo(centerX + innerEndingPointsXOffset, centerY + innerEndingPointsYOffset);
  context.lineTo(centerX, centerY + innerMostPointsOffset);
  context.lineTo(centerX - innerEndingPointsXOffset, centerY + innerEndingPointsYOffset);
  context.lineTo(centerX - outerEndingPointsXOffset, centerY + outerEndingPointsYOffset);
  context.closePath();
  context.fill();
};


$(document).ready(function(e) {

var turn = 1

  $('button#newGame').click(function(e) {
    var newGame = new Game();
    alert("Player 'X' begins.")
  });

  $('canvas.field').click(function(e) {

    if(turn % 2 !== 0) {

      var field = $(this);
      $(this).off('click');

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
      drawCross(fieldId);

      if (board.winCondition(player1)) {
        $(".messages").text("Player 1 wins!!");
        $('.field').off('click')
      }

  } else {
      var field = $(this);
      $(this).off('click');

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

      board.find(xnum, ynum).mark_by(player2);
      drawCircle(fieldId);

      if (board.winCondition(player2)) {
        $(".messages").text("Player 2 wins!!");
        $('.field').off('click')
      }

    }
    turn++

    console.log(board.find(xnum, ynum))
    console.log(turn)

  });

  $('button#reset').click(function(event){
   event.preventDefault();
   document.location.reload(true);
  });
});
