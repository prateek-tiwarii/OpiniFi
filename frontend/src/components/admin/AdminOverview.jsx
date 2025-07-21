import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Typography,
    Chip,
    LinearProgress,
    List,
    ListItem,
    Card,
    CardContent,
} from '@mui/material';
import {
    TrendingUp as TrendingUpIcon,
    People as PeopleIcon,
    Assessment as AssessmentIcon,
    MonetizationOn as MoneyIcon,
    Circle as CircleIcon,
    ArrowUpward as ArrowUpIcon,
    Notifications as NotificationIcon,
    Speed as SpeedIcon,
    Timeline as TimelineIcon,
    ShowChart as ShowChartIcon,
    Pending as PendingIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

const AdminOverview = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    // Mock data
    const recentOpinions = [
        {
            id: 1,
            title: 'Will Bitcoin cross $100,000 by end of 2025?',
            category: 'Crypto',
            status: 'active',
            traders: 2847,
            volume: '₹12.5M',
            created: '2 hours ago'
        },
        {
            id: 2,
            title: 'Will India win the next World Cup?',
            category: 'Sports',
            status: 'active',
            traders: 1923,
            volume: '₹8.2M',
            created: '5 hours ago'
        },
        {
            id: 3,
            title: 'Will USA enter recession in 2025?',
            category: 'Economy',
            status: 'settling',
            traders: 3156,
            volume: '₹15.7M',
            created: '1 day ago'
        },
        {
            id: 4,
            title: 'Will Tesla stock reach $300 in 2025?',
            category: 'Finance',
            status: 'settled',
            traders: 1654,
            volume: '₹6.8M',
            created: '3 days ago'
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'success';
            case 'settling': return 'warning';
            case 'settled': return 'default';
            case 'aborted': return 'error';
            default: return 'default';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'active': return '#4CAF50';
            case 'settling': return '#FF9800';
            case 'settled': return '#9E9E9E';
            case 'aborted': return '#F44336';
            default: return '#9E9E9E';
        }
    };

    // Bento grid items with improved layout for better space utilization
    const items = [
        {
            title: "Active Opinions",
            description: "Live markets generating high engagement",
            header: (
                <motion.div 
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20" />
                    <div className="flex items-center justify-between w-full p-4">
                        <div>
                            <div className="text-white text-4xl font-bold mb-2">156</div>
                            <div className="text-blue-100 text-sm flex items-center gap-1">
                                <ArrowUpIcon fontSize="small" />
                                +12 this week
                            </div>
                        </div>
                        <AssessmentIcon sx={{ fontSize: 48, color: 'rgba(255,255,255,0.7)' }} />
                    </div>
                </motion.div>
            ),
            className: "md:col-span-1",
        },
        {
            title: "Active Traders",
            description: "Growing user base with high engagement",
            header: (
                <motion.div 
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20" />
                    <div className="flex items-center justify-between w-full p-4">
                        <div>
                            <div className="text-white text-4xl font-bold mb-2">2,847</div>
                            <div className="text-green-100 text-sm flex items-center gap-1">
                                <ArrowUpIcon fontSize="small" />
                                +245 today
                            </div>
                        </div>
                        <PeopleIcon sx={{ fontSize: 48, color: 'rgba(255,255,255,0.7)' }} />
                    </div>
                </motion.div>
            ),
            className: "md:col-span-1",
        },
        {
            title: "Total Volume",
            description: "Massive trading volume across all markets",
            header: (
                <motion.div 
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20" />
                    <div className="flex items-center justify-between w-full p-4">
                        <div>
                            <div className="text-white text-4xl font-bold mb-2">₹45.2M</div>
                            <div className="text-purple-100 text-sm flex items-center gap-1">
                                <ArrowUpIcon fontSize="small" />
                                +18.5% this month
                            </div>
                        </div>
                        <MoneyIcon sx={{ fontSize: 48, color: 'rgba(255,255,255,0.7)' }} />
                    </div>
                </motion.div>
            ),
            className: "md:col-span-1",
        },        {
            title: "Recent Opinions",
            description: "Latest opinion markets and their current status",
            header: (
                <Box className="flex flex-1 w-full h-full min-h-[18rem] rounded-lg overflow-hidden">
                    <Card elevation={0} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <CardContent sx={{ p: 0, height: '100%' }}>
                            <List sx={{ p: 0, height: '100%', overflow: 'auto' }}>
                                {recentOpinions.map((opinion, index) => (
                                    <React.Fragment key={opinion.id}>
                                        <ListItem sx={{ px: 2, py: 1.5 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                                                <CircleIcon 
                                                    sx={{ 
                                                        color: getStatusIcon(opinion.status),
                                                        fontSize: 8 
                                                    }} 
                                                />
                                                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                                    <Typography 
                                                        variant="body2" 
                                                        sx={{ 
                                                            fontWeight: 500, 
                                                            fontSize: '0.85rem',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap',
                                                            mb: 0.5
                                                        }}
                                                    >
                                                        {opinion.title}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                                        <Chip
                                                            label={opinion.status}
                                                            size="small"
                                                            color={getStatusColor(opinion.status)}
                                                            variant="outlined"
                                                            sx={{ height: 18, fontSize: '0.65rem' }}
                                                        />
                                                        <Typography variant="caption" color="text.secondary">
                                                            {opinion.traders.toLocaleString()} traders
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            {opinion.volume}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </ListItem>
                                        {index < recentOpinions.length - 1 && <Box sx={{ borderBottom: 1, borderColor: 'divider', mx: 2 }} />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            ),
            className: "md:col-span-2 lg:col-span-2 md:row-span-1",
        },
        {
            title: "Market Activity",
            description: "Real-time market performance across categories",
            header: (
                <Box className="flex flex-1 w-full h-full min-h-[18rem] rounded-lg">
                    <Card elevation={0} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <CardContent sx={{ p: 3 }}>
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>Sports Markets</Typography>
                                    <Typography variant="body2" color="primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>75%</Typography>
                                </Box>
                                <LinearProgress 
                                    variant="determinate" 
                                    value={75} 
                                    sx={{ height: 8, borderRadius: 4 }}
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>Crypto Markets</Typography>
                                    <Typography variant="body2" color="primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>60%</Typography>
                                </Box>
                                <LinearProgress 
                                    variant="determinate" 
                                    value={60} 
                                    sx={{ height: 8, borderRadius: 4 }}
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>Political Events</Typography>
                                    <Typography variant="body2" color="primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>85%</Typography>
                                </Box>
                                <LinearProgress 
                                    variant="determinate" 
                                    value={85} 
                                    sx={{ height: 8, borderRadius: 4 }}
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>Economy</Typography>
                                    <Typography variant="body2" color="primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>45%</Typography>
                                </Box>
                                <LinearProgress 
                                    variant="determinate" 
                                    value={45} 
                                    sx={{ height: 8, borderRadius: 4 }}
                                />
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>Entertainment</Typography>
                                    <Typography variant="body2" color="primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>52%</Typography>
                                </Box>
                                <LinearProgress 
                                    variant="determinate" 
                                    value={52} 
                                    sx={{ height: 8, borderRadius: 4 }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            ),
            className: "md:col-span-1 md:row-span-1",
        },
        {
            title: "System Status",
            description: "Platform health and operational metrics",
            header: (
                <motion.div 
                    className="flex flex-1 w-full h-full min-h-[18rem] rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-600/20" />
                    <div className="flex flex-col justify-between w-full p-4">
                        <div className="flex items-center justify-between mb-4">
                            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                                System Health
                            </Typography>
                            <SpeedIcon sx={{ fontSize: 32, color: 'rgba(255,255,255,0.8)' }} />
                        </div>
                        <div className="space-y-3 flex-1">
                            <div className="flex items-center gap-2 text-white text-sm">
                                <CircleIcon sx={{ color: '#4CAF50', fontSize: 10 }} />
                                <span>Platform Online</span>
                            </div>
                            <div className="flex items-center gap-2 text-white text-sm">
                                <CircleIcon sx={{ color: '#4CAF50', fontSize: 10 }} />
                                <span>Payments Active</span>
                            </div>
                            <div className="flex items-center gap-2 text-white text-sm">
                                <CircleIcon sx={{ color: '#FF9800', fontSize: 10 }} />
                                <span>3 Pending Settlements</span>
                            </div>
                            <div className="flex items-center gap-2 text-white text-sm">
                                <CircleIcon sx={{ color: '#4CAF50', fontSize: 10 }} />
                                <span>All Systems Operational</span>
                            </div>
                            <div className="flex items-center gap-2 text-white text-sm">
                                <CircleIcon sx={{ color: '#2196F3', fontSize: 10 }} />
                                <span>Database Healthy</span>
                            </div>
                        </div>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                                Uptime: 99.9%
                            </Typography>
                            <NotificationIcon sx={{ color: 'rgba(255,255,255,0.6)', fontSize: 20 }} />
                        </Box>
                    </div>
                </motion.div>
            ),
            className: "md:col-span-1 md:row-span-1",
        },
        {
            title: "Trading Analytics",
            description: "Detailed insights into trading patterns and user behavior",
            header: (
                <motion.div 
                    className="flex flex-1 w-full h-full min-h-[18rem] rounded-lg bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20" />
                    <div className="flex flex-col justify-between w-full p-4">
                        <div className="flex items-center justify-between mb-4">
                            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                                Analytics
                            </Typography>
                            <ShowChartIcon sx={{ fontSize: 32, color: 'rgba(255,255,255,0.8)' }} />
                        </div>
                        <div className="space-y-4 flex-1">
                            <div className="flex justify-between items-center">
                                <span className="text-white text-sm">Avg. Trade Size</span>
                                <span className="text-white font-bold text-lg">₹2,450</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white text-sm">Daily Active Users</span>
                                <span className="text-white font-bold text-lg">8,547</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white text-sm">Win Rate</span>
                                <span className="text-white font-bold text-lg">68%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white text-sm">Revenue Today</span>
                                <span className="text-white font-bold text-lg">₹1.2M</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white text-sm">Conversion Rate</span>
                                <span className="text-white font-bold text-lg">14.5%</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ),
            className: "md:col-span-1 md:row-span-1",
        },
        {
            title: "Pending Settlements",
            description: "Opinions awaiting settlement decisions",
            header: (
                <motion.div 
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/20" />
                    <div className="flex items-center justify-between w-full p-4">
                        <div>
                            <div className="text-white text-4xl font-bold mb-2">23</div>
                            <div className="text-amber-100 text-sm flex items-center gap-1">
                                <PendingIcon fontSize="small" />
                                8 due today
                            </div>
                        </div>
                        <TrendingUpIcon sx={{ fontSize: 48, color: 'rgba(255,255,255,0.7)' }} />
                    </div>
                </motion.div>
            ),
            className: "md:col-span-1",
        },
    ];

    return (
        <Box sx={{ 
            height: 'calc(100vh - 120px)', 
            overflow: 'auto',
            px: 1,
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography 
                    variant="h4" 
                    sx={{ 
                        mb: 4, 
                        fontWeight: 600,
                        background: isDark 
                            ? 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)'
                            : 'linear-gradient(135deg, #1a1a1a 0%, #666666 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    Dashboard Overview
                </Typography>
                  <BentoGrid className="max-w-full mx-0 auto-rows-[16rem] md:auto-rows-[18rem] lg:auto-rows-[20rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </motion.div>
        </Box>
    );
};

export default AdminOverview;
