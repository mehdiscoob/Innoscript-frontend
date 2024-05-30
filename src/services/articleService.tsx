import api from '../utils/api';
import {Article, Filters, PaginationData} from '../types';
import axios from 'axios';
import {AxiosResponse} from 'axios';

export interface ArticlesResponse {
    data: Article[]; // Add this line
    pagination: PaginationData;
}

export const getArticles = async (filters: Filters, page: number): Promise<ArticlesResponse> => {
    try {
        const response: AxiosResponse = await api.get('/article', {params: {...filters, page}});
        const data: Article[] = response.data.articles.data;
        const pagination: PaginationData = {
            currentPage: response.data.articles.current_page,
            lastPage: response.data.articles.last_page,
            total: response.data.articles.total
        };
        return {data, pagination};
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data.message || 'Failed to fetch articles';
        } else {
            throw 'Failed to fetch articles';
        }
    }
};

export const getPersonalizedFeed = async (page: number): Promise<ArticlesResponse> => {
    try {
        const response = await api.get('article/personalized-feed',{params: {page}});
        const data: Article[] = response.data.articles.data;
        const pagination: PaginationData = {
            currentPage: response.data.articles.current_page,
            lastPage: response.data.articles.last_page,
            total: response.data.articles.total
        };
        return {data, pagination};
    } catch (error: any) {
        throw error.response?.data?.message || 'Failed to fetch personalized feed';
    }
};
