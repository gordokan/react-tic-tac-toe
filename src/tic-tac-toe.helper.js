export function getBlankBoard(width) {
  let board = [];
  for(let row = 0; row < width - 1; row++) {
    let row = [];
    for(let col = 0 ; col < width - 1; col++) {
      row.push(0);
    } 
    board.push(row);
  }
  // new:
  /**
   * [[0, 0, 0], [0,0,0], [0,0,0]];
   */
  return board;

  // old [null, null, null, null, null, null, null, null, null];
  // return Array(size).fill(null);
}

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}