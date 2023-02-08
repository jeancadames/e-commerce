import axios from "axios";

const ecommerceApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default ecommerceApi;