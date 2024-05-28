import styled from "styled-components";

export const WrapStyle = styled.div`
`

export const TableWrap = styled.div`
    width:100%;
    overflow-x:auto;
`

export const TableCaption = styled.div`

`

export const TableStyle = styled.table`
    width:100%;
    table-layout:fixed;
    thead{
        th{
            padding:15px 10px;
        }
    }
    tbody{
        tr{
            &:nth-child(2n+1){
                td{
                    
                    background:var(--white-color);
                    &:first-child{
                        border-top-left-radius:10px;
                        border-bottom-left-radius:10px;
                    }
                    &:last-child{
                        border-top-right-radius:10px;
                        border-bottom-right-radius:10px;
                    }
                }
            }
            td{
                padding:15px;
                text-align:center;
                .ellipsis{
                    width:100%;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }
            
        }
    }    
`