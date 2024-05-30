import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                padding: '16px',
                textAlign: 'center',
                mt: 'auto',
            }}
>
    <Typography variant="body1">
                © 2024 My Articles. All rights reserved.
    </Typography>
    </Box>
);
};

export default Footer;
