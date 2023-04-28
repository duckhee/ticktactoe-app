import React, {Component} from 'react';
import SquareClass from "./SquareClass";
import "./Board.css";

class BoardClass extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            squares: Array(9).fill(null), // 배열의 시작부터 끝 인데스까지 해당 되는 값을 채워주는 함수가 fill 이다.
            xIsNext: true
        };

    }


// 자식 Component에서 클릭 시 동작 시킬 function 정의
    handleClick(i) {
        const squares = this.state.squares.slice(); // 원본에는 영향을 주지 않는 상태에서 값을 가져오는 것 -> deep copy
        // squares[i] = 'X'; // 클리 시 값 넣어주기
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        // state 값을 변경
        this.setState({squares: squares});
        this.setState(prev => {

            return {
                xIsNext: !prev.xIsNext // class component 에서 useState의 이전 값 가져오는 방법
            }
        });
    }

    calculateWinner(squares) {
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
    }


    renderSquare(i) {
        // return <SquareClass value={i} aprops={i + 1}/>;
        // return <SquareClass value={i} />;
        // 자식 Component에 값을 넣어준다.
        return <SquareClass value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    render() {
        return (
            <div>
                <div
                    className={"status"}>{this.calculateWinner(this.state.squares) !== null ? `Winner :${this.calculateWinner(this.state.squares)}` : `Next Player ${this.state.xIsNext ? 'X' : 'O'}`}</div>
                <div className={"board-row"}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={"board-row"}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={"board-row"}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>


            </div>
        );
    }
}

export default BoardClass;

