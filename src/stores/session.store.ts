import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import axios from "axios";
import type { IUser } from "@/types";

export const useSession = defineStore('session', () => {
    const currentUser: Ref<IUser | null> = ref(null);
    const isAuthenticated: Ref<boolean> = ref(false);
    const token: Ref<string | null> = ref(null);

    const setToken = (input: string) => {
        token.value = input;
        localStorage.setItem('token', input);
    };

    const getToken = () => localStorage.getItem('token');

    return {
        currentUser,
        isAuthenticated,
        setToken,
        getToken,
    };
});