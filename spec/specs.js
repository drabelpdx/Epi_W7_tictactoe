describe('Player', function(){
  it("returns the player's mark", function(){
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the x-coordinate", function() {
    var testSpace =new Space(1,2);
    expect(testSpace.xCoordinate).to.equal(1);
  });

  it("returns the y-coordinate", function() {
    var testSpace =new Space(1,2);
    expect(testSpace.yCoordinate).to.equal(2);
  });

  it("returns both the x and y coordinates", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.coordinates()).to.eql([1,2]);
  });

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1, 2);
    testSpace.mark_by(testPlayer);
    expect(testSpace.markedBy).to.equal(testPlayer);
  });

});

describe('Board', function() {
  it("creates a 3x3 board grid when initialized", function() {
    var testBoard = new Board();
    expect(testBoard.spaces[1].length).to.equal(4)
  });

  it("creates a 3x3 board grid when initialized", function() {
    var testBoard = new Board();
    expect(typeof testBoard === 'object').to.equal(true);
  });

  it("determines if player has won", function() {
    var testBoard = new Board();
    var testPlayer = new Player("X");
    testBoard.find(1,1).mark_by(testPlayer);
    testBoard.find(1,2).mark_by(testPlayer);
    testBoard.find(1,3).mark_by(testPlayer);
    testBoard.winCondition(testPlayer);
    expect(testPlayer.won).to.equal(true);
  });

});
