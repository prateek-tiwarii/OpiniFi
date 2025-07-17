import React from 'react'
import TradingCard from './reusable/TradingCard'
import SectionHeader from './reusable/SectionHeader'
import heroBg from '../assets/hero-bg.png'

const TradingMarkets = () => {
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
            className="relative w-full py-16 px-4"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="Live Trading Markets"
                    subtitle="Trade your opinions on real-world events across multiple categories"
                    gradient={true}
                />

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {['All', 'Sports', 'Finance', 'Politics', 'Entertainment', 'Crypto', 'Economy'].map((category) => (
                        <button
                            key={category}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${category === 'All'
                                ? 'bg-gradient-to-r from-[#E1F39F] to-[#087DE6] text-black border-transparent font-semibold'
                                : 'border-gray-700 text-gray-400 hover:border-[#087DE6] hover:text-white'
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
                    <button className="bg-gradient-to-r from-[#E1F39F] to-[#087DE6] text-black font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        View All Markets
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TradingMarkets
