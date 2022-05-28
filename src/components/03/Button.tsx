import React from 'react';

type ButtonPropsType = {
    name: string,
    callBack:()=>void,
}

export const Button = (props: ButtonPropsType) => {

    // const myFirstSubscriber = (name: string) => console.log(name)
    // const oneButton = () => console.log(100200)
    // const twoButton = (number: number) => console.log(number)

    return <div>
        <button onClick={()=>props.callBack()}>{props.name}</button>
        {/*<button onClick={(event)=>{console.log('Hello')}}>MyYouTubeChane-1</button>*/}
        {/*<button onClick={()=>myFirstSubscriber('Vova')}>MyYouTubeChane-2</button>*/}
        {/*<button onClick={()=>myFirstSubscriber('Ivan')}>MyYouTubeChane-2</button>*/}
        {/*<button onClick={oneButton}>One</button>*/}
        {/*<button onClick={()=>twoButton(100200)}>Two</button>*/}
    </div>
};