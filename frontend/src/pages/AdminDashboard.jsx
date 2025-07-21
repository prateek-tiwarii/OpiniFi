import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    CssBaseline,
    ThemeProvider,
    createTheme,
    Paper,
    Container
} from '@mui/material';
import {
    Menu as MenuIcon,
    Dashboard as DashboardIcon,
    Add as AddIcon,
    Gavel as GavelIcon,
    Visibility as VisibilityIcon,
    Settings as SettingsIcon,
    Close as CloseIcon,
    AccountCircle,
    Brightness4,
    Brightness7,
    Home as HomeIcon
} from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../hooks/useTheme';

// Import admin page components
import AddOpinion from '../components/admin/AddOpinion';
import SettleOpinions from '../components/admin/SettleOpinions';
import ViewOpinions from '../components/admin/ViewOpinions';
import AdminSettings from '../components/admin/AdminSettings';
import AdminOverview from '../components/admin/AdminOverview';

const drawerWidth = 280;

const AdminDashboard = () => {
    const { isDark, toggleTheme } = useCustomTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState('overview');

    // Create Material-UI theme based on our theme context
    const theme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
            primary: {
                main: '#087DE6',
                light: '#4A9EF0',
                dark: '#065BA1',
            },
            secondary: {
                main: '#E1F39F',
                light: '#E8F5B8',
                dark: '#C8E082',
            },
            background: {
                default: isDark ? '#121212' : '#f5f5f5',
                paper: isDark ? '#1e1e1e' : '#ffffff',
            },
        },
        typography: {
            fontFamily: 'Roboto, system-ui, sans-serif',
        },
        shape: {
            borderRadius: 12,
        },
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { id: 'overview', text: 'Dashboard Overview', icon: <DashboardIcon /> },
        { id: 'add', text: 'Add New Opinion', icon: <AddIcon /> },
        { id: 'settle', text: 'Settle Opinions', icon: <GavelIcon /> },
        { id: 'view', text: 'View All Opinions', icon: <VisibilityIcon /> },
        { id: 'settings', text: 'Settings', icon: <SettingsIcon /> },
    ];

    const renderContent = () => {
        switch (selectedPage) {
            case 'overview':
                return <AdminOverview />;
            case 'add':
                return <AddOpinion />;
            case 'settle':
                return <SettleOpinions />;
            case 'view':
                return <ViewOpinions />;
            case 'settings':
                return <AdminSettings />;
            default:
                return <AdminOverview />;
        }
    };

    const drawer = (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    background: isDark
                        ? 'linear-gradient(135deg, #087DE6 0%, #065BA1 100%)'
                        : 'linear-gradient(135deg, #087DE6 0%, #4A9EF0 100%)',
                    color: 'white',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                        sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            bgcolor: 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            fontWeight: 'bold',
                        }}
                    >
                        O
                    </Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                        OpiniFi Admin
                    </Typography>
                </Box>
                <IconButton
                    color="inherit"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' } }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider />

            <List sx={{ px: 1, py: 2 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                            selected={selectedPage === item.id}
                            onClick={() => {
                                setSelectedPage(item.id);
                                if (mobileOpen) setMobileOpen(false);
                            }}
                            sx={{
                                borderRadius: 2,
                                mx: 1,
                                '&.Mui-selected': {
                                    bgcolor: isDark ? 'primary.dark' : 'primary.light',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: isDark ? 'primary.main' : 'primary.main',
                                    },
                                },
                                '&:hover': {
                                    bgcolor: isDark ? 'rgba(8, 125, 230, 0.1)' : 'rgba(8, 125, 230, 0.05)',
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: selectedPage === item.id ? 'inherit' : 'text.secondary',
                                    minWidth: 40,
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem', fontWeight: 500 } }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ mx: 2 }} />

            <Box sx={{ p: 2, mt: 'auto' }}>
                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        bgcolor: isDark ? 'rgba(225, 243, 159, 0.1)' : 'rgba(225, 243, 159, 0.2)',
                        border: `1px solid ${isDark ? 'rgba(225, 243, 159, 0.2)' : 'rgba(225, 243, 159, 0.3)'}`,
                    }}
                >
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                        Admin Portal
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Manage opinions, settlements, and platform settings
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <AppBar
                    position="fixed"
                    sx={{
                        zIndex: theme.zIndex.drawer + 1,
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        boxShadow: isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.1)',
                        borderBottom: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
                            Admin Dashboard
                        </Typography>                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton
                                component={Link}
                                to="/"
                                color="inherit"
                                title="Back to Home"
                            >
                                <HomeIcon />
                            </IconButton>
                            <IconButton onClick={toggleTheme} color="inherit">
                                {isDark ? <Brightness7 /> : <Brightness4 />}
                            </IconButton>
                            <IconButton color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                >
                    {/* Mobile drawer */}
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                bgcolor: 'background.paper',
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>

                    {/* Desktop drawer */}
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                bgcolor: 'background.paper',
                                borderRight: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        width: { md: `calc(100% - ${drawerWidth}px)` },
                        bgcolor: 'background.default',
                        minHeight: '100vh',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="xl" sx={{ py: 3 }}>
                        {renderContent()}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default AdminDashboard;
