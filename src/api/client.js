import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});


// SWR/Fetcher with Authorization header
export const apiFetcher = async (url) => {
    const token = localStorage.getItem("token");
    const response = await apiClient.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return response.data;
};





