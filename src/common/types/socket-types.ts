import {User} from "../../features/Authentication/types/user-type";
import {States} from "./states_of_bot";

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

export interface IOnMessage{
    type: "send_list" | "send_object" | "delete_object"
    message: IBot | IBot[]
}

