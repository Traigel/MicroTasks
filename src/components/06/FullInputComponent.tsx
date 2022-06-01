import React, {useState} from 'react';
import {InputComponent} from "./InputComponent";
import {ButtonComponent} from "./ButtonComponent";

export const FullInputComponent = () => {

    const [message, setMessage] = useState([{message: 'Yo'},])

    const buttonCallBack = () => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }

    let [title, setTitle] = useState('')

    const inputCallBack = (u: string) => {
        setTitle(u)
    }


    return <div>
        <InputComponent value={title} callBack={inputCallBack}/>
        <ButtonComponent buttonName={'+'} callBack={buttonCallBack}/>
        {message.map(u => <div>{u.message}</div>)}
    </div>
}