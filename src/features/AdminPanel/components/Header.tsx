import React from 'react';
import {Button, Space} from "antd";
import {Header} from "antd/es/layout/layout";
import {Clock} from "./Clock";

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
                <Button onClick={() => {}} type={"primary"} style={{margin: 16}}>
                    Log out
                </Button>
            </Space>
        </Header>
    );
};

