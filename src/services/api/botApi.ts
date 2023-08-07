import requests from "./apiService";

export const restartBotApi = async (id) => {
    try{
        const response =  await  requests.get("/task-api/restart-by-id/" + id)
        return response.data
    }catch (e) {
        throw (e)
    }
}

export const killBotApi = async (pid) => {
    try {
        const response = await requests.get("/task-api/delete-by-pid/" + pid)
        return response.data
    }catch (e) {
        throw (e)
    }
}