import React, { useState } from 'react';
import ValueContext from './ValueContext';
import numberReducer from './numberReducer';

function Child(props) {
    // let value = React.useContext(ValueContext);
    // console.log(value, "value");
    let [state, dispatch] = React.useReducer(numberReducer, 54);
    // let updateValue = value[1];
    return (
        <div>
            {/* <div>{value[0]} hello</div>
            <button onClick={() => { updateValue(++value[0]) }}>Update Number</button> */}

            <h1>child 2</h1>
            {state}

            <button onClick={() => {
                dispatch({
                    type: "INCREMENT",
                    val: 67
                });
            }} >Increment</button>
            <button
                onClick={() => {
                    dispatch({
                        type: "DECREMENT",
                        val: -34
                    });
                }}
            >Decrement</button>

        </div>
    );
}

export default Child;