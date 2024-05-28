import {ReactNode} from "react";

export interface IColumn<T> {
    key: Partial<keyof T>;
    title: string | ReactNode;
    subTitle?: string;
    width?: number;
    ellipsis?: boolean;
    suffix?: string;
    render?: (e: T, index: number) => ReactNode;
    required?: boolean;
    parentTitle?: string;
    type?: 'money' | 'phone';
    sticky?: boolean;
    textAlign?:'left' | 'center'
    sort?: {
        enable?: boolean;
        key?: keyof T;
    };
}