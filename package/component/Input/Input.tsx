import styled from "styled-components";
import {ReactNode} from "react";

export const Input = ({
    btn=null,
    height='40px',
    width='100%',
    background='initial',
    value,
    onChange,
    onBlur,
    onFocus,
    onKeyPress
}:{
    btn?:null|ReactNode
    height?:string
    width?:string
    background?:string
    value?:string
    onChange?:(e:string)=>void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onKeyPress && onKeyPress(e);
        }
    };

    const handleChange = (i:React.ChangeEvent<HTMLInputElement>)=>{
        if(onChange){
            onChange(i.target.value)
        }
    }

    return (
        <InputStyle
            height={height}
            width={width}
            background={background}
        >
            <input
               type="text"
               value={value}
               onChange={handleChange}
               onKeyUp={handleKeyPress}
               onBlur={onBlur}
               onFocus={onFocus}
            />
            {btn&&btn}
        </InputStyle>
    );
};

const InputStyle = styled.div<{height:string,width:string,background:string}>`
    height:${props=>props.height};
    display:flex;
    align-items:center;
    background:var(--white-color);
    border-radius:5px;
    input{
        width:${props=>props.width};
        height:${props=>props.height};
        border-radius:5px;
        background:${props=>props.background};
        text-indent:15px;
        color:var(--txt-colorB);
    }
`


