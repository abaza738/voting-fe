import { defineStore } from "pinia";
import type { IUser } from "./store.types";
import { ref, type Ref } from "vue";
import axios from "axios";

export const useSession = defineStore('session', () => {
    const currentUser: Ref<IUser | null> = ref(null);
    const isAuthenticated: Ref<boolean> = ref(false);

    const me = () => {
        axios.get('/auth/me').then(response => {
            currentUser.value = response.data;
            isAuthenticated.value = true;
        }).catch(console.log);
        console.log('welp.....');
        return true;
    }

    return {
        currentUser,
        isAuthenticated,
        me,
    };
});