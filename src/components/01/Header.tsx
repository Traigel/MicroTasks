import React from 'react';

type HeaderPropsType = {
    titleFoHeader : string
}

export const Header = (props: HeaderPropsType) => {
    return <div>
        {props.titleFoHeader}
    </div>
};