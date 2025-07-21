import React from 'react'
import TradingCard from './reusable/TradingCard'
import SectionHeader from './reusable/SectionHeader'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import heroBg from '../assets/hero-bg.png'
import { useTheme } from '../hooks/useTheme'

const TradingMarkets = () => {
    const { isDark } = useTheme(); const tradingCards = [
        {
            question: "Will Bitcoin cross $100,000 by end of 2025?",
            category: "Crypto",
            traders: 2847,
            yesPrice: 3.5,
            noPrice: 6.5,
            trending: true,
            volume: "₹50K",
            change: "+12%"
        },
        {
            question: "Will Bitcoin cross $100,000 by end of 2025?",
            category: "Crypto",
            traders: 2847,
            yesPrice: 3.5,
            noPrice: 6.5,
            trending: true,
            volume: "₹50K",
            change: "+12%"
        },
        {
            question: "Will India's GDP growth rate be 6.5% or more in FY25-26?",
            category: "Economy",
            traders: 1816,
            yesPrice: 7,
            noPrice: 3,
            trending: true,
            volume: "₹35K",
            change: "+8%"
        },
        {
            question: "Will IPL 2025 have more than 80 sixes in the final?",
            category: "Sports",
            traders: 3255,
            yesPrice: 4.5,
            noPrice: 5.5,
            trending: false,
            volume: "₹28K",
            change: "+5%"
        },
        {
            question: "Will Tesla stock hit $300 by Q2 2025?",
            category: "Finance",
            traders: 1923,
            yesPrice: 2.8,
            noPrice: 7.2,
            trending: false,
            volume: "₹22K",
            change: "-2%"
        }
    ]

    const marketCategories = [
        { name: "Crypto", volume: "₹2.5M", markets: 45, color: "from-orange-400 to-yellow-400" },
        { name: "Sports", volume: "₹1.8M", markets: 32, color: "from-blue-400 to-cyan-400" },
        { name: "Economy", volume: "₹1.2M", markets: 28, color: "from-green-400 to-emerald-400" },
        { name: "Politics", volume: "₹950K", markets: 18, color: "from-purple-400 to-pink-400" }
    ]

    return (<section
        id="markets"
        className={`relative w-full py-24 px-4 ${isDark ? 'dark' : 'light'}`}
        style={isDark ? {
            backgroundImage: `url(${heroBg})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        } : {
            backgroundColor: '#f8fafc'
        }}
    >
        <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-white/10'}`}></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
                title="Live Trading Markets"
                subtitle="Trade your opinions on real-world events across multiple categories"
                gradient={false}
            />            {/* Trading Markets Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tradingCards.map((card, index) => (
                    <div
                        key={index}
                        className={`${isDark
                            ? 'bg-black/30 backdrop-blur-md border-white/10 hover:bg-black/40'
                            : 'bg-white/90 backdrop-blur-md border-gray-200/50 hover:bg-white'
                            } rounded-xl border p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${isDark ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                                }`}>
                                {card.category}
                            </span>
                            <div className="flex items-center gap-2">
                                {card.trending && (
                                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                                )}
                                <span className={`text-xs font-medium ${card.change.startsWith('+')
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                    }`}>
                                    {card.change}
                                </span>
                            </div>
                        </div>

                        {/* Question */}
                        <h3 className={`text-sm font-medium mb-4 leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            {card.question}
                        </h3>

                        {/* Stats */}
                        <div className={`text-xs mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {card.traders.toLocaleString()} traders • {card.volume} volume
                        </div>

                        {/* Price Options */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className={`text-center p-3 rounded-lg border ${isDark
                                ? 'bg-green-900/20 border-green-500/30'
                                : 'bg-green-50 border-green-200'
                                }`}>
                                <div className={`text-xs font-medium mb-1 ${isDark ? 'text-green-300' : 'text-green-700'
                                    }`}>
                                    YES
                                </div>
                                <div className={`text-lg font-bold ${isDark ? 'text-green-400' : 'text-green-600'
                                    }`}>
                                    ₹{card.yesPrice}
                                </div>
                            </div>
                            <div className={`text-center p-3 rounded-lg border ${isDark
                                ? 'bg-red-900/20 border-red-500/30'
                                : 'bg-red-50 border-red-200'
                                }`}>
                                <div className={`text-xs font-medium mb-1 ${isDark ? 'text-red-300' : 'text-red-700'
                                    }`}>
                                    NO
                                </div>
                                <div className={`text-lg font-bold ${isDark ? 'text-red-400' : 'text-red-600'
                                    }`}>
                                    ₹{card.noPrice}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Market Categories */}
            <div className="mt-16">
                <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Popular Categories
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {marketCategories.map((category, index) => (
                        <div
                            key={`category-${index}`}
                            className={`${isDark
                                ? 'bg-black/30 backdrop-blur-md border-white/10'
                                : 'bg-white/90 backdrop-blur-md border-gray-200/50'
                                } rounded-xl border p-4 text-center hover:scale-105 transition-all cursor-pointer`}
                        >
                            <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                                {category.name[0]}
                            </div>
                            <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {category.name}
                            </h4>
                            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {category.markets} markets
                            </p>
                            <p className={`text-sm font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {category.volume}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Platform Stats */}
            <BentoGrid className="mt-16 auto-rows-[10rem] grid-cols-1 md:grid-cols-3">
                <BentoGridItem
                    className={`${isDark
                        ? 'bg-gradient-to-br from-emerald-900/40 to-teal-900/30 border-emerald-400/20'
                        : 'bg-gradient-to-br from-emerald-50 to-teal-100 border-emerald-200'
                        } backdrop-blur-md`}
                    title="Live Statistics"
                    description="Real-time platform data"
                    header={
                        <div className="flex flex-col justify-center h-full">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className={`text-lg font-bold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>10K+</div>
                                    <div className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Traders</div>
                                </div>
                                <div className="text-center">
                                    <div className={`text-lg font-bold ${isDark ? 'text-teal-300' : 'text-teal-700'}`}>50+</div>
                                    <div className={`text-xs ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>Markets</div>
                                </div>
                            </div>
                        </div>
                    }
                />

                <BentoGridItem
                    className={`${isDark
                        ? 'bg-gradient-to-br from-cyan-900/40 to-blue-900/30 border-cyan-400/20'
                        : 'bg-gradient-to-br from-cyan-50 to-blue-100 border-cyan-200'
                        } backdrop-blur-md`}
                    title="Quick Actions"
                    description="Start trading now"
                    header={
                        <div className="flex flex-col justify-center h-full space-y-2">
                            <button className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${isDark
                                ? 'bg-cyan-900/40 text-cyan-300 hover:bg-cyan-900/60'
                                : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                                }`}>
                                View All Markets
                            </button>
                        </div>
                    }
                />

                <BentoGridItem
                    className={`${isDark
                        ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/30 border-purple-400/20'
                        : 'bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200'
                        } backdrop-blur-md`}
                    title="Daily Insights"
                    description="Market performance"
                    header={
                        <div className="flex flex-col justify-center h-full">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Top Performer</span>
                                    <span className="text-green-400 font-medium">+12%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>24h Volume</span>
                                    <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>₹6.45M</span>
                                </div>
                            </div>
                        </div>
                    }
                />
            </BentoGrid>            {/* Simple Call to Action */}
            <div className="mt-16 text-center">
                <div className={`${isDark ? 'bg-white/5 backdrop-blur-sm border-white/20' : 'bg-white/90 backdrop-blur-sm border-gray-200'
                    } rounded-2xl p-8 border max-w-md mx-auto`}>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                        Ready to Start Trading?
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 text-sm`}>
                        Join thousands of traders making predictions on real events
                    </p>
                    <button className={`font-medium px-6 py-3 rounded-lg transition-all duration-200 ${isDark
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}>
                        Explore Markets
                    </button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default TradingMarkets
