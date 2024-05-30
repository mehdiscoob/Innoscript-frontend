import React, {useEffect, useState} from 'react';
import {Button, Typography, Grid, Paper, CircularProgress} from '@mui/material';
import PreferenceSelect from "../components/user/PreferenceSelect";
import { savePreferences, getPreferences } from '../services/preferenceService';
import { Preferences } from "../types";

const PreferenceFromPage: React.FC = () => {
    const [preferredSources, setPreferredSources] = useState<string[]>([]);
    const [preferredCategories, setPreferredCategories] = useState<string[]>([]);
    const [preferredAuthors, setPreferredAuthors] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchPreferences();
    }, []);


    useEffect(() => {
        console.log(preferredCategories)
    }, [preferredCategories]);

    const fetchPreferences = async () => {
        try {
            const preferences = await getPreferences();
            setPreferredSources(JSON.parse(preferences.preferred_sources));
            setPreferredCategories(JSON.parse(preferences.preferred_categories));
            setPreferredAuthors(JSON.parse(preferences.preferred_authors));
        } catch (error) {
            console.error('Error fetching preferences:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        const preferences: Preferences = {
            preferred_sources: preferredSources,
            preferred_categories: preferredCategories,
            preferred_authors: preferredAuthors
        };
        try {
            await savePreferences(preferences);
            alert('Preferences saved successfully');
        } catch (error) {
            alert('Failed to save preferences');
        }
    };

    const handleValueChange = (value: string | string[]) => {
        return typeof value === 'string' ? [value] : value;
    };

    const categories = ['Technology', 'Business', 'Sports', 'Health', 'Science', 'General'];
    const sources = ['The New York Times', 'CNN', 'Fox News', 'Al Jazeera', 'The Guardian'];
    const authors = [
        'J.K. Rowling',
        'Stephen King',
        'George R.R. Martin',
        'Agatha Christie',
        'Ernest Hemingway',
        'Mark Twain',
        'Jane Austen',
        'William Shakespeare',
        'Charles Dickens',
        'Harper Lee'
    ];

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                    Customize Your News Feed
                </Typography>
            </Grid>
            {['Sources', 'Categories', 'Authors'].map((label, index) => (
                <Grid key={index} item xs={12} sm={8} md={3}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <PreferenceSelect
                            label={`Preferred ${label}`}
                            value={index === 0 ? preferredSources : index === 1 ? preferredCategories : preferredAuthors}
                            onChange={(event) => {
                                const value = handleValueChange(event.target.value);
                                index === 0 ? setPreferredSources(value) : index === 1 ? setPreferredCategories(value) : setPreferredAuthors(value);
                            }}
                            options={index === 0 ? sources : index === 1 ? categories : authors}
                        />
                    </Paper>
                </Grid>
            ))}
            <Grid item xs={12} sm={8} md={4}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleSubmit}
                    sx={{
                        whiteSpace: 'nowrap',
                        width: { lg: '40%', xs: '60%' },
                        borderRadius: 20,
                        my: 2,
                        py: 1,
                        background: 'linear-gradient(45deg, #00e676 30%, #69f0ae 90%)',
                        boxShadow: '0 3px 5px 2px rgba(76, 175, 80, 0.3)',
                    }}
                    fullWidth
                >
                    Save Preferences
                </Button>
            </Grid>
        </Grid>
    );
};

export default PreferenceFromPage;
