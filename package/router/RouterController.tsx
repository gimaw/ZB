import {ReactNode,Suspense} from "react";
import {LoadingScreen} from "@/package/component";
import {ControllerProvider} from "@/package/util";
import { Route } from 'react-router-dom';
//import {ArmoriesView} from "@src/page/armories";

export interface Page {
    element?: ReactNode;
    controller?: () => any;
}
export interface IRouter {
    path: string;
    bookmarkPath?: string;
    rentalcar?: Page;
    rent?: Page;
    element?: ReactNode;
    controller?: () => any;
    title?: string;
    subtitle?: string;
    children?: IRouter[];

    /**
     * LNB 에서 숨길때 사용합니다
     */
    hideInMenu?: boolean;
}

export class RouterController{
    static instance: RouterController | null = null;


    filterRoutes(routes: IRouter) {
        if (routes.children) {
            routes.children = routes.children?.filter((e) => this.filterRoutes(e));
        }
        return true;
    }

    constructor(private routes: IRouter[]) {
        if (RouterController.instance === null) {
            RouterController.instance = this;
        }
        this.routes = routes.filter((e) => this.filterRoutes(e));
    }

    getRoutesElement() {
        return this.routes.map((route) => this.generateRoutes(route));
    }

    getRoutesList() {
        return this.routes.filter((e) => this.filterRoutes(e));
        // return this.routes;
    }

    getElementByType(route: IRouter): Page {

        return {
            controller: route.controller,
            element: route.element,
        };
    }

    generateRoutes(route: IRouter){
        const element = this.getElementByType(route);
        const elementWraper = (
            <Suspense fallback={<LoadingScreen />}>
                <ControllerProvider
                    key={element?.controller?.name}
                    controller={element.controller && element.controller}
                >
                    {element.element}
                </ControllerProvider>
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.children ?null: elementWraper
                }
            >
                {route.children && element.element && (
                    <Route key={route.path} index element={elementWraper} />
                )}
                {route.children?.map((child) => this.generateRoutes(child))}
                {/*<Route key={route.path} path={'/armories/view'} element={<ArmoriesView/>} />*/}
            </Route>
        );
    }

}