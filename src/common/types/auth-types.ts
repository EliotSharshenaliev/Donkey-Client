import {User} from "../../features/Authentication/types/user-type";
import {Dispatch, ReactNode, SetStateAction} from "react";

export interface AuthContextValue {
    user: User | null;
    setUser: Dispatch<SetStateAction<User>>
}

export interface AuthProviderProps {
    children: ReactNode;
}