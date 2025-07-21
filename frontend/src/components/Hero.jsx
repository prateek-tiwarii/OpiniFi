import Navbar from './reusable/Navbar';
import heroBg from '../assets/hero-bg.png'
import switchLogo from '../assets/switchLogo.png';
import Button_container from '../assets/Button container.png';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { isDark } = useTheme();

    return (
        <div id="hero" className="w-full">
            <section
                className="relative w-full h-screen"
                style={{
                    backgroundColor: !isDark ? '#f8fafc' : 'transparent',
                    backgroundImage: isDark ? `url(${heroBg})` : 'none',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-white/10'}`}></div>
                <div className="relative z-10">
                    <Navbar />
                    <div className='h-[20rem] sm:h-[25rem] flex items-center justify-center mt-3 sm:mt-5 px-4 lg:px-0'>
                        <div className='flex flex-col items-center justify-center text-center mt-[-20px]'>
                            <div className='p-[2px] rounded-full bg-[linear-gradient(90deg,_#E1F39F_0%,_#E1F39F_50%,_#087DE6_100%)] w-full max-w-[29rem] lg:w-[29rem] mx-auto'>
                                <h1 className={`${isDark ? 'text-white bg-black' : 'text-black bg-white'} text-[0.75rem] sm:text-[1rem] w-full h-[2rem] sm:h-[2.4rem] text-center rounded-full flex justify-center items-center px-2`}>
                                    <span className="hidden sm:inline">Explore the Future of Opinion Trading |</span>
                                    <span className="sm:hidden">Future of Trading |</span>
                                    <button className='text-blue-500 ml-1 sm:ml-2 text-[0.75rem] sm:text-[1rem]'>Learn More →</button>
                                </h1>
                            </div>
                            <img
                                src={switchLogo}
                                alt="Platform Logo"
                                className='mt-3 sm:mt-4 rounded-lg shadow-lg w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] lg:w-[20rem] lg:h-[20rem]'
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center px-4 lg:px-0">
                        <div className="text-center max-w-4xl lg:max-w-3xl mt-[-80px] sm:mt-[-90px] lg:mt-[-100px]">
                            <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} leading-tight mb-4 sm:mb-6`}>
                                Trade With Opinions
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal bg-[linear-gradient(90deg,_rgba(225,243,159,1)_0%,_rgba(225,243,159,1)_50%,_rgba(8,125,230,1)_100%)] bg-clip-text text-transparent mb-6 sm:mb-8">
                                Join our marketplace where your insights shape outcomes and earn real rewards. Trade your predictions and turn knowledge into profit
                            </p>
                        </div>
                    </div>                    {/* Call to Action Buttons - Mobile/Tablet only */}                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-[-150px] sm:mt-[-180px] lg:hidden px-4 relative z-10">
                        <Link
                            to="/admin"
                            className="bg-gradient-to-r from-[#E1F39F] to-[#087DE6] text-black font-semibold px-6 sm:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-xs text-center no-underline"
                        >
                            Admin Dashboard
                        </Link>
                        <Link
                            to="/demo"
                            className={`border-2 ${isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 w-full sm:w-auto max-w-xs text-center no-underline`}
                        >
                            View Demo
                        </Link>
                    </div>

                    {/* Original Button Container Image - Desktop only */}
                    <img
                        src={Button_container}
                        alt="Button container"
                        className='hidden lg:block mt-[-275px] w-[78rem] ml-[9rem] opacity-30'
                    />
                </div>
            </section>

        </div>
    );
}

export default Hero
