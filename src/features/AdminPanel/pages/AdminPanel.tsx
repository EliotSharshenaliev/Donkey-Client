import React from 'react';
import {Empty, Layout, Table} from 'antd';
import {IBot} from "../../../common/types/socket-types";
import {Logs} from "../components/Logs";
import {TableHeader} from "../components/Header";
import {handleSeparateData} from "../utils/handleSeperateData";
import {headTable} from "../types/headTable";
import {BotActions} from "../components/BotActions";
// import {handleSeparateData} from "./utills";
// import {columns} from "../../../Components/Column/column";
// import {handleActions, ActionButton} from "../../../Components/Column/handlersOfColumn";


export const AdminPanel: React.FC = () => {
    const [data, SetData] = React.useState<Array<IBot>>([])
    const [selected, setSelected] = React.useState<Array<IBot>>([])
    const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
    React.useEffect(() => {
        // @ts-ignore
        const ws = new WebSocket(process.env.REACT_APP_SOCKET_URL + "/ws/integration/admin-table/")
        ws.onmessage = (data_response) => handleSeparateData(JSON.parse(data_response.data), SetData)
        return () => {
            ws.close()
        }
    }, [])


    const rowClassName = (record) => {
        if (!record.is_connected) {
            return 'bot_connection_waiting'; // CSS class name for disabled rows
        }
        return ''; // Empty string for normal rows
    };

    const clearSelection = () => {
        setSelectedRowKeys([]);
        setSelected([])
    };

    return (
        <Layout>
            <TableHeader/>

            <Table
                expandable={{
                    expandedRowRender: (record: IBot, _, n, expanded) =>
                        expanded && record.is_connected &&
                        <Logs obj={record}/>
                }}
                rowSelection={{
                    selectedRowKeys,
                    onChange: (selectedRowKeys, selectedRows, info) => {
                        setSelected(selectedRows)
                        setSelectedRowKeys(selectedRowKeys)
                    }
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
