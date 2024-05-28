import {Link,useNavigate} from "react-router-dom";
import {Style} from "./style";
import React, {useEffect} from "react";

export interface MenuProps {
    title: string | undefined;
    link: string | undefined;
    children?: MenuProps[] | undefined;
    isActivate?: boolean;
}

export const SideBar = ({ menus }: { menus: MenuProps[]}) => {

    console.log(menus,'메뉴')

    return (
            <Style>
                <ul className="sideBar--list">
                    {menus.map((e) => (
                        <SidebarMenu key={e.link} props={e} />
                    ))}
                </ul>
            </Style>
    );
};

function SidebarMenu({ props }: { props: MenuProps }) {
    const navigate = useNavigate()

    const [isActivate, setIsActivate] = React.useState(
        // (props.isActivate || props.children?.some((e) => e.isActivate)) ?? false
        // (loc.pathname.split('/')[1]===props.link&&true)
        props.isActivate
    );

    const onClick = () => {
        setIsActivate(!isActivate);
        navigate(props.link ?? '')
    };

    useEffect(()=>{
        setIsActivate(props.isActivate ?? false);
    },[location.pathname])

    return (
        // <li className={`sideBar--item ${isActivate ? 'active' : ''}`}>
        <li className={`sideBar--item ${isActivate ? 'active' : ''}`}>
            <button style={{ cursor: 'pointer' }} onClick={onClick} type="button" className="nav--item">
                <h3>{props.title}</h3>
            </button>
            {props.children && (
                <ul className="sideBar--inner">
                    {props.children.map((e) => (
                        <SidebarItem key={e.link} props={e} />
                    ))}
                </ul>
            )}
        </li>
    );
}

function SidebarItem({ props }: { props: MenuProps }) {
    const onClick = () => window.scrollTo(0, 0);

    return (
        <li className={`sideBar--inner--item ${props.isActivate ? 'active' : ''}`}>
            <Link onClick={onClick} to={props.link ?? ''}>
                {props.title}
            </Link>
        </li>
    );
}