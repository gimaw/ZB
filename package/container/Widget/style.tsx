import styled from "styled-components";

export const WidgetStyle = styled.div`
    position:fixed;
    top:50%;
    right:0;
    transform:translateY(-50%);
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:center;
    gap:10px;
    button{
        background:var(--white-color);
        width:40px;
        height:70px;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
        font-size:15px;
        font-weight:600;
        cursor:pointer;
        box-shadow:-5px 5px 8px rgba(0,0,0,0.1);
    }
`

