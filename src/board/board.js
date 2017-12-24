import React from 'react';

import Square from './../square/square';

export default class Board extends React.Component {
  renderSquare(rowIdx, colIdx) {
    return <Square 
      key={`${rowIdx}.${colIdx}`}
      value={this.props.squares[rowIdx][colIdx]}
      onClick={() => this.props.onClick(rowIdx, colIdx)}/>;
  }

  render() {
    const board = this.props.squares.map((rows, rowIdx) => {
      const cols = rows.map((col, colIdx) => this.renderSquare(rowIdx, colIdx));
      return <div className="board-row" key={rowIdx}>{cols}</div>
    });

    return <div>{board}</div>;
  }
}