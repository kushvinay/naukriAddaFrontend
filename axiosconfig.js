import axios from "axios";

const instance = axios.create({
    baseURL: "https://backend-2-k1g1.onrender.com",
    withCredentials: true,
});

export default instance;

