import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import RouterBase from "./core/Routes";
import {AuthProvider} from "./common/auth/AuthProvider";
import {SocketProvider} from "./common/socket/SocketProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <SocketProvider>
                <AuthProvider>
                    <RouterBase/>
                </AuthProvider>
            </SocketProvider>
        </BrowserRouter>
    </>
    // <React.StrictMode>
    //
    // </React.StrictMode>
);
