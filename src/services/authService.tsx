import api from '../utils/api';
import {authUtil} from '../utils/authUtil';
import {User} from '../types';
import axios from 'axios';

interface AuthResponse {
    access_token: string;
    user: User;
}

export const register = async (email: string, password: string, name: string): Promise<AuthResponse> => {
    try {
        const response = await api.post<AuthResponse>('/register', {email, password, name});
        const {access_token, user} = response.data;
        authUtil.setToken(access_token);
        authUtil.setUser(user);
        window.location.href="/";
        return {access_token, user};
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data.message || 'Registration failed';
        } else {
            throw 'Registration failed';
        }
    }
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const response = await api.post<AuthResponse>('/login', {email, password});
        const {access_token, user} = response.data;

        authUtil.setToken(access_token);
        authUtil.setUser(user);

        return {access_token, user};
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data.message || 'Login failed';
        } else {
            throw 'Login failed';
        }
    }
};

export const logout = async (): Promise<void> => {
    try {
        await api.post('/logout');
        authUtil.removeUser();
        authUtil.removeToken();
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data.message || 'Logout failed';
        } else {
            throw 'Logout failed';
        }
    }
};

export const getCurrentUser = (): User | null => {
    const user = authUtil.getUser();
    return user ? user : null;
};
