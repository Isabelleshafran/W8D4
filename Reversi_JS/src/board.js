// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  // let grid = []
  // let row = []
  // for(let i = 0; i < 8; i++){
  //   for(let j = 0; j < 8; j++){
  //     row.push(" ");
  //   }
  //   grid.push(row);
  //   row = []
  // }
  // console.log(grid);
  let grid = Array.from(Array(8), () => new Array(8));
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  // console.log(grid);
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();

}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  x = pos[0];
  y = pos[1];

  if (x < 0 || y < 0) return false;
  if(x > 7 || y > 7) return false;
  return true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if(!this.isValidPos(pos)){
    throw new Error('Not valid pos!')
  }
    x = pos[0];
    y = pos[1];

    if (this.grid[x][y]) {
      return this.grid[x][y]; 
    } else {
      return undefined;
    }
}

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  x = pos[0];
  y = pos[1];
  if (this.grid[x][y] === undefined) return undefined;
  if(this.grid[x][y].color === color){
    return true;
  }else{
    return false;
  }
  
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  x = pos[0];
  y = pos[1];
  if (this.grid[x][y] !== undefined)return true;
  return false;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  // everytime we call recursievely pos should be different && pieces to flip should be different
  // return peices to flip if we hit our own piece 
  x = pos[0];
  y = pos[1];
  // debugger
  piecesToFlip = []
  if(!this.isValidPos(pos))return [];
  newPos = [(x + dir[0]), (y + dir[1])]
  if(!this.isOccupied(newPos)) return [];
  if (this.grid[newPos[0]][newPos[1]].oppColor() !== color) return piecesToFlip; 
  
  piecesToFlip.push(newPos)
  return piecesToFlip.concat(this._positionsToFlip(newPos, color, dir, piecesToFlip))
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  x = pos[0];
  y = pos[1];
  
  if (this.isValidPos(pos)) {
    if(this.isOccupied(pos) && this.grid[x][y].color === color){
      return false;} 
    else{
      for (let i = 0; i < this.DIRS.length; i++) {
        dir = this.DIRS[i];
        if(this._positionsToFlip(pos, color, dir).length > 0) {
          return true}
    } 
  }}
  else {
    return false;
  }

 

  // check if you put a pieces there and the positions to flip array returns with any sort of length (longer than 1) its a valid move
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the Piece ("black") player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE