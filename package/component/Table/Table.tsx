import styled from "styled-components";
import {ReactNode} from "react";

export interface IColumn<T> {
    key: Partial<keyof T>;
    title: string | ReactNode;
    width?: number;
    ellipsis?: boolean;
    suffix?: string;
    render?: (e: T, index: number) => ReactNode;
    required?: boolean;
    parentTitle?: string;
}


export function Table<T> ({
    columns,
    data,
}:{
    columns?:IColumn<T>[],
    data?:T[],
}) {
    return (
        <TableStyle>
            <thead>
                {columns?.map(thead=>(
                    <th>{thead.title}</th>
                ))}
            </thead>
            <tbody>
                {/*
                {data?.map(tr=>(
                    <tr>
                        {tr?.map(td=>(
                            <td>{td}</td>
                        ))}
                    </tr>
                ))}
                */}
                {!data&&<td colSpan={columns?.length}>데이터가 존재하지않습니다.</td>}

            </tbody>
        </TableStyle>
    );
}

const TableStyle = styled.table`

`

