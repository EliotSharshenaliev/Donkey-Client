import React from 'react';
import {Button, Layout, Space} from "antd";

export const CreateButton = ({loading, hidden, onClick}) => {
    return (
        <Layout>
            <Space align={"center"} style={{justifyContent: "center", display: hidden ? "none" : "flex"}}>
                <Button loading={loading} type="primary" size="small" onClick={onClick}>
                    CREATE WORKER
                </Button>
            </Space>
        </Layout>
    );
};

