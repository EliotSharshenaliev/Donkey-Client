import React from 'react';
import {Button, Card, Descriptions, Modal, Tag} from "antd";
import {useAuth} from "../../../common/auth/useAuth";
import {IBot} from "../../../common/types/socket-types";
import {CreateButton} from "./CreateButton";
import {ProxyForm} from "./ProxyForm";
import {renderStatusBot} from "../../../common/utils/renderStatusBot";
import {IProxy} from "../../../common/types/proxy-type";
import {useSocketURL} from "../../../common/socket/useSocketURL";



export const DonkeyIntegration = () => {
    const {user} = useAuth()
    const [ws, setWebsocket] = React.useState(null)
    const [hasConnected, SetConnect] = React.useState(false)
    const [Connecting, SetConnecting] = React.useState(false)
    const [botState, setBotState] = React.useState<IBot | null>(null)
    const [proxy, setProxy] = React.useState<IProxy | null>(null)
    const [isLoading, setLoading] = React.useState(false)
    const {url, loadingUrl} = useSocketURL()

    const handleJoin = () => {
        SetConnecting(true)
        if(proxy != null && url && !loadingUrl){

            const SOCKET_URL = url + `/ws/client/${user.id}/${proxy.ipAddress}/${proxy.port}/`

            // @ts-ignore
            const ws = new WebSocket(SOCKET_URL);
            ws.onopen = (message) => {
                if (message.type === "open") {
                    SetConnect(true)
                } else {
                    SetConnect(false)
                }
                SetConnecting(false)
            };
            ws.onmessage = (data_response) => {
                const data = JSON.parse(data_response.data)
                if (data.type === "send_object") {
                    if (!Array.isArray(data.message)) {
                        const botObject: IBot = data.message;
                        setBotState(botObject)
                    }
                }else if (data.type === "delete_object"){
                    setBotState(null)
                    setWebsocket(null)
                    SetConnect(false)
                    setLoading(false)
                    setProxy(null)
                }
            }
            ws.onclose = () =>
                setBotState(null)
            setWebsocket(ws);
        }
    };

    const handleLeave = () => {
        try {
            setBotState(null)
            setWebsocket(null)
            SetConnect(false)
            setLoading(false)
            setProxy(null)

            ws.close()
        }catch (e){
            console.log(e)
        }
    }



    // Modal


    const handleOk = (value: IProxy) => {
        setProxy({
            ipAddress: value.ipAddress,
            port: value.port
        })
        setIsModalOpen(false);
        setLoading(true);
    }

    React.useEffect(handleJoin, [proxy])


    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const showModal = () => setIsModalOpen(true)
    const handleCancel = () => setIsModalOpen(false)
    return (
        <>
            <Modal title="Прокси данные"
                   closable={false}
                   open={isModalOpen}
                   footer={null}

                   closeIcon={false}>
                <ProxyForm
                    handleOk={handleOk}
                    handleCancel={handleCancel}/>
            </Modal>
            <CreateButton
                loading={isLoading}
                onClick={showModal}
                hidden={botState !== null}/>
            <Card
                hidden={botState === null}>
                <Descriptions
                    title={user.username.toUpperCase() + "_WORKER"} bordered
                    extra={
                        <Button
                            onClick={handleLeave}
                            disabled={Connecting}
                            loading={Connecting}
                            type="primary">
                            {
                                !Connecting && hasConnected ? "Disconnect" : Connecting && hasConnected ? "Disconnecting" : ""
                            }
                        </Button>
                    }
                >
                    <Descriptions.Item label="IP" span={3}>
                        192.168.0.1
                    </Descriptions.Item>
                    <Descriptions.Item label="Port" span={3}>
                        8080
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                        {botState?.id && renderStatusBot("", botState, 1)}
                    </Descriptions.Item>
                </Descriptions>
            </Card>
        </>
    );
};


