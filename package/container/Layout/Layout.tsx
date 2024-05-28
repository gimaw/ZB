import {
    useOutlet,
} from 'react-router-dom';
import {MenuProps, SideBar} from "../SideBar/SideBar";
import {Style} from "./style";
import {Header} from "../Header/Header";
import {SideWidget} from '../Widget'
import styled from "styled-components";

export const Layout = ({
   menus=[],
   title,
   // children
}:{
   menus?: MenuProps[];
   title:string;
   // children?: React.ReactNode;
}) => {

    const outlet = useOutlet();

    return (
        <Style>
            <SideBar menus={menus}/>
            <Content>
                <Header/>
                {title}
                {/*{children}*/}
                {outlet}
            </Content>
            <SideWidget/>
        </Style>
    );
};

const Content = styled.div`
    flex:1;
    width:calc(100% - 300px);
`