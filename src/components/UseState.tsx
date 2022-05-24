import React, {useState} from 'react';

export const UseState = () => {

    let [a, setA] = useState(0)

    let onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    return <div>
        <div>{a}</div>
        <button onClick={onClickHandler}>Number+</button>
        <button onClick={()=>setA(a = 0)}>0</button>
    </div>
};