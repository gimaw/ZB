import  {ReactNode} from 'react';
import styled from "styled-components";

const HeaderStyle = styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:flex-end;
   gap:8px;
   margin-bottom:40px;
   position:relative;
   z-index:10;
`

export const Style = ({children}:{children:ReactNode}) => {
    return (
        <HeaderStyle>
            {children}
        </HeaderStyle>
    );
};

