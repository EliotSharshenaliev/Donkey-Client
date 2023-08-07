import {ColumnsType} from "antd/es/table";
import {Table} from "antd";
import {Tags} from "../components/TagsStatus";
import {IBot} from "../../../common/types/socket-types";
import {renderStatusBot} from "../../../common/utils/renderStatusBot";


export const headTable: ColumnsType<IBot> = [
    Table.EXPAND_COLUMN,
    {
        title: 'id',
        dataIndex: 'id',
        key: 'key',
    },

    Table.SELECTION_COLUMN,
    {
        title: 'username',
        dataIndex: 'user',
        key: 'user',
    },
    {
        title: 'user',
        dataIndex: 'user',
        key: 'user',
        render: (_, {user}) => {
            return (
                user.first_name + " " + user.last_name
            );
        },
    },
    {
        title: 'email',
        dataIndex: 'user',
        key: 'user',
        render: (_, {user}) => {
            return user.email ? user.email : "empty"
        },
    },
    {
        title: 'connection',
        key: 'is_connected',
        dataIndex: 'is_connected',
        render: Tags,
    },
    {
        title: 'bot status',
        key: 'status',
        dataIndex: 'state',
        render: renderStatusBot
    },
    {
        title: 'pid',
        key: 'pid',
        dataIndex: 'pid',
    },
];

