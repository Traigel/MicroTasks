import React from 'react';

type ButtonType = {
    buttonName: string,
    callBack: () => void
}

export const ButtonComponent = (props: ButtonType) => {

    const onclickButtonHandler = () => {
        props.callBack()
    }

    return <div>
        <button onClick={onclickButtonHandler}>{props.buttonName}</button>
    </div>
}