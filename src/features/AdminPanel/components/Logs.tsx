import React from 'react';
import {Layout} from "antd";
import {IBot} from "../../../common/types/socket-types";


const Content = Layout.Content
export const Logs = ({obj}) => {
    const [logs, setLogs] = React.useState([])
    const bot: IBot = obj
    const getLogs = async () => {
        await fetch(`/static/logs/${bot.user.username}__bot__.log`, {
        })
            .then(r => r.text())
            .then(r => setLogs(r.split("\n")))
            .catch(error => alert("Что то пошла не так..."))
    }

    React.useEffect(() => {
        (async () => {
            await getLogs()
        })()
        if (bot.is_connected){
            const interval = setInterval(getLogs, 1000)
            return () => {
                clearInterval(interval)
            }
        }
    }, [bot])



    const divRef = React.useRef(null);

    React.useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
        }
    }, [logs]);


    return (
        <Content key={obj.id} ref={divRef} style={styles.content}>
            {logs?.length && logs.map((text, index) =>
                <label key={index}>
                    {text} <br/>
                </label>
            )}
        </Content>
    );
};


const styles = {
    content: {
        backgroundColor: "#1f2023",
        maxHeight: "300px",
        color: "green",
        padding: 10,
        overflow: "scroll",
    }
}