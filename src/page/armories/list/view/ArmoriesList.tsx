import {useController} from "@package/util";
import {ArmoriesListController} from "@src/page/armories/list";
import {InforCard} from "@package/component/Card";
import styled from "styled-components";
import {Page} from "@package/component";
import {Link} from "react-router-dom";

export const ArmoriesList = () => {
    const {recentlySearch}=useController(ArmoriesListController)

    console.log(recentlySearch)

    return (
        <Page.Wrap>
            <Page.Contents>
                <div className="title">최근 검색어</div>
                    <ArmoriesListStyle>
                        {recentlySearch.length>0?(
                            <ul className="searchRecently">
                                {recentlySearch.map((e)=>(
                                    <li>
                                        <InforCard>
                                            <Link to={`/armories/${e}`}>{e}</Link>
                                        </InforCard>
                                    </li>
                                ))}
                            </ul>
                        ):(
                            <div className="searchEmpty"> 최근 검색 기록이 없습니다. </div>
                        )}
                    </ArmoriesListStyle>
            </Page.Contents>
            <Page.Contents>
                <div className="title">Hot 검색어</div>
                <ArmoriesListStyle>
                    {recentlySearch.length>0?(
                        <ul className="searchRecently">
                            {recentlySearch.map((e)=>(
                                <li>
                                    <InforCard>
                                        <Link to={`/armories/${e}`}>{e}</Link>
                                    </InforCard>
                                </li>
                            ))}
                        </ul>
                    ):(
                        <div className="searchEmpty"> 최근 검색 기록이 없습니다. </div>
                    )}
                </ArmoriesListStyle>

            </Page.Contents>
        </Page.Wrap>
    );
};

const ArmoriesListStyle=styled.div`
    .search{
        &Recently{
            display:flex;
            align-items:center;
            justify-content:flex-start;
            flex-wrap:wrap;
            gap:10px;
            margin:20px 0;
            width:100%;
        }
        &Empty{
            width:100%;
            color:var(--txt-colorB);
            text-align:center;
        }
        
    }   
    
`

