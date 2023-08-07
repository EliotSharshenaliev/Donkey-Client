import {Button, Card, Col, Form, Input, Layout, notification, Row, Space} from "antd";
import React from "react";
import {useForm} from "antd/es/form/Form";
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons';
import {useAuth} from "../../../common/auth/useAuth";
import {BackgroundImage} from "../../../common/components/Background/Background";
import {validateEmail, validatePassword, validateUsername} from "../../../common/utils/validators";
import {registerApi} from "../../../services/api/authService";
import {useNavigate} from "react-router-dom";
import Link from "antd/lib/typography/Link";

export const RegisterPage = () => {
    const [form] = useForm();
    const [isLoading, setLoading] = React.useState(false)
    const [minHeight, setMinHeight] = React.useState(window.innerHeight);
    const navigate = useNavigate()

    React.useEffect(() => {
        // Update the minHeight when the window is resized
        const handleResize = () => setMinHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleRegister = async (credentials) => {
        try {
            setLoading(true)
            const status = await registerApi(credentials)
            form.resetFields()
            notification.success({
                type: "success",
                message: "Success",
                description: status.message
            });
            navigate("/")

        } catch (error) {
            if (error.response.status !== 500) {
                const errorData = error.response.data;
                form.setFields([
                    {
                        name: errorData?.field[0],
                        errors: errorData?.message,
                    },
                ]);
            } else {
                notification.error({
                    type: "error",
                    message: "Error",
                    description: 'Error connection '
                });
            }
        }finally {
            setLoading(false)
        }
    }

    return (
        <BackgroundImage style={{
            backgroundImage: 'url("https://wallpapercave.com/dwp2x/wp5554081.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <Row justify="center" align="middle"
                 style={{
                     minHeight: minHeight,
                     backgroundColor: "rgba(255,255,255,0.51)",
                     backdropFilter: "blur(40px)",
                 }}>
                <Col xs={22} sm={12} md={8} lg={6}>
                    <Card>
                        <Space style={{display: 'flex', justifyContent: 'left'}} direction="vertical" align="start">
                            <h3 style={{fontWeight: "bold"}}>Registration Donkey Service</h3>
                        </Space>
                        <Form disabled={isLoading} form={form} onFinish={handleRegister}>
                            <Form.Item
                                name="fistname"
                                rules={[
                                    {required: true, message: 'Enter your first name'}
                                ]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder="First name"/>
                            </Form.Item>

                            <Form.Item
                                name="lastname"
                                rules={[
                                    {required: true, message: 'Enter your last name'},
                                ]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder="Last name"/>
                            </Form.Item>

                            <Form.Item
                                name="username"
                                rules={[
                                    {required: true, message: 'Enter your username'},
                                    {validator: validateUsername}
                                ]}
                            >
                                <Input prefix={"@"} placeholder="Username"/>
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                    {required: true, message: 'Enter your Email'},
                                    {validator: validateEmail}
                                ]}
                            >
                                <Input prefix={<MailOutlined/>} placeholder="Email"/>
                            </Form.Item>


                            <Form.Item
                                name="password"
                                rules={[
                                    {required: true, message: 'Enter your password'},
                                    {validator: validatePassword},
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined/>} placeholder="Password"/>
                            </Form.Item>

                            <Form.Item
                                name="passwordConfirm"
                                dependencies={['password']}
                                rules={[
                                    {required: true, message: 'Confirm your password'},
                                    ({getFieldValue}) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Passwords do not match'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined/>} placeholder="Confirm Password"/>
                            </Form.Item>
                            <Form.Item>
                                <Button loading={isLoading} style={{width: "100%"}} type="primary" htmlType="submit">
                                    Sign in
                                </Button>
                            </Form.Item>

                            <Space style={{width: "100%", justifyContent: "space-evenly"}} align={"center"} direction={"horizontal"}>
                                <Link disabled={isLoading} onClick={() => navigate("/login")}>Back to login</Link>
                            </Space>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </BackgroundImage>
    );
};
