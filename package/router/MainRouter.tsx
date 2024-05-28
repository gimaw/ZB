import { useMemo} from "react";
import { useLocation, Route, Routes,  } from "react-router-dom";
import {IRouter, RouterController} from "./RouterController";
import {Layout,MenuProps} from "@package/container";
import {Page404} from "@package/component";
import {Main} from "@src/page/main";


export const MainRouter = ({
   routes,
}:{
   routes: IRouter[];
}) => {

    const routerController = useMemo(
        () => new RouterController(routes),
        [routes,]
    );
    const menus = useMemo(() => routerController.getRoutesList(), [routerController]);
    const loc = useLocation();

    return (
        <Routes>
            <Route
                element={
                    <Layout
                        menus={MakeMenu(menus, loc.pathname)}
                        title={''}
                    />
                }
            >
                {routerController.getRoutesElement()}
                <Route path="*" element={<Page404 />} />
            </Route>
            <Route path="/" element={<Main/>} />

        </Routes>
    );
};

function MakeMenu(router: IRouter[], location: string, link = ''): MenuProps[] {
    return router
        .filter((e) => !e.hideInMenu)
        .map((e) => {
            const path = link + (e.path === '' || e.path === '/' ? e.path : '/' + e.path);
            return {
                title: e.title,
                children: e.children ? MakeMenu(e.children, location, path) : undefined,
                link: path,
                isActivate:
                    path.split('/').slice(0, 3).join('/') == location.split('/').slice(0, 3).join('/'),
            };
        });
}

