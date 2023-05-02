import React, { useState } from "react";
import Board from "./board";
import { calculateWinner } from "./game";

export default function App() {
    const [status, setStatus] = useState("Next Place: O");
    const [xIsNext, setXIsNext] = useState(false);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function updateSquares(updateSquares) {
        setHistory([...history, updateSquares]);
        setStatus("Next Move: " + (xIsNext ? "O" : "X"));
        setXIsNext(!xIsNext);
        const result = calculateWinner(updateSquares);
        if (result) {
            console.log("winner is " + result);
            setStatus("Winner is: " + result);
        }
    }
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onUpdateSquares={updateSquares} />
                <div className="status">{status}</div>
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}