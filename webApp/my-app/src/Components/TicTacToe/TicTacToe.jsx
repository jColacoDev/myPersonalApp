import "./TicTacToe.scss"
import React from 'react'
import Board from "./Board/Board";
import Info from "./Info/Info";

export default function TicTacToe() {
    const [reset, setReset] = React.useState(false);
    const [winner, setWinner] = React.useState('');

    const resetBoard = () => {
        setReset(true);
    }

return (
    <div className="TicTacToe">
        <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
            <div className='winner-text'>{winner}</div>
            <button onClick={() => resetBoard()}>
                Reset Board
            </button>
        </div>
        <Board 
            reset={reset} 
            setReset={setReset} 
            winner={winner} 
            setWinner={setWinner} 
        />
        <Info />
    </div>
)}
