import React, {Component} from 'react';
import SquareClass from "./SquareClass";
import "./Board.css";

class BoardClass extends Component {

    renderSquare(i) {
        return <SquareClass value={i} aprops={i + 1}/>;
    }

    render() {
        return (
            <div>
                <div className={"status"}>Next Player: X, O</div>
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

