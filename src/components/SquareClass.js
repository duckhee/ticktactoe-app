import React from "react";
import "./square.css"

class SquareClass extends React.Component {

    render() {
        return (
            <button className={"square"} onClick={() => console.log(`${this.props.value} - click`)}>
                {/*props의 값을 가져오는 방법 -> 값의 이름이 value 이다.*/}
                {this.props.value}
            </button>
        );
    }
}

export default SquareClass;