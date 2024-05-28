import  {ReactNode} from 'react';
import styled from "styled-components";

const LayoutStyle = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    background:var(--background-color);
    padding:30px 40px;
    box-sizing:border-box;
    width:100%;
    max-width:1300px;
    gap:20px;
    margin-right:auto;
    margin-left:auto;
`

export const Style = ({children}:{children:ReactNode}) => {
    return (
        <LayoutStyle>
            {children}
        </LayoutStyle>
    );
};

