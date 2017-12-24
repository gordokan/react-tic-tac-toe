export function getBlankBoard(width) {
  const board = [];
  for(let col = 0; col <= width - 1; col++) {
    board[col] =[];
    for(let row = 0; row <= width -1; row++) {
      board[col][row] = null;
    }
  }
  return board;
}

export function getLocationDisplay(options) {
  return `Move: (${options.row + 1}, ${options.col + 1})`
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