import {AuthContextValue} from "../../features/Authentication/types/auth-types";
import {useContext} from "react";
import {AuthStore} from "./authStore";

export const useAuth = (): AuthContextValue => {
    return useContext(AuthStore);
};