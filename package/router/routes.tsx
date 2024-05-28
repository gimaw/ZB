
import {GuildList, GuildListController} from "@src/page/guild";
import {AuctionList} from "@src/page/auction/list/view/AuctionList";
import {AuctionListController} from "@src/page/auction/list/controller/AuctionListController";
import {Main,MainController} from "@src/page/main";
import {ArmoriesList, ArmoriesListController} from "@src/page/armories/list";
import {ArmoriesView, ArmoriesViewController} from "@src/page/armories/view";
// import {IRouter} from "./RouterController";

export const routes=[
    {
        path: '/',
        title: '메인',
        element: <Main/>,
        controller: MainController
    },
    {
        path: 'armories',
        title: '메뉴1',
        element: <ArmoriesList/>,
        controller: ArmoriesListController,
        children:[
            {
                path: ':id',
                title: '메뉴1 상세',
                hideInMenu:true,
                element: <ArmoriesView/>,
                controller: ArmoriesViewController,
            }
        ]
    },{
        path: 'auction',
        title: '메뉴2',
        element: <AuctionList/>,
        controller: AuctionListController,
        /*children:[
            {
                path: 'list',
                title: '경매 리스트',
                element: <AuctionList/>,
                controller: AuctionListController,
            },
        ]*/
    },{
        path: 'guild',
        title: '메뉴3',
        element: <GuildList/>,
        controller: GuildListController,
        /*children:[
            {
                path: 'list',
                title: '관리 목록',
                element: <GuildList/>,
                controller: GuildListController,
            }
        ]*/
    }
]



