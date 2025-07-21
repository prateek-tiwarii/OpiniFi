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
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Alert,
    Paper,
    Tabs,
    Tab,
    IconButton,
    Tooltip,
    Box as MuiBox,
} from '@mui/material';
import {
    Gavel as GavelIcon,
    CheckCircle as CheckCircleIcon,
    Cancel as CancelIcon,
    Info as InfoIcon,
    AttachMoney as MoneyIcon,
} from '@mui/icons-material';

const SettleOpinions = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [settleDialog, setSettleDialog] = useState({ open: false, opinion: null });
    const [settlementData, setSettlementData] = useState({
        outcome: '',
        reason: '',
        evidenceUrl: ''
    });
    const [alert, setAlert] = useState({ show: false, type: 'success', message: '' });

    const pendingOpinions = [
        {
            id: 1,
            title: 'Will USA enter into recession by the end of July 2025?',
            category: 'Economy',
            endDate: '2025-07-31',
            traders: 3156,
            volume: '₹15.7M',
            status: 'ended',
            yesShares: 1847,
            noShares: 1309,
            yesVolume: '₹9.2M',
            noVolume: '₹6.5M'
        },
        {
            id: 2,
            title: 'Will Bitcoin cross $90,000 by January 2025?',
            category: 'Crypto',
            endDate: '2025-01-31',
            traders: 2847,
            volume: '₹12.5M',
            status: 'ended',
            yesShares: 1923,
            noShares: 924,
            yesVolume: '₹8.7M',
            noVolume: '₹3.8M'
        },
        {
            id: 3,
            title: 'Will RRR win Best Picture at 2025 Oscars?',
            category: 'Entertainment',
            endDate: '2025-03-15',
            traders: 1654,
            volume: '₹6.8M',
            status: 'ended',
            yesShares: 456,
            noShares: 1198,
            yesVolume: '₹2.1M',
            noVolume: '₹4.7M'
        }
    ];

    const recentSettlements = [
        {
            id: 4,
            title: 'Will Tesla stock reach $250 in Q4 2024?',
            category: 'Finance',
            settledDate: '2025-01-15',
            outcome: 'YES',
            winnings: '₹8.2M',
            settledBy: 'Admin',
            reason: 'Tesla stock reached $267 on January 10, 2025'
        },
        {
            id: 5,
            title: 'Will India win the Border-Gavaskar Trophy 2024?',
            category: 'Sports',
            settledDate: '2025-01-12',
            outcome: 'NO',
            winnings: '₹12.5M',
            settledBy: 'Admin',
            reason: 'Australia won the series 3-2'
        }
    ];

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleSettleClick = (opinion) => {
        setSettleDialog({ open: true, opinion });
        setSettlementData({ outcome: '', reason: '', evidenceUrl: '' });
    };

    const handleSettleSubmit = () => {
        if (!settlementData.outcome || !settlementData.reason.trim()) {
            setAlert({
                show: true,
                type: 'error',
                message: 'Please provide outcome and reason for settlement'
            });
            return;
        }

        // Simulate API call
        setAlert({
            show: true,
            type: 'success',
            message: `Opinion "${settleDialog.opinion.title}" settled successfully!`
        });

        setSettleDialog({ open: false, opinion: null });
        setSettlementData({ outcome: '', reason: '', evidenceUrl: '' });

        // Auto hide alert
        setTimeout(() => {
            setAlert({ show: false, type: 'success', message: '' });
        }, 3000);
    };

    const getOutcomeColor = (outcome) => {
        switch (outcome.toUpperCase()) {
            case 'YES': return 'success';
            case 'NO': return 'error';
            case 'DRAW': return 'warning';
            case 'CANCELLED': return 'default';
            default: return 'default';
        }
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Settle Opinions
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

            <Card elevation={2}>
                <CardContent sx={{ p: 0 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={selectedTab} onChange={handleTabChange} sx={{ px: 3, pt: 2 }}>
                            <Tab
                                label={`Pending Settlement (${pendingOpinions.length})`}
                                icon={<GavelIcon />}
                                iconPosition="start"
                            />
                            <Tab
                                label="Recent Settlements"
                                icon={<CheckCircleIcon />}
                                iconPosition="start"
                            />
                        </Tabs>
                    </Box>

                    {selectedTab === 0 && (
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Opinion</TableCell>
                                        <TableCell align="center">Category</TableCell>
                                        <TableCell align="center">End Date</TableCell>
                                        <TableCell align="center">Volume</TableCell>
                                        <TableCell align="center">Shares Distribution</TableCell>
                                        <TableCell align="center">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pendingOpinions.map((opinion) => (
                                        <TableRow key={opinion.id} hover>
                                            <TableCell>
                                                <Box>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                                        {opinion.title}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {opinion.traders.toLocaleString()} traders
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip label={opinion.category} size="small" variant="outlined" />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography variant="body2">
                                                    {new Date(opinion.endDate).toLocaleDateString()}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                                    {opinion.volume}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Box>
                                                    <Typography variant="caption" color="success.main">
                                                        YES: {opinion.yesShares} ({opinion.yesVolume})
                                                    </Typography>
                                                    <br />
                                                    <Typography variant="caption" color="error.main">
                                                        NO: {opinion.noShares} ({opinion.noVolume})
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    startIcon={<GavelIcon />}
                                                    onClick={() => handleSettleClick(opinion)}
                                                    sx={{
                                                        background: 'linear-gradient(45deg, #087DE6 30%, #4A9EF0 90%)',
                                                    }}
                                                >
                                                    Settle
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}

                    {selectedTab === 1 && (
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Opinion</TableCell>
                                        <TableCell align="center">Category</TableCell>
                                        <TableCell align="center">Outcome</TableCell>
                                        <TableCell align="center">Winnings Paid</TableCell>
                                        <TableCell align="center">Settled Date</TableCell>
                                        <TableCell align="center">Settled By</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {recentSettlements.map((settlement) => (
                                        <TableRow key={settlement.id} hover>
                                            <TableCell>
                                                <Box>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                                        {settlement.title}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {settlement.reason}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip label={settlement.category} size="small" variant="outlined" />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip
                                                    label={settlement.outcome}
                                                    color={getOutcomeColor(settlement.outcome)}
                                                    size="small"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'success.main' }}>
                                                    {settlement.winnings}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography variant="body2">
                                                    {new Date(settlement.settledDate).toLocaleDateString()}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip label={settlement.settledBy} size="small" color="primary" variant="outlined" />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </CardContent>
            </Card>

            {/* Settlement Dialog */}
            <Dialog
                open={settleDialog.open}
                onClose={() => setSettleDialog({ open: false, opinion: null })}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <GavelIcon color="primary" />
                        <Typography variant="h6" component="span">
                            Settle Opinion
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    {settleDialog.opinion && (
                        <Box>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2,
                                    mb: 3,
                                    bgcolor: 'background.default',
                                    border: '1px solid',
                                    borderColor: 'divider'
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                    {settleDialog.opinion.title}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Category: {settleDialog.opinion.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Traders: {settleDialog.opinion.traders.toLocaleString()}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Volume: {settleDialog.opinion.volume}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="caption" color="success.main">YES Shares</Typography>
                                        <Typography variant="h6" color="success.main" sx={{ fontWeight: 600 }}>
                                            {settleDialog.opinion.yesShares}
                                        </Typography>
                                        <Typography variant="caption" color="success.main">
                                            {settleDialog.opinion.yesVolume}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="caption" color="error.main">NO Shares</Typography>
                                        <Typography variant="h6" color="error.main" sx={{ fontWeight: 600 }}>
                                            {settleDialog.opinion.noShares}
                                        </Typography>
                                        <Typography variant="caption" color="error.main">
                                            {settleDialog.opinion.noVolume}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>

                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Settlement Outcome *</InputLabel>
                                <Select
                                    value={settlementData.outcome}
                                    label="Settlement Outcome *"
                                    onChange={(e) => setSettlementData(prev => ({ ...prev, outcome: e.target.value }))}
                                >
                                    <MenuItem value="YES">YES - Event occurred</MenuItem>
                                    <MenuItem value="NO">NO - Event did not occur</MenuItem>
                                    <MenuItem value="DRAW">DRAW - Inconclusive</MenuItem>
                                    <MenuItem value="CANCELLED">CANCELLED - Invalid/Aborted</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label="Reason for Settlement *"
                                value={settlementData.reason}
                                onChange={(e) => setSettlementData(prev => ({ ...prev, reason: e.target.value }))}
                                placeholder="Explain why this outcome was chosen..."
                                sx={{ mb: 2 }}
                                required
                            />

                            <TextField
                                fullWidth
                                label="Evidence URL (optional)"
                                value={settlementData.evidenceUrl}
                                onChange={(e) => setSettlementData(prev => ({ ...prev, evidenceUrl: e.target.value }))}
                                placeholder="https://example.com/proof-of-outcome"
                            />
                        </Box>
                    )}
                </DialogContent>
                <DialogActions sx={{ p: 3, pt: 1 }}>
                    <Button
                        onClick={() => setSettleDialog({ open: false, opinion: null })}
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSettleSubmit}
                        variant="contained"
                        startIcon={<CheckCircleIcon />}
                        sx={{
                            background: 'linear-gradient(45deg, #087DE6 30%, #4A9EF0 90%)',
                        }}
                    >
                        Settle Opinion
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default SettleOpinions;
