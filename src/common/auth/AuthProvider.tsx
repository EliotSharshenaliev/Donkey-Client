import React, {useState} from "react";
import {AuthContextValue, AuthProviderProps} from "../../features/Authentication/types/auth-types";
import {User} from "../../features/Authentication/types/user-type";
import {AuthStore} from "./authStore";

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