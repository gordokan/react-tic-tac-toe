import React from 'react';

import Square from './../square/square';

export default class Board extends React.Component {
  renderSquare(row, col) {
    return <Square 
      key={row + '.' + col}
      value={this.props.squares[row][col]}
      onClick={() => this.props.onClick(row, col)}/>;
  }

  render() {
    const board = this.props.squares.map((row, rowIdx) => {
      // normally using the index would be in anti-pattern because if the array size changes this key is useless - but
      //this board is static for now.
      return <div className="board-row" key={rowIdx}>
                {
                  row.map((cell, cellIdx) => this.renderSquare(rowIdx, cellIdx))
                }
              </div>
    });

    return (
      <div>{board}</div>
    );
  }
    }