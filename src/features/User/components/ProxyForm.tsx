import React from 'react';
import {Button, Form, Input, Space} from "antd";
import {validateIPAddress, validatePort} from "../utils/validators";

export const ProxyForm = ({handleOk, handleCancel}) => {

    return (
        <Form layout={"vertical"} onFinish={handleOk}>
            <Form.Item
                name="ipAddress"
                label="IP Address"
                rules={[
                    {
                        required: true,
                        message: 'Please input an IP address!',
                    },
                    {
                        validator: validateIPAddress,
                    },
                ]}
            >
                <Input
                    placeholder={"128.128.128.128"}
                />
            </Form.Item>

            <Form.Item
                name="port"
                label="Port"
                rules={[
                    {
                        required: true,
                        message: 'Please enter a port number!',
                    },
                    {
                        validator: validatePort
                    }
                ]}
            >
                <Input
                    maxLength={5}
                    placeholder={"8080"}
                />
            </Form.Item>

            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit"
                    >
                        Submit
                    </Button>
                    <Button type="default" onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};


