import React, {useState} from 'react';
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@mui/material';

interface FilterOptionsProps {
    onFilter: (filters: Filters) => void;
    categories: string[];
    sources: string[];
}

interface Filters {
    keyword: string;
    startDate: string;
    endDate: string;
    category: string;
    source: string;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({onFilter, categories, sources}) => {
    const [keyword, setKeyword] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [source, setSource] = useState<string>('');

    const handleFilter = () => {
        const filters: Filters = {keyword, startDate, endDate, category, source};
        onFilter(filters);
    };

    return (
        <Box sx={{flexGrow: 1, padding: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={2}>
                    <TextField
                        label="Keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <TextField
                        label="Start Date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{shrink: true}}
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <TextField
                        label="End Date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{shrink: true}}
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <FormControl variant="outlined" size="small" fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value as string)}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {categories.map((cat) => (
                                <MenuItem key={cat} value={cat}>
                                    {cat}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <FormControl variant="outlined" size="small" fullWidth>
                        <InputLabel>Source</InputLabel>
                        <Select
                            value={source}
                            onChange={(e) => setSource(e.target.value as string)}
                            label="Source"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {sources.map((src) => (
                                <MenuItem key={src} value={src}>
                                    {src}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleFilter}
                        fullWidth
                        sx={{whiteSpace: 'nowrap'}}
                    >
                        Apply Filters
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FilterOptions;
