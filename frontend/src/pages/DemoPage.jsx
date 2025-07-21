import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Paper,
    Typography,
    Button,
    Box,
    Card,
    CardContent,
    Grid,
    Chip,
} from '@mui/material';
import {
    AdminPanelSettings as AdminIcon,
    Home as HomeIcon,
    Dashboard as DashboardIcon,
} from '@mui/icons-material';

const DemoPage = () => {
    const features = [
        {
            title: 'Dashboard Overview',
            description: 'View platform statistics, active opinions, and system status',
            icon: '📊'
        },
        {
            title: 'Add New Opinion',
            description: 'Create new opinion markets with detailed settings and pricing',
            icon: '➕'
        },
        {
            title: 'Settle Opinions',
            description: 'Review and settle completed opinion markets',
            icon: '⚖️'
        },
        {
            title: 'View All Opinions',
            description: 'Manage all opinions with filtering, search, and bulk actions',
            icon: '👁️'
        },
        {
            title: 'Admin Settings',
            description: 'Configure platform settings, manage admin users, and system preferences',
            icon: '⚙️'
        }
    ];

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Paper elevation={3} sx={{ p: 6, textAlign: 'center', borderRadius: 3 }}>
                <AdminIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />

                <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    OpiniFi Admin Dashboard
                </Typography>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                    Modern & Minimalistic Admin Interface
                </Typography>

                <Chip
                    label="Built with Material-UI"
                    color="primary"
                    variant="outlined"
                    sx={{ mb: 4 }}
                />

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card elevation={1}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="h6" sx={{ mr: 1 }}>
                                            {feature.icon}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            {feature.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                        component={Link}
                        to="/admin"
                        variant="contained"
                        size="large"
                        startIcon={<DashboardIcon />}
                        sx={{
                            background: 'linear-gradient(45deg, #087DE6 30%, #4A9EF0 90%)',
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                        }}
                    >
                        Access Admin Dashboard
                    </Button>

                    <Button
                        component={Link}
                        to="/"
                        variant="outlined"
                        size="large"
                        startIcon={<HomeIcon />}
                        sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                    >
                        Back to Home
                    </Button>
                </Box>

                <Box sx={{ mt: 4, p: 3, bgcolor: 'action.hover', borderRadius: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Demo Features:</strong> Responsive design, dark/light theme toggle,
                        modern Material-UI components, comprehensive admin functionality for opinion trading platform
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default DemoPage;
