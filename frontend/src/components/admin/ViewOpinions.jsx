import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip,
    TextField,
    InputAdornment,
    IconButton,
    Menu,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Alert,
    Pagination,
    FormControl,
    InputLabel,
    Select,
    Tabs,
    Tab,
    Paper,
} from '@mui/material';
import {
    Search as SearchIcon,
    FilterList as FilterIcon,
    MoreVert as MoreVertIcon,
    Visibility as VisibilityIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Block as BlockIcon,
    PlayArrow as PlayIcon,
    Pause as PauseIcon,
} from '@mui/icons-material';

const ViewOpinions = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);
    const [filterCategory, setFilterCategory] = useState('all');
    const [page, setPage] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOpinion, setSelectedOpinion] = useState(null);
    const [detailDialog, setDetailDialog] = useState({ open: false, opinion: null });
    const [actionDialog, setActionDialog] = useState({ open: false, type: '', opinion: null });
    const [alert, setAlert] = useState({ show: false, type: 'success', message: '' });

    const categories = ['all', 'Sports', 'Politics', 'Entertainment', 'Crypto', 'Finance', 'Technology', 'Economy'];

    const allOpinions = [
        {
            id: 1,
            title: 'Will Bitcoin cross $100,000 by end of 2025?',
            category: 'Crypto',
            status: 'active',
            traders: 2847,
            volume: '₹12.5M',
            yesPrice: 3.5,
            noPrice: 6.5,
            created: '2025-01-20',
            endDate: '2025-12-31',
            creator: 'Admin'
        },
        {
            id: 2,
            title: 'Will India win the next Cricket World Cup?',
            category: 'Sports',
            status: 'active',
            traders: 1923,
            volume: '₹8.2M',
            yesPrice: 2.1,
            noPrice: 7.9,
            created: '2025-01-18',
            endDate: '2025-10-15',
            creator: 'Admin'
        },
        {
            id: 3,
            title: 'Will USA enter recession in 2025?',
            category: 'Economy',
            status: 'settling',
            traders: 3156,
            volume: '₹15.7M',
            yesPrice: 0,
            noPrice: 0,
            created: '2025-01-15',
            endDate: '2025-07-31',
            creator: 'Admin'
        },
        {
            id: 4,
            title: 'Will Tesla stock reach $300 in 2025?',
            category: 'Finance',
            status: 'settled',
            traders: 1654,
            volume: '₹6.8M',
            yesPrice: 0,
            noPrice: 0,
            created: '2025-01-10',
            endDate: '2025-06-30',
            creator: 'Admin'
        },
        {
            id: 5,
            title: 'Will RRR win an Oscar in 2025?',
            category: 'Entertainment',
            status: 'paused',
            traders: 897,
            volume: '₹3.2M',
            yesPrice: 1.8,
            noPrice: 8.2,
            created: '2025-01-12',
            endDate: '2025-03-15',
            creator: 'Admin'
        },
        {
            id: 6,
            title: 'Will OpenAI release GPT-5 in 2025?',
            category: 'Technology',
            status: 'aborted',
            traders: 445,
            volume: '₹1.8M',
            yesPrice: 0,
            noPrice: 0,
            created: '2025-01-08',
            endDate: '2025-12-31',
            creator: 'Admin'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'success';
            case 'settling': return 'warning';
            case 'settled': return 'default';
            case 'paused': return 'info';
            case 'aborted': return 'error';
            default: return 'default';
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'active': return 'Active';
            case 'settling': return 'Settling';
            case 'settled': return 'Settled';
            case 'paused': return 'Paused';
            case 'aborted': return 'Aborted';
            default: return status;
        }
    };

    const handleMenuClick = (event, opinion) => {
        setAnchorEl(event.currentTarget);
        setSelectedOpinion(opinion);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedOpinion(null);
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        setPage(1);
    };

    const handleViewDetails = (opinion) => {
        setDetailDialog({ open: true, opinion });
        handleMenuClose();
    };

    const handleAction = (type, opinion) => {
        setActionDialog({ open: true, type, opinion });
        handleMenuClose();
    };

    const confirmAction = () => {
        const { type, opinion } = actionDialog;
        let message = '';

        switch (type) {
            case 'pause':
                message = `Opinion "${opinion.title}" has been paused`;
                break;
            case 'resume':
                message = `Opinion "${opinion.title}" has been resumed`;
                break;
            case 'abort':
                message = `Opinion "${opinion.title}" has been aborted`;
                break;
            case 'delete':
                message = `Opinion "${opinion.title}" has been deleted`;
                break;
            default:
                message = 'Action completed';
        }

        setAlert({ show: true, type: 'success', message });
        setActionDialog({ open: false, type: '', opinion: null });

        setTimeout(() => {
            setAlert({ show: false, type: 'success', message: '' });
        }, 3000);
    };

    const filteredOpinions = allOpinions.filter(opinion => {
        const matchesSearch = opinion.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || opinion.category === filterCategory;

        let matchesTab = true;
        switch (selectedTab) {
            case 0: // All
                matchesTab = true;
                break;
            case 1: // Active
                matchesTab = opinion.status === 'active';
                break;
            case 2: // Settling
                matchesTab = opinion.status === 'settling';
                break;
            case 3: // Completed
                matchesTab = ['settled', 'aborted'].includes(opinion.status);
                break;
        }

        return matchesSearch && matchesCategory && matchesTab;
    });

    const tabCounts = {
        all: allOpinions.length,
        active: allOpinions.filter(o => o.status === 'active').length,
        settling: allOpinions.filter(o => o.status === 'settling').length,
        completed: allOpinions.filter(o => ['settled', 'aborted'].includes(o.status)).length
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                View All Opinions
            </Typography>

            {alert.show && (
                <Alert
                    severity={alert.type}
                    sx={{ mb: 3 }}
                    onClose={() => setAlert({ show: false, type: 'success', message: '' })}
                >
                    {alert.message}
                </Alert>
            )}

            {/* Filters */}
            <Card elevation={1} sx={{ mb: 3 }}>
                <CardContent>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                        <TextField
                            size="small"
                            placeholder="Search opinions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ minWidth: 300 }}
                        />

                        <FormControl size="small" sx={{ minWidth: 150 }}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={filterCategory}
                                label="Category"
                                onChange={(e) => setFilterCategory(e.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <FilterIcon />
                                    </InputAdornment>
                                }
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto' }}>
                            Showing {filteredOpinions.length} opinions
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Main Content */}
            <Card elevation={2}>
                <CardContent sx={{ p: 0 }}>
                    {/* Status Tabs */}
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={selectedTab} onChange={handleTabChange} sx={{ px: 3, pt: 2 }}>
                            <Tab label={`All (${tabCounts.all})`} />
                            <Tab label={`Active (${tabCounts.active})`} />
                            <Tab label={`Settling (${tabCounts.settling})`} />
                            <Tab label={`Completed (${tabCounts.completed})`} />
                        </Tabs>
                    </Box>

                    {/* Table */}
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Opinion</TableCell>
                                    <TableCell align="center">Category</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Traders</TableCell>
                                    <TableCell align="center">Volume</TableCell>
                                    <TableCell align="center">Current Prices</TableCell>
                                    <TableCell align="center">End Date</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredOpinions.slice((page - 1) * 10, page * 10).map((opinion) => (
                                    <TableRow key={opinion.id} hover>
                                        <TableCell>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                                    {opinion.title}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    Created: {new Date(opinion.created).toLocaleDateString()}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Chip label={opinion.category} size="small" variant="outlined" />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Chip
                                                label={getStatusLabel(opinion.status)}
                                                color={getStatusColor(opinion.status)}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                {opinion.traders.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                {opinion.volume}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            {opinion.status === 'active' || opinion.status === 'paused' ? (
                                                <Box>
                                                    <Typography variant="caption" color="success.main">
                                                        YES: ₹{opinion.yesPrice}
                                                    </Typography>
                                                    <br />
                                                    <Typography variant="caption" color="error.main">
                                                        NO: ₹{opinion.noPrice}
                                                    </Typography>
                                                </Box>
                                            ) : (
                                                <Typography variant="caption" color="text.secondary">
                                                    N/A
                                                </Typography>
                                            )}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body2">
                                                {new Date(opinion.endDate).toLocaleDateString()}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <IconButton
                                                size="small"
                                                onClick={(e) => handleMenuClick(e, opinion)}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Pagination */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                        <Pagination
                            count={Math.ceil(filteredOpinions.length / 10)}
                            page={page}
                            onChange={(e, newPage) => setPage(newPage)}
                            color="primary"
                        />
                    </Box>
                </CardContent>
            </Card>

            {/* Actions Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => handleViewDetails(selectedOpinion)}>
                    <VisibilityIcon sx={{ mr: 1 }} />
                    View Details
                </MenuItem>
                {selectedOpinion?.status === 'active' && (
                    <MenuItem onClick={() => handleAction('pause', selectedOpinion)}>
                        <PauseIcon sx={{ mr: 1 }} />
                        Pause Opinion
                    </MenuItem>
                )}
                {selectedOpinion?.status === 'paused' && (
                    <MenuItem onClick={() => handleAction('resume', selectedOpinion)}>
                        <PlayIcon sx={{ mr: 1 }} />
                        Resume Opinion
                    </MenuItem>
                )}
                {['active', 'paused'].includes(selectedOpinion?.status) && (
                    <MenuItem onClick={() => handleAction('abort', selectedOpinion)}>
                        <BlockIcon sx={{ mr: 1 }} />
                        Abort Opinion
                    </MenuItem>
                )}
                <MenuItem onClick={() => handleAction('delete', selectedOpinion)}>
                    <DeleteIcon sx={{ mr: 1 }} />
                    Delete Opinion
                </MenuItem>
            </Menu>

            {/* Detail Dialog */}
            <Dialog
                open={detailDialog.open}
                onClose={() => setDetailDialog({ open: false, opinion: null })}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>Opinion Details</DialogTitle>
                <DialogContent>
                    {detailDialog.opinion && (
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                {detailDialog.opinion.title}
                            </Typography>

                            <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default', mb: 2 }}>
                                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Category</Typography>
                                        <Typography variant="body2">{detailDialog.opinion.category}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Status</Typography>
                                        <Chip
                                            label={getStatusLabel(detailDialog.opinion.status)}
                                            color={getStatusColor(detailDialog.opinion.status)}
                                            size="small"
                                            sx={{ mt: 0.5 }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Created Date</Typography>
                                        <Typography variant="body2">{new Date(detailDialog.opinion.created).toLocaleDateString()}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">End Date</Typography>
                                        <Typography variant="body2">{new Date(detailDialog.opinion.endDate).toLocaleDateString()}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Total Traders</Typography>
                                        <Typography variant="body2">{detailDialog.opinion.traders.toLocaleString()}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Total Volume</Typography>
                                        <Typography variant="body2">{detailDialog.opinion.volume}</Typography>
                                    </Box>
                                </Box>
                            </Paper>

                            {(detailDialog.opinion.status === 'active' || detailDialog.opinion.status === 'paused') && (
                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'action.hover' }}>
                                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Current Prices</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography variant="caption" color="success.main">YES</Typography>
                                            <Typography variant="h6" color="success.main">₹{detailDialog.opinion.yesPrice}</Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography variant="caption" color="error.main">NO</Typography>
                                            <Typography variant="h6" color="error.main">₹{detailDialog.opinion.noPrice}</Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            )}
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDetailDialog({ open: false, opinion: null })}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Action Confirmation Dialog */}
            <Dialog
                open={actionDialog.open}
                onClose={() => setActionDialog({ open: false, type: '', opinion: null })}
            >
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to {actionDialog.type} this opinion: "{actionDialog.opinion?.title}"?
                    </Typography>
                    {actionDialog.type === 'delete' && (
                        <Alert severity="warning" sx={{ mt: 2 }}>
                            This action cannot be undone. All associated data will be permanently deleted.
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setActionDialog({ open: false, type: '', opinion: null })}>
                        Cancel
                    </Button>
                    <Button onClick={confirmAction} color="primary" variant="contained">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ViewOpinions;
