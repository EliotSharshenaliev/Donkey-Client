import {Avatar, Button, Card, Col, Form, Input, notification, Row, Space} from "antd";
import React from "react";
import {useForm} from "antd/es/form/Form";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {useAuth} from "../../../common/auth/useAuth";
import {BackgroundImage} from "../../../common/components/Background/Background";
import {validatePassword} from "../utils/validators";
import {loginApi} from "../../../services/api/authService";
import {User} from "../types/user-type";
import {useNavigate} from "react-router-dom";
import Link from "antd/lib/typography/Link";

const avatar = "https://preview.redd.it/a-donkey-spin-off-what-could-it-be-about-thoughts-v0-ozmn113jjnfa1.jpg?width=640&crop=smart&auto=webp&s=09e61b8a377ef67bc89a4ba44b052d7475e22a84"

export const LoginPage = () => {
    const [form] = useForm();
    const [isLoading, setLoading] = React.useState(false)
    const {setUser} = useAuth()
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

    const handleLogin = async (credentials) => {
        try {
            setLoading(true)
            const user: User = await loginApi(credentials)
            setUser(user)
        } catch (e) {
            if(e.response.status !== 500){
                const errorData = e.response.data
                form.setFields([
                    {
                        name: errorData?.field,
                        errors: errorData?.message,
                    },
                ]);
            }else{
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
                     backdropFilter: "blur(30px)",
                 }}>
                <Col xs={22} sm={12} md={8} lg={6}>
                    <Card>
                        <Space style={{display: 'flex', justifyContent: 'center'}} direction="vertical" align="center">
                            <Avatar size={76} src={avatar}/>
                            <h3 style={{fontWeight: "bold"}}>Authenticate to Donkey Service</h3>
                        </Space>
                        <Form disabled={isLoading} form={form} onFinish={handleLogin}>
                            <Form.Item
                                name="username"
                                rules={[
                                    {required: true, message: 'Введите свой username'}
                                ]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder="Username"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {required: true, message: 'Введите свой пароль'},
                                    {validator: validatePassword},
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined/>} placeholder="Password"/>
                            </Form.Item>
                            <Form.Item>
                                <Button style={{width: "100%"}} type="primary" htmlType="submit">
                                    Log in
                                </Button>
                            </Form.Item>

                            <Space style={{width: "100%", justifyContent: "space-evenly"}} align={"center"} direction={"horizontal"}>
                                <Link onClick={() => navigate("/register")}>Or create account</Link>
                            </Space>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </BackgroundImage>
    );
};
