import React, { useState } from 'react';

function Square({ value, onHandleClick }) {
  return (
    <button
      className="square"
      onClick={onHandleClick}
    >
      {value}
    </button>);
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);

  function onClickSquare(position) {
    if (squares.length <= position) return; // TODO: make warning?
    if (squares[position]) return;
    const newValues = squares.slice();
    if (xIsNext) {
      newValues[position] = 'X';
    } else {
      newValues[position] = 'O';
    }
    setSquares(newValues);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} onHandleClick={() => onClickSquare(0)} />
        <Square value={squares[1]} onHandleClick={() => onClickSquare(1)} />
        <Square value={squares[2]} onHandleClick={() => onClickSquare(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onHandleClick={() => onClickSquare(3)} />
        <Square value={squares[4]} onHandleClick={() => onClickSquare(4)} />
        <Square value={squares[5]} onHandleClick={() => onClickSquare(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onHandleClick={() => onClickSquare(6)} />
        <Square value={squares[7]} onHandleClick={() => onClickSquare(7)} />
        <Square value={squares[8]} onHandleClick={() => onClickSquare(8)} />
      </div>
    </div>
  );
}
