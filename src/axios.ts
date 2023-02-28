import axios from "axios";

// axios.defaults.withCredentials = true;

const baseURL = import.meta.env.VITE_API_URL;
if (!baseURL) {
    throw new Error('Required ENV variable missing: "VITE_API_URL"');
}

axios.defaults.baseURL = baseURL;