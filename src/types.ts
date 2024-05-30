export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Preferences {
    preferred_sources: string[];
    preferred_categories: string[];
    preferred_authors: string[];
}

export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    category: string;
    source: string;
    url_to_image: string;
    url: string;
    publishedAt: string;
    description: string;
}

export interface Filters {
    keyword: string;
    startDate: string;
    endDate: string;
    category: string;
    source: string;
}

export interface PaginationData {
    currentPage: number;
    lastPage: number;
    total: number;
}