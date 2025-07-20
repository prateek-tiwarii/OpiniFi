import React from 'react'
import Navbar from '../reusable/Navbar';
import heroBg from '../../assets/hero-bg.png'
import switchLogo from '../../assets/switchLogo.png';
import Button_container from '../../assets/Button container.png';

const SectionOne = () => {
    return (
        <section
            className="relative w-full h-screen"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
                <Navbar />
                <div className='h-[20rem] sm:h-[25rem] flex items-center justify-center mt-3 sm:mt-5 px-4 lg:px-0'>
                    <div className='flex flex-col items-center justify-center text-center mt-[-20px]'>
                        <div className='p-[2px] rounded-full bg-white/20 backdrop-blur-sm w-full max-w-[29rem] lg:w-[29rem] mx-auto'>
                            <h1 className='text-white text-[0.75rem] sm:text-[1rem] bg-black/50 w-full h-[2rem] sm:h-[2.4rem] text-center rounded-full flex justify-center items-center px-2 backdrop-blur-sm'>
                                <span className="hidden sm:inline">Explore the Future of Opinion Trading |</span>
                                <span className="sm:hidden">Future of Trading |</span>
                                <button className='text-blue-400 ml-1 sm:ml-2 text-[0.75rem] sm:text-[1rem]'>Learn More →</button>
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
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4 sm:mb-6">
                            Trade With Opinions
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-200 mb-6 sm:mb-8">
                            Join our marketplace where your insights shape outcomes and earn real rewards. Trade your predictions and turn knowledge into profit
                        </p>
                    </div>
                </div>
                {/* Call to Action Buttons - Mobile/Tablet only */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-[-150px] sm:mt-[-180px] lg:hidden px-4 relative z-10">
                    <button className="bg-white text-gray-900 font-medium px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto max-w-xs">
                        Start Trading Now
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-6 sm:px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 w-full sm:w-auto max-w-xs">
                        Explore Markets
                    </button>
                </div>

                {/* Original Button Container Image - Desktop only */}
                <img
                    src={Button_container}
                    alt="Button container"
                    className='hidden lg:block mt-[-275px] w-[78rem] ml-[9rem] opacity-70 mix-blend-overlay'
                />
            </div>
        </section>
    )
}

export default SectionOne;
