import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Grid,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Chip,
    Alert,
    Paper,
    Divider,
    Switch,
    FormControlLabel,
    InputAdornment,
} from '@mui/material';
import {
    Add as AddIcon,
    Save as SaveIcon,
    Preview as PreviewIcon,
    Category as CategoryIcon,
    Schedule as ScheduleIcon,
    MonetizationOn as MoneyIcon,
} from '@mui/icons-material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AddOpinion = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        endDate: null,
        initialYesPrice: 5,
        initialNoPrice: 5,
        minimumBet: 10,
        maximumBet: 10000,
        isPublic: true,
        tags: [],
        sourceUrl: '',
    });

    const [currentTag, setCurrentTag] = useState('');
    const [alert, setAlert] = useState({ show: false, type: 'success', message: '' });

    const categories = [
        'Sports',
        'Politics',
        'Entertainment',
        'Finance',
        'Others'
    ];

    const handleInputChange = (field) => (event) => {
        setFormData(prev => ({
            ...prev,
            [field]: event.target.value
        }));
    };

    const handleDateChange = (newDate) => {
        setFormData(prev => ({
            ...prev,
            endDate: newDate
        }));
    };

    const handleAddTag = () => {
        if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, currentTag.trim()]
            }));
            setCurrentTag('');
        }
    };

    const handleDeleteTag = (tagToDelete) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToDelete)
        }));
    };

    const handleSubmit = (isDraft = false) => {
        // Validation
        if (!formData.title.trim() || !formData.description.trim() || !formData.category || !formData.endDate) {
            setAlert({
                show: true,
                type: 'error',
                message: 'Please fill in all required fields'
            });
            return;
        }

        // Simulate API call
        setAlert({
            show: true,
            type: 'success',
            message: `Opinion ${isDraft ? 'saved as draft' : 'created'} successfully!`
        });

        // Reset form after success
        setTimeout(() => {
            setFormData({
                title: '',
                description: '',
                category: '',
                endDate: null,
                initialYesPrice: 5,
                initialNoPrice: 5,
                minimumBet: 10,
                maximumBet: 10000,
                isPublic: true,
                tags: [],
                sourceUrl: '',
            });
            setAlert({ show: false, type: 'success', message: '' });
        }, 2000);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    Add New Opinion
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

                <Grid container spacing={3}>
                    {/* Main Form */}
                    <Grid item xs={12} lg={8}>
                        <Card elevation={2}>
                            <CardContent sx={{ p: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <AddIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        Opinion Details
                                    </Typography>
                                </Box>

                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Opinion Title"
                                            value={formData.title}
                                            onChange={handleInputChange('title')}
                                            placeholder="e.g., Will Bitcoin cross $100,000 by end of 2025?"
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Description"
                                            value={formData.description}
                                            onChange={handleInputChange('description')}
                                            placeholder="Provide detailed description and criteria for settlement..."
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth required>
                                            <InputLabel>Category</InputLabel>
                                            <Select
                                                value={formData.category}
                                                label="Category"
                                                onChange={handleInputChange('category')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <CategoryIcon />
                                                    </InputAdornment>
                                                }
                                            >
                                                {categories.map((category) => (
                                                    <MenuItem key={category} value={category}>
                                                        {category}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <DateTimePicker
                                            label="End Date & Time"
                                            value={formData.endDate}
                                            onChange={handleDateChange}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    required
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <ScheduleIcon />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            )}
                                            minDateTime={new Date()}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Source URL (optional)"
                                            value={formData.sourceUrl}
                                            onChange={handleInputChange('sourceUrl')}
                                            placeholder="https://example.com/news-source"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    {/* Tags */}
                                    <Grid item xs={12}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                                                Tags
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                                <TextField
                                                    size="small"
                                                    label="Add tag"
                                                    value={currentTag}
                                                    onChange={(e) => setCurrentTag(e.target.value)}
                                                    onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                                                />
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    onClick={handleAddTag}
                                                    disabled={!currentTag.trim()}
                                                >
                                                    Add
                                                </Button>
                                            </Box>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {formData.tags.map((tag, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={tag}
                                                        onDelete={() => handleDeleteTag(tag)}
                                                        size="small"
                                                        color="primary"
                                                        variant="outlined"
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} lg={4}>
                        <Grid container spacing={3}>
                            {/* Pricing Settings */}
                            <Grid item xs={12}>
                                <Card elevation={2}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <MoneyIcon sx={{ mr: 1, color: 'primary.main' }} />
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                Pricing & Limits
                                            </Typography>
                                        </Box>

                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    label="Initial Yes Price"
                                                    type="number"
                                                    value={formData.initialYesPrice}
                                                    onChange={handleInputChange('initialYesPrice')}
                                                    inputProps={{ min: 0.1, max: 9.9, step: 0.1 }}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    label="Initial No Price"
                                                    type="number"
                                                    value={formData.initialNoPrice}
                                                    onChange={handleInputChange('initialNoPrice')}
                                                    inputProps={{ min: 0.1, max: 9.9, step: 0.1 }}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    label="Min Bet"
                                                    type="number"
                                                    value={formData.minimumBet}
                                                    onChange={handleInputChange('minimumBet')}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    label="Max Bet"
                                                    type="number"
                                                    value={formData.maximumBet}
                                                    onChange={handleInputChange('maximumBet')}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Settings */}
                            <Grid item xs={12}>
                                <Card elevation={2}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                            Settings
                                        </Typography>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={formData.isPublic}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, isPublic: e.target.checked }))}
                                                />
                                            }
                                            label="Make Public"
                                        />
                                        <Typography variant="caption" color="text.secondary" display="block">
                                            Public opinions are visible to all users
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Preview */}
                            <Grid item xs={12}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 2,
                                        background: 'linear-gradient(135deg, rgba(8, 125, 230, 0.1) 0%, rgba(225, 243, 159, 0.1) 100%)',
                                        border: '1px solid rgba(8, 125, 230, 0.2)'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                        Preview
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                        {formData.title || 'Opinion title will appear here'}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {formData.category && `${formData.category} • `}
                                        {formData.endDate ? formData.endDate.toLocaleDateString() : 'End date not set'}
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography variant="caption">Yes</Typography>
                                            <Typography variant="h6" color="primary">
                                                ₹{formData.initialYesPrice}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography variant="caption">No</Typography>
                                            <Typography variant="h6" color="primary">
                                                ₹{formData.initialNoPrice}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<PreviewIcon />}
                        onClick={() => handleSubmit(true)}
                    >
                        Save as Draft
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<SaveIcon />}
                        onClick={() => handleSubmit(false)}
                        sx={{
                            background: 'linear-gradient(45deg, #087DE6 30%, #4A9EF0 90%)',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #065BA1 30%, #087DE6 90%)',
                            }
                        }}
                    >
                        Create Opinion
                    </Button>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default AddOpinion;
