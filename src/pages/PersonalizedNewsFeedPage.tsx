import React, { useEffect, useState } from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import { getPersonalizedFeed } from '../services/articleService';
import {Article, PaginationData} from '../types';
import ArticleList from '../components/article/ArticleList';
import {ArrowBack, ArrowForward} from "@mui/icons-material";

const PersonalizedNewsFeedPage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pagination, setPagination] = useState<PaginationData | null>(null);

    useEffect(() => {
        fetchPersonalizedFeed();
    }, [currentPage]);

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

    const fetchPersonalizedFeed = async () => {
        try {
            setLoading(true);
            const personalizedArticles = await getPersonalizedFeed(currentPage); // Fetch personalized feed from backend
            setArticles(personalizedArticles.data);
            setPagination(personalizedArticles.pagination);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch personalized feed');
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Personalized News Feed
            </Typography>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {!loading && !error &&
                <>
                    <ArticleList articles={articles}/>
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
            }
        </Container>
    );
};

export default PersonalizedNewsFeedPage;
