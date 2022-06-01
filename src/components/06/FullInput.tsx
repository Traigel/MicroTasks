import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    messagesArr: Array<MessagesType>,
    addMessage: (title:string)=>void
}
type MessagesType = {
    message: string
}

export const FullInput = (props: FullInputType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandle = (u: ChangeEvent<HTMLInputElement>) => {
        setTitle(u.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return <div>
        <input onChange={onChangeInputHandle} value={title}/>
        <button onClick={onClickButtonHandler} >+</button>
        {props.messagesArr.map((u) => <div>{u.message}</div>)}
    </div>
}