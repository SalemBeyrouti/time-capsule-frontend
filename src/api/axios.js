import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v0.1",
});

instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request config:", config);
    return config;
});

export default instance;