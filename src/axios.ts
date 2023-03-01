import axios from "axios";
import { useSession } from "./stores/session.store";

// axios.defaults.withCredentials = true;

const baseURL = import.meta.env.VITE_API_URL;
if (!baseURL) {
    throw new Error('Required ENV variable missing: "VITE_API_URL"');
}

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(request => {
    const session = useSession();
    const token = session.getToken();

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});
