import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "../features/Authentication/pages/LoginPage";
import {getUser} from "../services/api/authService";

import {User} from "../features/Authentication/types/user-type";
import {notification} from "antd";
import {useAuth} from "../common/auth/useAuth";
import {RegisterPage} from "../features/Authentication/pages/RegisterPage";
import {UserDashboardPage} from "../features/User/pages/UserDashboardPage";
import {InstructionPage} from "../features/User/pages/InstructionPage";
import {AdminPanel} from "../features/AdminPanel/pages/AdminPanel";

function RouterBase() {
    const {user, setUser} = useAuth()

    React.useEffect(() => {
        (async () => {
            try {
                const user: User = await getUser()
                setUser(user)
            }catch (e){
                if(e.response.status === 500){
                    notification.error({
                        type: "error",
                        message: "Error connection",
                        description: "Connection error, please check your internet connection"
                    })
                }
            }
        })()
    }, [])

    return (
        <Routes>
            {
                user?.username ?
                    user?.is_superuser ?
                        (
                            <>
                                <Route path={"*"} element={<Navigate to={"/"}/>}/>
                                <Route path={"/"} element={<AdminPanel/>}/> :
                            </>
                        ) :
                        (
                            <>
                                <Route path={"*"} element={<Navigate to={"/"}/>}/>
                                <Route path={"/"} element={<UserDashboardPage/>}/>
                                <Route path={"/manual"} element={<InstructionPage/>}/>
                            </>
                        )
                    :
                    (
                        <>
                            <Route path={"*"} element={<Navigate to={"/login"}/>}/>
                            <Route path={"/login"} element={<LoginPage/>}/>
                            <Route path={"/register"} element={<RegisterPage/>}/>
                        </>
                    )
            }
        </Routes>
    );
}

export default React.memo(RouterBase);