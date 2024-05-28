import React, { MouseEventHandler} from 'react';
import styled from "styled-components";

type IconType='sun'|'user'|'search'|'star';

const iconMap : Record<IconType, string>={
    sun:'../../../package/assets/icon/ic-sun.svg',
    user:'../../../package/assets/icon/ic-user.svg',
    search:'../../../package/assets/icon/ic-search.svg',
    star:'../../../package/assets/icon/ic-star.svg'
}

export const Icon = ({
    image,
    width='16px',
    height='16px',
    color='var(--primary-color)',
    style,
    onClick
}:{
    image:IconType,
    width?:string,
    height?:string,
    color?:string,
    style?:React.CSSProperties,
    onClick?: MouseEventHandler<HTMLElement>;
}) => {
    return (
        <IconStyle
            width={width}
            height={height}
            color={color}
            data-mask={!!color}
            onClick={(e)=>{
                e.currentTarget.blur();
                return onClick && onClick(e);
            }}
            image={iconMap[image]}
            style={{...style}}
        />


    );
};

const IconStyle = styled.div<{
    width:string,
    height:string,
    color:string,
    image:string,
    style?:React.CSSProperties
}>`
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width:${(props)=>props.width};
    height:${(props)=>props.height};
    // aspect-ratio:1/1;
    &[data-mask='true'] {
        -webkit-mask: ${(props) => `url(${props.image}) no-repeat`};
        -webkit-mask-size: ${(props) => `${props.width}px ${props.height}px`};
        mask: ${(props) => `url(${props.image}) no-repeat`};
        mask-size: ${(props) => `${props.width}px ${props.height}px`};
        background-color: ${(props) => props.color};
        background-size: contain;
        -webkit-mask-position-x: center;
        -webkit-mask-position-y: center;
    }
    &[data-mask='false'] {
        background-image: ${(props) => `url(${props.image})`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: center;
        background-position-y: center;
    } 
`


