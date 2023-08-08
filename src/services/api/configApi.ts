import requests from "./apiService";



export const getIpServeApi = async () => {
    try{
        const response =  await  requests.get("/task-api/get-server-details")
        return response.data
    }catch (e) {
        throw (e)
    }
}