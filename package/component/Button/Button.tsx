import styled from "styled-components";
import {MouseEventHandler, ReactNode} from "react";

interface Button {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    color?:string
    background?:string
    children?:string|ReactNode
    style?:React.CSSProperties
}

const ButtonComponent = ({
    onClick,
    color,
    background='var(--white-color)',
    children,
    style,
   }:Button) => {
    return (
        <ButtonStyle
            onClick={(e)=>{
                e.currentTarget.blur();
                return onClick && onClick(e);
            }}
            props={{
                color,
                background
            }}
            style={{...style}}
        >
            {children}
        </ButtonStyle>
    );
};

const ButtonStyle = styled.button<{props:Button}>`
    background:${(props)=>props.props.background};
    color:${(props)=>props.props.color};
    cursor:pointer;
    padding:10px 15px;
    box-sizing:border-box;
    background:var(--white-color);
    display:inline-flex;
    border-radius:5px;
`

function ShdowButtonComponent(props:Button){
    return (
        <Button
            {...props}
            style={{
                boxShadow:'0 5px 10px rgba(0,0,0,0.08)',
            }}
        >
            {props.children}
        </Button>

    )
}

export const Button = Object.assign(ButtonComponent,{
    Shadow: ShdowButtonComponent

})

