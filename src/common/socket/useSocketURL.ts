import {useContext} from "react";
import {SocketStore} from "./socketStore";
import {SocketContextValue} from "../types/socket-types";

export const useSocketURL = (): SocketContextValue => {
    return useContext(SocketStore);
};