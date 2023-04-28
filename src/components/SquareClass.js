import React from "react";
import "./square.css"

class SquareClass extends React.Component {


    constructor(props) {
        super(props);
        // useState와 동일한 기능을 하는 class 형 component의 기능
        this.state = {
            value: null,
        };

    }

    render() {
        return (
            <button className={"square"} onClick={() => {
                console.log(`${this.props.value} - click`);
                // useState에 값을 넣는 방법
                this.setState({value: "X"});
            }}>
                {/*props의 값을 가져오는 방법 -> 값의 이름이 value 이다.*/}
                {/*{this.props.value}*/}
                {/*useState의 값을 가져오는 방법*/}
                {this.state.value}
            </button>
        );
    }
}

export default SquareClass;