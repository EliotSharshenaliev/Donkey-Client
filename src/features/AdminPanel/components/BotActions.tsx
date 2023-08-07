import {IBot} from "../../../common/types/socket-types";
import {Button, notification, Space} from "antd";
import React from "react";
import {killBotApi, restartBotApi} from "../../../services/api/botApi";

export const BotActions = (text, record: IBot) => {

    const handleRestart = async () => {
        try{
            const data = await restartBotApi(record.id)
            notification.success({
                type: data.type,
                message: data.type,
                description: data.message
            })
        }catch (e) {
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
    const handleKill = async () => {
        try{
            const data = await killBotApi(record.pid)
            notification.success({
                type: data.type,
                message: data.type,
                description: data.message
            })
        }catch (e) {
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

    return (
        <Space>
            <Button
                disabled={
                    record.state === "RUNNING" ||
                    record.state === "AUTHENTICATING" ||
                    record.state === "RESTARTING" ||
                    record.state === "MAKING_RESERVATION" ||
                    record.state === "GETTING_PLACE" ||
                    record.state === "STARTING"
                }
                type={"primary"}
                ghost
                onClick={handleRestart}
            >Restart</Button>
            <Button
                disabled={
                    !(record.state === "ERROR_PROXY" || record.state === "FAILED")
                }
                type={"primary"}
                danger
                onClick={handleKill}
            >Kill</Button>
        </Space>
    )

}