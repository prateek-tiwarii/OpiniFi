import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true); // Default to dark mode

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <div className={isDark ? 'dark' : 'light'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
