import React from 'react';

import Square from './../square/square';

export default class Board extends React.Component {
  renderSquare(row, col) {
    return <Square 
      value={this.props.squares[row][col]}
      onClick={() => this.props.onClick(row, col)}/>;
  }

  render() {
    let board = this.props.squares.map((row, rowIdx) => {
      //[0,0,0], 0
      let rows = this.row.map((cell, cellIdx) => {
        return this.renderSquare(rowIdx, cellIdx);
      });

      return <div className="board-row">{rows}</div>
    });

    return (
      <div>{board}</div>
    );
  }
    }