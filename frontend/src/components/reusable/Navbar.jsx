import React, { useState } from 'react'
import logo from '../../assets/Image.png'
import navbarBg from '../../assets/navbarBg.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex w-full h-[6rem] sm:h-[9rem] overflow-hidden justify-center items-center px-4'>
      <div
        className="flex justify-between items-center p-3 sm:p-4 w-full max-w-[85rem] h-[4rem] sm:h-[5rem] rounded-[1rem] shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${navbarBg})` }}
      >
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-6 sm:h-8" />
          <h1 className="text-white text-lg sm:text-2xl font-bold">OpiniFi</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex space-x-4 gap-3">
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 text-sm font-bold">Markets</a>
            </li>
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 text-sm font-bold">How It Works</a>
            </li>
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 text-sm font-bold">Insights</a>
            </li>
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 text-sm font-bold">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 text-sm font-bold">Support</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop CTA Button */}
        <div className="hidden sm:block">
          <button className="bg-white text-[#2F3031] px-2 sm:px-4 py-1 sm:py-2 rounded cursor-pointer text-xs sm:text-sm font-bold">
            <h3 className="font-bold">Start Trading Now</h3>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[6rem] left-4 right-4 bg-black/90 rounded-lg p-4 lg:hidden z-50">
          <ul className="flex flex-col space-y-3">
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 block font-bold">Markets</a>
            </li>
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 block font-bold">How It Works</a>
            </li>
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 block font-bold">Insights</a>
            </li>
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 block font-bold">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-[#9C9C9D] hover:text-gray-300 block font-bold">Support</a>
            </li>
          </ul>
          <button className="bg-white text-[#2F3031] px-4 py-2 rounded cursor-pointer w-full mt-4 font-bold">
            <h3 className="font-bold">Start Trading Now</h3>
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar;
