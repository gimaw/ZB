import  {ReactNode} from 'react';
import styled from "styled-components";

const PageComponent = ({children}:{children:ReactNode}) => {
    return (
        <PageStyle>
            {children}
        </PageStyle>
    );
};

const WrapPage = ({children}:{children:ReactNode})=>{
    return (
        <WrapStyle>
            {children}
        </WrapStyle>
    )
}

const ContentsPage = ({children}:{children:ReactNode})=>{
    return (
        <ContentsStyle>
            {children}
        </ContentsStyle>
    )
}

export const Page = Object.assign(PageComponent,{
    Wrap:WrapPage,
    Contents:ContentsPage
})

const WrapStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    width:100%;
    gap:30px;
`

const ContentsStyle = styled.div`
    width:100%;
    .title{
        font-size:20px;
        font-weight:600;
        color:var(--txt-colorA);
        margin-bottom:10px;
    }
`

const PageStyle = styled.div`
    width:100%;
`