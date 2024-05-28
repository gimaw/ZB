import styled from "styled-components";
import {ReactNode} from "react";
import {IColumn, Table} from "@package/component/Table/Table";
import {Select} from "@package/component";


const PageNation = ()=>{

    return  (
        <div>


        </div>
    )
}

export function List<T> ({
    isCaption=null,
    isPageNation=null,
    tableOption=null,
    columns,
    data
}:{
    isCaption:ReactNode|null
    isPageNation:ReactNode|null
    tableOption:ReactNode|null
    columns:IColumn<T>[]
    data?:T[],
}) {
    return (
        <ListStyle>
            {isCaption&&(
                <div className='table--caption'>
                    <div className="table--caption--num">
                        총 <strong>0</strong>건
                    </div>
                    <div className="table--caption--sub">
                        {tableOption&&tableOption}

                        <Select>
                            <option value="AEC">최신순 보기</option>
                            <option value="DEC">오래된순 보기</option>
                        </Select>
                    </div>
                </div>
            )}
            <Table columns={columns} data={data}/>
            {isPageNation&&(
                <PageNation/>
            )}

        </ListStyle>
    );
}

const ListStyle = styled.div`

`

