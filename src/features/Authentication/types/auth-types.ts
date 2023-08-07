import {ReactNode} from "react";
import {Dispatch, SetStateAction} from "react/index";
import {User} from "./user-type";


export interface AuthContextValue {
    user: User | null;
    setUser: Dispatch<SetStateAction<User>>
}

export interface AuthProviderProps {
    children: ReactNode;
}
export type IconType = 'error' | 'warning';

export interface LoginError{
    "type": IconType,
    "message": string,
    "isAuth": boolean,
}