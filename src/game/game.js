import React from 'react';
import Board from './../board/board';
import {map, clone} from 'lodash';

import {getBlankBoard, calculateWinner, getLocationDisplay} from './../tic-tac-toe.helper';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: getBlankBoard(3),
        moveAdded: {}
      }],
      xIsNext: true,
      stepNumber: 0
    }
  }

  render() {
    const history = this.state.history;
    /** 
     * [
     *  [{ history: 
     *    [[null, null, null],[null, null, null],[null, null, null]]
     *  }],
     *  {history: [[null, null, null],[null, null, null],[null, null, null]]}
     * ]
    */
    console.log('history', history);
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const description = move ? 'Go to move #' + move : 'Go to game start';
      const locationDisplay = move ? getLocationDisplay(step.moveAdded) : '';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{description + ' ' +  locationDisplay}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(row, col) => this.handleClick(row, col)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  handleClick(row, col) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = map(current.squares, clone); // make a copy of the array
    if (calculateWinner(squares) || squares[row][col]) {
      return;
    }
    squares[row][col] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        moveAdded:{row, col}
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }
}  