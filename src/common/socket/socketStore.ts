import {createContext} from 'react';
import {SocketContextValue} from "../types/socket-types";

export const SocketStore = createContext<SocketContextValue | undefined>(undefined);
