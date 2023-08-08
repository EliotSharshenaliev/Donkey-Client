import {User} from "../../features/Authentication/types/user-type";
import {States} from "./states_of_bot";
import {Dispatch, ReactNode, SetStateAction} from "react";

export interface IBot {
    id: number
    is_connected: boolean,
    state?: typeof States[number],
    pid: string
    started_time: string
    stderr: string
    stdout: string
    user: User
}

export interface SocketContextValue {
    url: string,
    loadingUrl: boolean
}

export interface SocketProviderProps {
    children: ReactNode;
}



