import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Button,
    Switch,
    FormControlLabel,
    Divider,
    Alert,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Tabs,
    Tab,
} from '@mui/material';
import {
    Settings as SettingsIcon,
    Security as SecurityIcon,
    Notifications as NotificationsIcon,
    Payment as PaymentIcon,
    Email as EmailIcon,
    Save as SaveIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Add as AddIcon,
    AdminPanelSettings as AdminIcon,
} from '@mui/icons-material';

const AdminSettings = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [settings, setSettings] = useState({
        // Platform Settings
        platformName: 'OpiniFi',
        maintenanceMode: false,
        allowNewRegistrations: true,
        minimumAge: 18,
        defaultCurrency: 'INR',

        // Trading Settings
        minimumBetAmount: 10,
        maximumBetAmount: 50000,
        platformFeePercentage: 2.5,
        settlementDelayHours: 24,

        // Notification Settings
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        settlementReminders: true,

        // Security Settings
        twoFactorAuth: true,
        sessionTimeoutMinutes: 30,
        maxLoginAttempts: 3,
        passwordMinLength: 8,
    });

    const [admins, setAdmins] = useState([
        { id: 1, name: 'John Doe', email: 'john@opinifi.com', role: 'Super Admin', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@opinifi.com', role: 'Admin', status: 'active' },
        { id: 3, name: 'Mike Johnson', email: 'mike@opinifi.com', role: 'Moderator', status: 'inactive' },
    ]);

    const [alert, setAlert] = useState({ show: false, type: 'success', message: '' });
    const [adminDialog, setAdminDialog] = useState({ open: false, admin: null, isEdit: false });

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleSettingChange = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSaveSettings = () => {
        // Simulate API call
        setAlert({
            show: true,
            type: 'success',
            message: 'Settings saved successfully!'
        });

        setTimeout(() => {
            setAlert({ show: false, type: 'success', message: '' });
        }, 3000);
    };

    const renderPlatformSettings = () => (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Platform Name"
                    value={settings.platformName}
                    onChange={(e) => handleSettingChange('platformName', e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Default Currency"
                    value={settings.defaultCurrency}
                    onChange={(e) => handleSettingChange('defaultCurrency', e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    label="Minimum Age"
                    value={settings.minimumAge}
                    onChange={(e) => handleSettingChange('minimumAge', parseInt(e.target.value))}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={settings.maintenanceMode}
                            onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)}
                        />
                    }
                    label="Maintenance Mode"
                />
                <Typography variant="caption" display="block" color="text.secondary">
                    When enabled, the platform will be inaccessible to regular users
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={settings.allowNewRegistrations}
                            onChange={(e) => handleSettingChange('allowNewRegistrations', e.target.checked)}
                        />
                    }
                    label="Allow New Registrations"
                />
                <Typography variant="caption" display="block" color="text.secondary">
                    Allow new users to register on the platform
                </Typography>
            </Grid>
        </Grid>
    );

    const renderTradingSettings = () => (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    label="Minimum Bet Amount (₹)"
                    value={settings.minimumBetAmount}
                    onChange={(e) => handleSettingChange('minimumBetAmount', parseFloat(e.target.value))}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    label="Maximum Bet Amount (₹)"
                    value={settings.maximumBetAmount}
                    onChange={(e) => handleSettingChange('maximumBetAmount', parseFloat(e.target.value))}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    label="Platform Fee (%)"
                    value={settings.platformFeePercentage}
                    onChange={(e) => handleSettingChange('platformFeePercentage', parseFloat(e.target.value))}
                    inputProps={{ step: 0.1, min: 0, max: 10 }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    label="Settlement Delay (Hours)"
                    value={settings.settlementDelayHours}
                    onChange={(e) => handleSettingChange('settlementDelayHours', parseInt(e.target.value))}
                />
            </Grid>
        </Grid>
    );

    const renderNotificationSettings = () => (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ mb: 2 }}>Communication Preferences</Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={settings.emailNotifications}
                            onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                        />
                    }
                    label="Email Notifications"
                />
                <Typography variant="caption" display="block" color="text.secondary">
                    Send notifications via email to users
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={settings.smsNotifications}
                            onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                        />
                    }
                    label="SMS Notifications"
                />
                <Typography variant="caption" display="block" color="text.secondary">
                    Send important notifications via SMS
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={settings.pushNotifications}
                            onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                        />
                    }
                    label="Push Notifications"
                />
                <Typography variant="caption" display="block" color="text.secondary">
                    Send push notifications to mobile app users
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={settings.settlementReminders}
                            onChange={(e) => handleSettingChange('settlementReminders', e.target.checked)}
                        />
                    }
                    label="Settlement Reminders"
                />
                <Typography variant="caption" display="block" color="text.secondary">
                    Remind admins about pending settlements
                </Typography>
            </Grid>
        </Grid>
    );

    const renderSecuritySettings = () => (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    label="Session Timeout (Minutes)"
                    value={settings.sessionTimeoutMinutes}
                    onChange={(e) => handleSettingChange('sessionTimeoutMinutes', parseInt(e.target.value))}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    label="Max Login Attempts"
                    value={settings.maxLoginAttempts}
                    onChange={(e) => handleSettingChange('maxLoginAttempts', parseInt(e.target.value))}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    label="Password Minimum Length"
                    value={settings.passwordMinLength}
                    onChange={(e) => handleSettingChange('passwordMinLength', parseInt(e.target.value))}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={settings.twoFactorAuth}
                            onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
                        />
                    }
                    label="Require Two-Factor Authentication"
                />
                <Typography variant="caption" display="block" color="text.secondary">
                    Force all users to enable 2FA for their accounts
                </Typography>
            </Grid>
        </Grid>
    );

    const renderAdminManagement = () => (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Admin Users</Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setAdminDialog({ open: true, admin: null, isEdit: false })}
                >
                    Add Admin
                </Button>
            </Box>

            <List>
                {admins.map((admin) => (
                    <Paper key={admin.id} elevation={1} sx={{ mb: 1 }}>
                        <ListItem
                            secondaryAction={
                                <Box>
                                    <IconButton
                                        onClick={() => setAdminDialog({ open: true, admin, isEdit: true })}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            }
                        >
                            <ListItemIcon>
                                <AdminIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={admin.name}
                                secondary={
                                    <Box>
                                        <Typography variant="body2" component="span">
                                            {admin.email} • {admin.role}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            component="span"
                                            sx={{
                                                ml: 1,
                                                px: 1,
                                                py: 0.25,
                                                borderRadius: 1,
                                                bgcolor: admin.status === 'active' ? 'success.light' : 'warning.light',
                                                color: admin.status === 'active' ? 'success.dark' : 'warning.dark',
                                            }}
                                        >
                                            {admin.status}
                                        </Typography>
                                    </Box>
                                }
                            />
                        </ListItem>
                    </Paper>
                ))}
            </List>
        </Box>
    );

    const tabs = [
        { label: 'Platform', icon: <SettingsIcon />, content: renderPlatformSettings },
        { label: 'Trading', icon: <PaymentIcon />, content: renderTradingSettings },
        { label: 'Notifications', icon: <NotificationsIcon />, content: renderNotificationSettings },
        { label: 'Security', icon: <SecurityIcon />, content: renderSecuritySettings },
        { label: 'Admin Users', icon: <AdminIcon />, content: renderAdminManagement },
    ];

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Admin Settings
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
                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{ px: 2 }}
                        >
                            {tabs.map((tab, index) => (
                                <Tab
                                    key={index}
                                    label={tab.label}
                                    icon={tab.icon}
                                    iconPosition="start"
                                />
                            ))}
                        </Tabs>
                    </Box>

                    <Box sx={{ p: 4 }}>
                        {tabs[selectedTab].content()}

                        {selectedTab !== 4 && ( // Don't show save button for Admin Users tab
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<SaveIcon />}
                                    onClick={handleSaveSettings}
                                    sx={{
                                        background: 'linear-gradient(45deg, #087DE6 30%, #4A9EF0 90%)',
                                    }}
                                >
                                    Save Settings
                                </Button>
                            </Box>
                        )}
                    </Box>
                </CardContent>
            </Card>

            {/* Admin Dialog */}
            <Dialog
                open={adminDialog.open}
                onClose={() => setAdminDialog({ open: false, admin: null, isEdit: false })}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    {adminDialog.isEdit ? 'Edit Admin User' : 'Add Admin User'}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                defaultValue={adminDialog.admin?.name || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                defaultValue={adminDialog.admin?.email || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                label="Role"
                                defaultValue={adminDialog.admin?.role || 'Admin'}
                                SelectProps={{ native: true }}
                            >
                                <option value="Super Admin">Super Admin</option>
                                <option value="Admin">Admin</option>
                                <option value="Moderator">Moderator</option>
                            </TextField>
                        </Grid>
                        {!adminDialog.isEdit && (
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Temporary Password"
                                    type="password"
                                />
                            </Grid>
                        )}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setAdminDialog({ open: false, admin: null, isEdit: false })}>
                        Cancel
                    </Button>
                    <Button variant="contained">
                        {adminDialog.isEdit ? 'Update' : 'Create'} Admin
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdminSettings;
