import React from 'react';

type FooterPropsType = {
    titleFoFooter: string
}

export const Footer = (props: FooterPropsType) => {
    return <div>
        {props.titleFoFooter}
    </div>
};