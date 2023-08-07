import {Tag} from "antd";
import React from "react";

export const Tags = (_, {is_connected}) => {
    return (
        <Tag color={is_connected ? "green" : "red"} key={_}>
            {is_connected ? "Connected" : "Connection lost"}
        </Tag>
    );
}