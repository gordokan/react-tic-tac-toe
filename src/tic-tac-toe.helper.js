export function getBlankBoard(width) {
  let board = [];
  for(let rowIdx = 0; rowIdx <= width - 1; rowIdx++) {
    let row = [];
    for(let colIdx = 0 ; colIdx <= width - 1; colIdx++) {
      row.push(null);
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