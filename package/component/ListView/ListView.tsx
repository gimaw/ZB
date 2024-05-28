import {TableCaption, TableStyle, TableWrap, WrapStyle} from "./Style";
import {Select} from "../Select/Select";
import {IColumn} from "./ListView.type";

export function ListView<T>({
    columns=[],
    data=[]
 }:{
    columns:IColumn<T>[]
    data?:T[]
}) {

    console.log('??',data)

    return (
        <WrapStyle>
            <TableCaption>
                <Select>

                </Select>
            </TableCaption>
            <TableWrap>
                <TableStyle>
                <colgroup>
                    {columns.map((e:IColumn<T>)=>(
                        <col key={e.key.toString()} width={e.width} />
                    ))}
                </colgroup>
                <thead>
                    <tr>
                        {columns.map((e:IColumn<T>)=>(
                            <th key={e.key.toString()}>{e.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item,index)=>(

                        <tr key={index}>
                            {columns.map((e, index) =>{
                                const value = item[e.key]

                                return (
                                    <td key={index} style={{textAlign:e.textAlign}}>
                                        {
                                            e.ellipsis? <div className="ellipsis">{value}</div>:
                                                (e.render ? e.render(item, index) : value)
                                        }
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </TableStyle>
            </TableWrap>
        </WrapStyle>
    );
}