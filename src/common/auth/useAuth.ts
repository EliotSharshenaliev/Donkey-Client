import {useContext} from "react";
import {AuthStore} from "./authStore";
import {AuthContextValue} from "../types/auth-types";

export const useAuth = (): AuthContextValue => {
    return useContext(AuthStore);
};