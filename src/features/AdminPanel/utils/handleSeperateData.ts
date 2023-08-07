import {IBot} from "../../../common/types/socket-types";


export const handleSeparateData = (data, SetData) => {
    if (data.type === "send_list") {
        if (Array.isArray(data.message)) {
            const botList: IBot[] = data.message;
            SetData(botList)
        }
    } else if (data.type === "send_object") {
        if (!Array.isArray(data.message)) {
            const bot: IBot = data.message;
            SetData(prevState => {
                const i = prevState.findIndex(_element => _element.id === bot.id);  // findId
                if (i === -1) return [...prevState, bot]
                else {
                    return prevState.map(elem => elem.id === bot.id ? bot : elem)
                }
            })
        }
    } else if (data.type === "delete_object") {
        if (!Array.isArray(data.message)) {
            const bot: IBot = data.message;
            SetData(prevState => {
                return prevState.filter(_element => _element.id !== bot.id);
            })
        }
    }
}