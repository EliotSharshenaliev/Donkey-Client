import {IBot} from "../types/socket-types";
import {Tag} from "antd";
import {CloseCircleOutlined, LoadingOutlined} from "@ant-design/icons";
import React from "react";

export const renderStatusBot = (value, record: IBot, number) => {
    const state = record.state
    const tags = {
        "RESTARTING": (text) => <Tag color="processing">{text}</Tag>,
        "NOT_STARTED": (text) => <Tag color="warning">{text}</Tag>,
        "STARTING": (text) => <Tag icon={<LoadingOutlined/>} color="processing">{text}</Tag>,
        "AUTHENTICATING": (text) => <Tag icon={<LoadingOutlined/>} color="processing">{text}</Tag>,
        "RUNNING": (text) => <Tag icon={<LoadingOutlined/>} color="processing">{text}</Tag>,
        "GETTING_PLACE": (text) => <Tag icon={<LoadingOutlined/>} color="processing">{text}</Tag>,
        "MAKING_RESERVATION": (text) => <Tag icon={<LoadingOutlined/>} color="processing">{text}</Tag>,
        "ERROR_PROXY": (text) => <Tag icon={<CloseCircleOutlined/>} color="error">{text}</Tag>,
        "FAILED": (text) => <Tag icon={<CloseCircleOutlined/>} color="error">{text}</Tag>,
        "CONNECTION_FAILED": (text) => <Tag icon={<CloseCircleOutlined/>} color="error">{text}</Tag>,
    }

    return tags[state](state)
}