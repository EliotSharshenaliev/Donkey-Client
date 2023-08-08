import React from 'react';
import {Button, Space} from "antd";
import {Header} from "antd/es/layout/layout";
import {Clock} from "./Clock";
import {handleLogout} from "../../../common/utils/logoutHandler";

export const TableHeader = () => {
    return (
        <Header style={{
            backgroundColor: "white",
            display: "flex",
            alignItems:"center",
            justifyContent: "space-between"
        }}>
            <Space>
                <Clock/>
            </Space>
            <Space>
                <Button onClick={handleLogout} type={"primary"} style={{margin: 16}}>
                    Log out
                </Button>
            </Space>
        </Header>
    );
};

