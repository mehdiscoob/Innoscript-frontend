import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';

interface PreferenceSelectProps {
    label: string;
    value: string[];
    options: string[];
    onChange: (event: SelectChangeEvent<string[]>) => void;
}

const PreferenceSelect: React.FC<PreferenceSelectProps> = ({ label, options, value, onChange }) => {
    return (
        <FormControl fullWidth variant="outlined" size="small">
            <InputLabel>{label}</InputLabel>
            <Select
                multiple
                value={value}
                onChange={onChange}
                label={label}
                renderValue={(selected) => (
                    <Typography variant="body2" color="textSecondary">
                        {Array.isArray(selected) ? selected.join(', ') : ''}
                    </Typography>
                )}
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default PreferenceSelect;
