import React, {createContext, useContext} from 'react';

interface IControllerProps<T> {
    controller?: () => T;
    children?: React.ReactNode;
}

interface IController<T> {
    controller?: T;
}

export const controllerContext = createContext<IController<unknown>>({})

export function ControllerProvider<T>({ controller, children }: IControllerProps<T>) {
    const call = controller ? controller() : undefined;

    return (
        <>
            <controllerContext.Provider
                value={{
                    controller: call,
                }}
            >
                {children}

            </controllerContext.Provider>
        </>
    );
}


export function useController<T>(_: () => T): T{
    const controller = useContext(controllerContext).controller;
    if (!controller) throw new Error('Controller is not provided');
    return controller as T;

}

