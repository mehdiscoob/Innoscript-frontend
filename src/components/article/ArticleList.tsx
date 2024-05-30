import React from 'react';
import { Article } from '../../types';
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from '@mui/material';

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    if (!Array.isArray(articles) || articles.length === 0) {
        return <Typography variant="body1" align="center" sx={{ mt: 4 }}>No articles available</Typography>;
    }

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={4}>
                {articles.map((article) => (
                    <Grid item xs={12} md={6} key={article.id}>
                        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 3, borderRadius: 2, height: '100%' }}>
                            {article.url_to_image && (
                                <CardMedia
                                    component="img"
                                    image={article.url_to_image}
                                    alt={article.title}
                                    sx={{ width: { xs: '100%', md: 200 }, height: { xs: 200, md: '100%' }, objectFit: 'cover', borderRadius: { xs: '4px 4px 0 0', md: '4px 0 0 4px' } }}
                                />
                            )}
                            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        {article.title}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                        {article.author} - {article.source} - {new Date(article.publishedAt).toLocaleDateString()}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {article.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href={article.url} target="_blank" size="small" color="primary">
                                        Read More
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ArticleList;
