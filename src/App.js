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
  const [toggled, setToggle] = useState('');
  const onHandleClick = (() => {
    if (toggled === '') setToggle('O');
    else setToggle('');
  });

  return (
    <div>
      <div className="board-row">
        <Square value={toggled} onHandleClick={onHandleClick} />
        <Square value={toggled} onHandleClick={onHandleClick} />
        <Square value={toggled} onHandleClick={onHandleClick} />
      </div>
      <div className="board-row">
        <Square value={toggled} onHandleClick={onHandleClick} />
        <Square value={toggled} onHandleClick={onHandleClick} />
        <Square value={toggled} onHandleClick={onHandleClick} />
      </div>
      <div className="board-row">
        <Square value={toggled} onHandleClick={onHandleClick} />
        <Square value={toggled} onHandleClick={onHandleClick} />
        <Square value={toggled} onHandleClick={onHandleClick} />
      </div>
    </div>
  );
}
