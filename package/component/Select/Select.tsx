import styled from "styled-components";
import {ReactNode} from "react";

export const Select = ({
    // data=[],
    value,
    defaultValue,
    onChange=(e)=>console.log(e),
    children,
}:{
    // data:{value:string,name:string}[],
    value?:string,
    defaultValue?:string,
    onChange?:(e:string|number)=>void
    children?:ReactNode|null
}) => {
    return (
        <SelectStyle>
            <select
                value={value}
                defaultValue={defaultValue}
                onChange={(e)=>onChange(e.target.value)}
            >
                {children}
                {/*
                    {data?.map(e=>(
                        <option value={e.value}>{e.name}</option>
                    ))}
                */}
            </select>
        </SelectStyle>
    );
};

const SelectStyle = styled.div``