import React, { useState } from "react";
import Board from "./board";
import { calculateWinner } from "./game";
import { MoveRecord } from "./MoveRecord";

export default function App() {
    const [status, setStatus] = useState("Next Place: O");
    const [xIsNext, setXIsNext] = useState(false);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [moveHistory, setMoveHistory] = useState([Array(2).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function updateSquares(updateSquares, position) {
        const nextHistory = [...history.slice(0, currentMove + 1), updateSquares];
        setHistory(nextHistory);
        const nextCurrentMove = nextHistory.length - 1;
        setCurrentMove(nextCurrentMove);
        const nextMoveHistory = [...moveHistory.slice(0, nextCurrentMove), [nextCurrentMove % 2 === 0 ? "X" : "O" ,position]];
        setMoveHistory(nextMoveHistory);
        setStatus("Next Move: " + (xIsNext ? "O" : "X"));
        setXIsNext(!xIsNext);
        const result = calculateWinner(updateSquares);
        if (result) {
            console.log("winner is " + result);
            setStatus("Winner is: " + result);
        }
    }
    function jumpToHistoryMove(move) {
        console.log("jump to move:", move);
        setCurrentMove(move);
        let xIsNext = move % 2 === 1;
        setXIsNext(xIsNext);
        setStatus("Next Move: " + (xIsNext ? "X" : "O"));
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onUpdateSquares={updateSquares} />
                <div className="status">{status}</div>
            </div>
            <MoveRecord history={history} handleJumpTo={jumpToHistoryMove} moveHistory={moveHistory} />
        </div>
    );
}