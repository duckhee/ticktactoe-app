import React, {useState, useEffect} from "react";
import "./square.css"

// 구조 분해를 이용해서 필요한 값만 가져오는 방법
const Square = ({value, onClick}) => {
    return (
        <button className={"square"} onClick={() => {
            // console.log(`${this.props.value} - click`);
            // useState에 값을 넣는 방법
            // this.setState({value: "X"});
            // 인자로 받은 props 함수를 호출하여 사용을 한다.
            onClick()
        }}>
            {/*props의 값을 가져오는 방법 -> 값의 이름이 value 이다.*/}
            {/*{this.props.value}*/}
            {/*useState의 값을 가져오는 방법*/}
            {/*{this.state.value}*/}
            {/*부모 Component에 있는 값을 가져오기 -> 상태 전파 */}
            {value}
        </button>
    );
}

export default Square;