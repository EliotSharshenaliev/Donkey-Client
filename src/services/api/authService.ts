import requests from "./apiService";

export const getUser = async () => {
    try {
        const response = await requests.get("/api/v1/auth/get-user")
        return response.data;
    } catch (e) {
        throw (e)
    }
}

export const loginApi = async (credentials) => {
    try {
        const response = await requests.post("/api/v1/auth/login", credentials)
        return response.data
    } catch (e) {
        throw(e)
    }
};

export const logoutApi = async (setUser) => {
    try {
        await requests.get("/api/v1/auth/logout")
    } catch (e) {
        throw (e)
    }
}

export const registerApi = async (credentials) => {
    try {
        const response = await requests.post("/api/v1/auth/register", credentials)
        return response.data
    } catch (e) {
        throw (e)
    }
}