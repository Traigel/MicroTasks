import React, {ChangeEvent} from 'react';

type InputComponentType = {
    value: string,
    callBack: (u: string) => void
}

export const InputComponent = (props: InputComponentType) => {

    const onChangeInputHandler = (u: ChangeEvent<HTMLInputElement>) => {
        props.callBack(u.currentTarget.value)
    }

    return <div>
        <input onChange={onChangeInputHandler} value={props.value}/>
    </div>
}