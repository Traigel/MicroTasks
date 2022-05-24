import React from 'react';

type BodyPropsType = {
    titleFoBody: string
}

export const Body = (props: BodyPropsType) => {
    return <div className="App">
        {props.titleFoBody}
    </div>
};