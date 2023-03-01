import axios from "axios";
import { defineStore } from "pinia";
import { useSession } from "./session.store";
import { useRouter } from "vue-router";

interface ILoginParams {
    username: string;
    password: string;
}

interface IRegisterParams {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
}

export const useAuth = defineStore('auth', () => {
    const router = useRouter();
    const session = useSession();

    const login = async (form: ILoginParams) => {
        return axios.post('/auth/login', form);
    };

    const register = (form: IRegisterParams) => {
        return axios.post('/auth/register', form);
    };

    const me = () => {
        axios.get('/auth/me').then(response => {
            session.currentUser = response.data;
            session.isAuthenticated = true;
        });
    };

    return {
        login,
        register,
        me,
    }
});