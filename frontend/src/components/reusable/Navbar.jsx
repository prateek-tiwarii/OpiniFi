import React, { useState } from 'react'
import logo from '../../assets/Image.png'
import navbarBg from '../../assets/navbarBg.png'
import { useTheme } from '../../hooks/useTheme'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navigationItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Markets', id: 'markets' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Features', id: 'features' },
    { name: 'Stats', id: 'stats' },
    { name: 'News', id: 'news' }
  ];

  return (
    <div className={`flex w-full h-[6rem] sm:h-[9rem] overflow-hidden justify-center items-center px-4 ${isDark ? 'dark' : 'light'}`}>
      <div
        className={`flex justify-between items-center p-3 sm:p-4 w-full max-w-[85rem] h-[4rem] sm:h-[5rem] rounded-[1rem] shadow-lg bg-cover bg-center bg-no-repeat ${isDark ? '' : 'bg-white/90 backdrop-blur-sm border border-gray-200'
          }`}
        style={isDark ? { backgroundImage: `url(${navbarBg})` } : {}}
      >
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-6 sm:h-8" />
          <h1 className={`text-lg sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>OpiniFi</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex space-x-4 gap-3">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${isDark
                    ? 'text-[#9C9C9D] hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className={`text-xl p-1 rounded transition-colors duration-200 ${isDark
              ? 'text-white hover:bg-white/10'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            className={`text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Desktop Theme Toggle and CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`text-xl p-2 rounded transition-colors duration-200 ${isDark
              ? 'text-white hover:bg-white/10'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => scrollToSection('markets')}
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded cursor-pointer text-xs sm:text-sm font-medium transition-all duration-200 ${isDark
              ? 'bg-white text-[#2F3031] hover:bg-gray-100'
              : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
          >
            Start Trading Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-[6rem] left-4 right-4 rounded-lg p-4 lg:hidden z-50 border ${isDark
          ? 'bg-black/90 backdrop-blur-sm border-white/10'
          : 'bg-white/95 backdrop-blur-sm border-gray-200'
          }`}>
          <ul className="flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`block font-medium transition-colors duration-200 cursor-pointer ${isDark
                    ? 'text-[#9C9C9D] hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollToSection('hero')}
            className={`px-4 py-2 rounded cursor-pointer w-full mt-4 font-medium transition-all duration-200 ${isDark
              ? 'bg-white text-[#2F3031] hover:bg-gray-100'
              : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
          >
            Start Trading Now
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
