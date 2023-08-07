import React, {createContext} from 'react';
import {AuthContextValue} from "../../features/Authentication/types/auth-types";

export const AuthStore = createContext<AuthContextValue | undefined>(undefined);


