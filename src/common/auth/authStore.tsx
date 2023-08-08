import React, {createContext} from 'react';
import {AuthContextValue} from "../types/auth-types";

export const AuthStore = createContext<AuthContextValue | undefined>(undefined);


