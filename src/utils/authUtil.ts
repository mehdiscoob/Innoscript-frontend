import {User} from "../types";

const TOKEN_KEY = 'access_token';
const USER_KEY = 'user';

export const authUtil = {
    setToken: (token: string): void => {
        localStorage.setItem(TOKEN_KEY, token);
    },

    getToken: (): string | null => {
        return localStorage.getItem(TOKEN_KEY);
    },

    removeToken: (): void => {
        localStorage.removeItem(TOKEN_KEY);
    },

    setUser: (user: User): void => {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    getUser: (): User | null => {
        const user = localStorage.getItem(USER_KEY);
        return user ? JSON.parse(user) as User : null;
    },

    removeUser: (): void => {
        localStorage.removeItem(USER_KEY);
    },

    clearAuth: (): void => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    },
};
