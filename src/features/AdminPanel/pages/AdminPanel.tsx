import React from 'react';
import {Empty, Layout, notification, Table} from 'antd';
import {IBot} from "../../../common/types/socket-types";
import {Logs} from "../components/Logs";
import {TableHeader} from "../components/Header";
import {handleSeparateData} from "../utils/handleSeperateData";
import {headTable} from "../types/headTable";
import {BotActions} from "../components/BotActions";
import {useSocketURL} from "../../../common/socket/useSocketURL";


export const AdminPanel: React.FC = () => {
    const [data, SetData] = React.useState<Array<IBot>>([])
    const {url, loadingUrl} = useSocketURL()

    React.useEffect(() => {
        try{
            if(!loadingUrl && url){
                // @ts-ignore
                const ws = new WebSocket(url + "/ws/integration/admin-table/")
                ws.onmessage = (data_response) => handleSeparateData(JSON.parse(data_response.data), SetData)
                return () => {
                    ws.close()
                }
            }
        }catch (e){
            notification.error({
                type: "error",
                message: "Something went wrong",
                description: "Place contact to developer"
            })
        }
    }, [loadingUrl, url])

    const rowClassName = (record) => {
        if (!record.is_connected) {
            return 'bot_connection_waiting'; // CSS class name for disabled rows
        }
        return ''; // Empty string for normal rows
    };
    return (
        <Layout>
            <TableHeader/>
            <Table
                loading={loadingUrl}
                expandable={{
                    expandedRowRender: (record: IBot, _, n, expanded) =>
                        expanded && record.is_connected &&
                        <Logs obj={record}/>
                }}
                locale={{
                    emptyText: (
                        <Empty
                            imageStyle={{height: 60}}
                            description={<span>Пока нет подключенных устройств</span>}
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                        />
                    ),
                }}
                rowKey={"id"}
                rowClassName={rowClassName}
                pagination={false}
                columns={[
                    ...headTable,
                    {
                        title: () => "Actions",
                        key: 'actions',
                        render: BotActions,
                    }
                ]}
                dataSource={data}/>
        </Layout>
    )
}
