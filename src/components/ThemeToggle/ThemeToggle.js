import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <div className={`toggle-track ${theme}`}>
                <div className="toggle-thumb">
                    {theme === 'dark' ? <FaMoon /> : <FaSun />}
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
