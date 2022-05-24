import React from 'react';

type BodyPropsType = {
    titleFoBody: string
}

export const Body = (props: BodyPropsType) => {
    return <div>
        {props.titleFoBody}
    </div>
};