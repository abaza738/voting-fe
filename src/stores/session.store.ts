import { defineStore } from "pinia";
import type { IUser } from "./store.types";
import { ref, type Ref } from "vue";

export const session = defineStore('session', () => {
    const currentUser: Ref<IUser | null> = ref(null);
    const isAuthenticated: Ref<boolean> = ref(false);

    const setAuth = (value: boolean) => {
        isAuthenticated.value = value;
    };

    return {
        currentUser,
        isAuthenticated,
    };
});