import styled from "styled-components";
import {ReactNode, useContext} from "react";
import {ThemeContext} from "../../util/theme/theme";

const SideBarStyle = styled.div<{mode:string}>`
    background:var(--sideBar-color);
    padding:20px;
    box-sizing:border-box;
    width:250px;
    border-radius:10px;
    box-shadow:0px 10px 10px rgba(0,0,0,0.07);
    .sideBar{
        &--list{
            display:flex;
            flex-direction:column;
            gap:5px;
        }
        &--item{
            button{
                width:100%;
                padding: 8px 10px 6px;
                box-sizing:border-box;
                border-radius:4px;
                h3{
                    color:var(--txt-colorA);
                    padding: 0;
                    display:block;
                    margin:0;
                    font-size:16px;
                    font-weight:500;
                    line-height: 1;
                    text-align:left;
                    vertical-align:middle;
                }
                &:hover{
                    background:var(--primary-color);
                    h3{
                        color:#fff;
                    }
                }
            }
            &.active{
                button{
                    h3{                       
                        color:var(--primary-color);
                        
                    }
                }
                &:hover{
                    button{
                        h3{
                            color:#fff;
                        }
                    }
                }
            }
        }
        &--inner{
            &--item{
                a{
                    color:var(--txt-colorA);
                    padding: 6px 0;
                    display:block;
                }
            }
        } 
    }
`

export const Style = ({children}:{children:ReactNode}) => {

    const { style } = useContext(ThemeContext)

    return (
        <SideBarStyle mode={style}>
            {children}
        </SideBarStyle>
    );
};

