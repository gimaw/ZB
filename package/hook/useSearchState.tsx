import {useState} from "react";

export function useSearchState<T>({
    defaultState={} as T
}:{
    defaultState
}){

    const [state, setState]=useState<
        T & {
            [key: string]: string;
        }
    >({
        ...defaultState
    })

    return [
        state, setState
    ]
}

