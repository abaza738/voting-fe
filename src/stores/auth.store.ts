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
        axios.post('/auth/register', form).then(response => {
            if (response.status === 200) {
                router.push('/login');
            }
        }).catch(console.log);
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