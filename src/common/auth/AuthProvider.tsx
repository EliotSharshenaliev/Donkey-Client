import React, {useState} from "react";
import {User} from "../../features/Authentication/types/user-type";
import {AuthStore} from "./authStore";
import {AuthContextValue, AuthProviderProps} from "../types/auth-types";

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    const authContextValue: AuthContextValue = {
        user,
        setUser,
    };

    return (
        <AuthStore.Provider value={authContextValue}>
            {children}
        </AuthStore.Provider>
    );
};