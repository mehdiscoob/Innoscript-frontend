import api from '../utils/api';
import { User } from '../types';
import axios from 'axios';

export const getUser = async (): Promise<User> => {
    try {
        const response = await api.get<User>('/user');
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data.message || 'Failed to fetch user';
        } else {
            throw 'Failed to fetch user';
        }
    }
};

export const updateUserProfile = async (userData: Partial<User>): Promise<User> => {
    try {
        const response = await api.put<User>('/user', userData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data.message || 'Failed to update user profile';
        } else {
            throw 'Failed to update user profile';
        }
    }
};
