import {logoutApi} from "../../services/api/authService";
import {notification} from "antd";

export const handleLogout = async () => {
    try {
        const data = await logoutApi()
        if (data.type === "success") {
            notification.info({
                type: "success",
                message: "Logged out",
                description: data.message,
            });

            window.location.reload()
        }
    }catch (e){
        if(e.response.status !== 500){
            notification.error({
                type: e.response.data.type,
                message: e.response.data.type,
                description: e.response.data.message
            })
        }else {
            notification.error({
                type: "error",
                message: "Error connection",
                description: "Connection error, please check your internet connection"
            })
        }
    }
}