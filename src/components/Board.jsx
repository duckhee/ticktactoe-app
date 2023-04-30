import React, {useState, useEffect} from "react";
import "./Board.css";
import Square from "./Square";

const Board = ({handleClick, winner, gameStatus, squares}) => {
    // const [squares, setSquares] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);

    // // const status = `Next Player ${xIsNext ? 'X' : 'O'}`;
    // const handleClick = (i) => {
    //     const newSquares = squares.slice();
    //     // 이미 클릭이 되어 있는 경우와 승자가 있을 경우 업데이트 하지 않음
    //     if (calculateWinner(newSquares) || newSquares[i]) {
    //         return;
    //     }
    //     newSquares[i] = xIsNext ? 'X' : 'O';
    //     setSquares(newSquares);
    //     setXIsNext(prevState => !prevState); // 이전 값을 읽어와서 값을 반전 시킨다.
    // };

    //
    // // 승자 계산하는 함수
    // const calculateWinner = (squares) => {
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6]
    //     ];
    //
    //     for (let index = 0; index < lines.length; index++) {
    //         const [a, b, c] = lines[index];
    //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //             return squares[a];
    //         }
    //     }
    //     return null;
    // };
    //
    // // 승자에 대한 계산 값
    // const winner = calculateWinner(squares);
    // let status;
    // if (winner !== null) {
    //     status = `Winner ${winner}`;
    // } else {
    //     status = `Next Player : ${xIsNext ? 'X' : 'O'}`;
    // }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)}/>
    };

    return (
        <div className={"board-wrapper"}>
            {/*<div className={"status"}>{status}</div>*/}
            {/*<div className={"status"}>{gameStatus}</div>*/}
            <div className={"board-row"}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={"board-row"}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={"board-row"}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;