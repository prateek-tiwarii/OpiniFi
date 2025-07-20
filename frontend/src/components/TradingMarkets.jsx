import React from 'react'
import TradingCard from './reusable/TradingCard'
import SectionHeader from './reusable/SectionHeader'
import heroBg from '../assets/hero-bg.png'
import { useTheme } from '../hooks/useTheme'

const TradingMarkets = () => {
    const { isDark } = useTheme();
    const tradingCards = [
        {
            question: "Will India's GDP growth rate be 6.5% or more in FY25-26?",
            category: "Economy",
            traders: 1816,
            yesPrice: 7,
            noPrice: 3,
            trending: true
        },
        {
            question: "Will USA enter into recession by the end of July 2025?",
            category: "Finance",
            traders: 1591,
            yesPrice: 0.5,
            noPrice: 9.5
        },
        {
            question: "Will Virat Kohli surpass Sachin Tendulkar's International Cricket centuries by the end of 2027?",
            category: "Sports",
            traders: 3255,
            yesPrice: 1,
            noPrice: 9
        },
        {
            question: "Will Bitcoin cross $100,000 by end of 2025?",
            category: "Crypto",
            traders: 2847,
            yesPrice: 3.5,
            noPrice: 6.5,
            trending: true
        },
        {
            question: "Will RRR win an Oscar at the 2026 Academy Awards?",
            category: "Entertainment",
            traders: 1923,
            yesPrice: 2,
            noPrice: 8
        },
        {
            question: "Will Elon Musk step down as CEO of Tesla in 2025?",
            category: "Business",
            traders: 2156,
            yesPrice: 1.5,
            noPrice: 8.5
        }
    ]

    return (
        <section
            id="markets"
            className={`relative w-full py-16 px-4 ${isDark ? 'dark' : 'light'}`}
            style={isDark ? {
                backgroundImage: `url(${heroBg})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            } : {
                backgroundColor: '#f8fafc'
            }}
        >
            <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-white/20'}`}></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="Live Trading Markets"
                    subtitle="Trade your opinions on real-world events across multiple categories"
                    gradient={false}
                />

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {['All', 'Sports', 'Finance', 'Politics', 'Entertainment', 'Crypto', 'Economy'].map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${category === 'All'
                                ? isDark
                                    ? 'bg-white text-gray-900 font-medium'
                                    : 'bg-gray-900 text-white font-medium'
                                : isDark
                                    ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Trading Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {tradingCards.map((card, index) => (
                        <TradingCard
                            key={index}
                            question={card.question}
                            category={card.category}
                            traders={card.traders}
                            yesPrice={card.yesPrice}
                            noPrice={card.noPrice}
                            trending={card.trending}
                        />
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <button className={`font-medium px-8 py-3 rounded-lg transition-all duration-200 ${isDark
                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}>
                        View All Markets
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TradingMarkets
