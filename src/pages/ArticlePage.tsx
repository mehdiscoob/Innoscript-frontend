import React, { useEffect, useState } from 'react';
import { getArticles } from '../services/articleService';
import { Article, Filters, PaginationData } from '../types';
import FilterOptions from "../components/article/FilterOptions";
import ArticleList from "../components/article/ArticleList";
import { Container, Typography, Box, CircularProgress, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const categories = ['Technology', 'Business', 'Sports', 'Health', 'Science',"General"];
const sources = ['The New York Times', 'CNN', 'Fox News', 'Al Jazeera', 'The Guardian'];

const ArticlesPage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [pagination, setPagination] = useState<PaginationData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetchArticles({
            keyword: '',
            startDate: '',
            endDate: '',
            category: '',
            source: ''
        }, currentPage);
    }, [currentPage]);

    const fetchArticles = async (filters: Filters, page: number) => {
        setLoading(true);
        try {
            const response = await getArticles(filters, page);
            setArticles(response.data);
            setPagination(response.pagination);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilter = (filters: Filters) => {
        setCurrentPage(1); // Reset to first page when applying new filters
        fetchArticles(filters, 1);
    };

    const handleNextPage = () => {
        if (pagination && currentPage < pagination.lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Container maxWidth="lg" sx={{mt:2}}>
            <Typography variant="h3" align="center" gutterBottom>
                Latest Articles
            </Typography>
            <Box my={3}>
                <FilterOptions onFilter={handleFilter} categories={categories} sources={sources} />
            </Box>
            {loading ? (
                <Box display="flex" justifyContent="center">
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <ArticleList articles={articles} />
                    {pagination && (
                        <Box my={3} display="flex" justifyContent="center">
                            <Button
                                disabled={currentPage === 1}
                                onClick={handlePrevPage}
                                startIcon={<ArrowBack />}
                                variant="outlined"
                            >
                                Previous
                            </Button>
                            <Typography variant="body1" sx={{ mx: 2 }}>
                                Page: {currentPage} of {pagination.lastPage} | Total Articles: {pagination.total}
                            </Typography>
                            <Button
                                disabled={currentPage === pagination.lastPage}
                                onClick={handleNextPage}
                                endIcon={<ArrowForward />}
                                variant="outlined"
                            >
                                Next
                            </Button>
                        </Box>
                    )}
                </>
            )}
        </Container>
    );
};

export default ArticlesPage;
