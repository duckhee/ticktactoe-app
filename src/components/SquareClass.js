import React from "react";
import "./square.css"

class SquareClass extends React.Component {

    render() {
        return (
            <button className={"square"}>
                {/*props의 값을 가져오는 방법*/}
                {this.props.value}
            </button>
        );
    }
}

export default SquareClass;