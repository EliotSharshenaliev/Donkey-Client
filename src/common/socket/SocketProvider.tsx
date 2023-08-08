import {IProxy} from "../types/proxy-type";
import {getIpServeApi} from "../../services/api/configApi";
import React from "react";
import {SocketContextValue, SocketProviderProps} from "../types/socket-types";
import {SocketStore} from "./socketStore";
import {notification} from "antd";



export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {
    const [url, setUrl] = React.useState<string | null>(null);
    const [loadingUrl, setLoading] = React.useState<boolean>(false);


    const getUrl = async () => {
        try {
            setLoading(true)
            const data: IProxy = await getIpServeApi()
            setUrl("ws://" + data.ipAddress + ":" + data.port)
        }catch (e) {
            notification.error({
                type: "error",
                message: "Error",
                description: 'Error connection '
            });
        }finally {
            setLoading(false)
        }
    }


    React.useEffect(()=> {
        (async ()=> await getUrl())()
    }, [])

    const socketContextValue:SocketContextValue = {
        url,
        loadingUrl
    };

    return (
        <SocketStore.Provider value={socketContextValue}>
            {children}
        </SocketStore.Provider>
    );
};