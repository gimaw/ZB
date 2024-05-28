import styled from "styled-components";
import {ReactNode} from "react";

const CardComponent = ({
    children,
    title
}:{
    children:ReactNode,
    title?:string
}) => {
    return (
        <CardStyle title={title}>
            {title&&(<div className="cardTitle">{title}</div>)}
            {children}
        </CardStyle>
    );
};

const CardWrap=({
    children,
    gap=20
}:{
    children:ReactNode,
    gap:number
})=>{
    return (
        <CardWrapStyle gap={gap}>
            {children}
        </CardWrapStyle>
    )
}

export const Card = Object.assign(CardComponent,{
    Wrap:CardWrap
})

const CardWrapStyle = styled.div<{gap:number}>`
    width:100%;
    display:flex;
    align-items:stretch;
    justify-content:flex-start;
    gap:${(props)=>props.gap}px;
`

const CardStyle = styled.div`
    width:100%;
    background:var(--white-color);
    padding:20px 0;
    box-sizing:border-box;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.07);
    .cardTitle{
        border-bottom: 1px solid var()
    }
`
