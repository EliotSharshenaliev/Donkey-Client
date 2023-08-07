import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import RouterBase from "./core/Routes";
import {AuthProvider} from "./common/auth/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <AuthProvider>
                <RouterBase/>
            </AuthProvider>
        </BrowserRouter>
    </>
    // <React.StrictMode>
    //
    // </React.StrictMode>
);
