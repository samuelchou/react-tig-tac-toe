import React from "react";


export function MoveRecord({ history, moveHistory, handleJumpTo }) {
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move + ": " + moveHistory[move];
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => handleJumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
    );
}