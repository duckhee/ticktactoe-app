import logo from './logo.svg';
import './App.css';
import BoardClass from "./components/BoardClass";
import Board from "./components/Board";
import {useState} from "react";

function App() {
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [xIsNext, setXIsNext] = useState(true);
    // 이전 값으로 넘어갔을 때, 스텝을 기억하기 위한 값을 useState에 저장
    const [stepNumber, setStepNumber] = useState(0);

    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const newCurrent = newHistory[newHistory.length - 1];
        // const newSquares = currentState.squares.slice();
        const newSquares = newCurrent.squares.slice();
        // 이미 클릭이 되어 있는 경우와 승자가 있을 경우 업데이트 하지 않음
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        // setHistory(prev => [...prev, {squares: newSquares}]); // 현재 저장된 히스토리 값을 가져와서 복사 한 후 추가를 해준다.
        setHistory([...newHistory, {squares: newSquares}]);
        setXIsNext(prevState => !prevState); // 이전 값을 읽어와서 값을 반전 시킨다.

        setStepNumber(newHistory.length);
    };


    // 승자 계산하는 함수
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };


    // 현재 상태를 보여주기 위한 변수 선언
    // const currentState = history[history.length - 1];
    const currentState = history[stepNumber];

    // 승자에 대한 계산 값
    const winner = calculateWinner(currentState.squares);

    // 이전 값으로 돌아가는 함수
    const jumpTo = (index) => {
        setStepNumber(index);
        setXIsNext((index % 2) == 0);
    }

    // 이전 값으로 돌리기 위한 함수 선언
    const moves = history.map((step, index) => {
        const desc = index ? `Go to move #${index}` : `Go to Game Start`;
        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>
                    {desc}
                </button>
            </li>
        )
    });

    let status;
    if (winner !== null) {
        status = `Winner ${winner}`;
    } else {
        status = `Next Player : ${xIsNext ? 'X' : 'O'}`;
    }
    return (
        <div className="game">
            <div className={"game-board"}>
                {/*<BoardClass/>*/}
                <Board handleClick={(i) => handleClick(i)} gameStatus={status} squares={currentState.squares}/>
            </div>
            <div className={"game-info"}>
                <div className={"status"}>{status}</div>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    );
}

export default App;
