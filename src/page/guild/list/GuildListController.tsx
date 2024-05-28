import {useQuery} from "@tanstack/react-query";
import {guildsApi} from "@package/api";
import {IColumn} from "@package/component/ListView/ListView.type";
import {dateFormat} from "@package/util";
import {useState} from "react";
import {useSearchState} from "@package/hook";

interface GuildColumn {
    GuildMessage:string
    GuildName:string
    MasterName:string
    MaxMemberCount:number
    MemberCount:number
    Rank:number
    Rating:number
    UpdatedDate:string
}

export const GuildListController = () => {

    const [ state,setState ] = useSearchState({
        schSelect:''

    })
    const { data:guild } = useQuery({
        queryFn:()=>guildsApi.rank(''),
        queryKey:['guild',state]
    })

    const columns: IColumn<GuildColumn>[] = [
        {
            key:'Rank',
            title:'순위',
            width:60
        },
        {
            key:'GuildName',
            title:'이름',
            width:200
        },
        {
            key:'GuildMessage',
            title:'메세지',
            ellipsis:true,
            width:300,
            textAlign:'left'
        },
        {
            key:'MasterName',
            title:'관리자',
            width:200
        },
        {
            key:'Rating',
            title:'rating',
            width:90
        },
        {
            key:'MemberCount',
            title:'인원수',
            width:90
        },
        {
            key:'MaxMemberCount',
            title:'최대 인원수',
            width:100
        },
        {
            key:'UpdatedDate',
            title:'갱신일',
            width:160,
            render:(e)=>{
                return `${dateFormat(e.UpdatedDate)}`
            }
        },
    ]


    return {
        guild,
        columns,
        state,
        setState
    };
};
