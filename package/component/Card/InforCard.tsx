import  {ReactNode} from 'react';
import styled from "styled-components";

export const InforCard = ({
    children
  }:{
    children:ReactNode
}) => {
    return (
        <InforCardStyle>
            {children}
        </InforCardStyle>
    );
};

const InforCardStyle = styled.div`
    padding:10px 30px;
    box-sizing:border-box;
    background:var(--white-color);
    border-radius:10px;
    a{
        color:var(--txt-colorB)
    }
`

