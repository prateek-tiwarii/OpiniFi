import React from 'react'
import SectionHeader from './reusable/SectionHeader'
import heroBg from '../assets/hero-bg.png'

const NewsFeed = () => {
    const newsItems = [
        {
            title: "Market Analysis: Bitcoin's Path to $100K",
            category: "Crypto",
            time: "2 hours ago",
            summary: "Expert analysis on cryptocurrency trends and market predictions for the next quarter.",
            impact: "High",
            color: "orange"
        },
        {
            title: "IPL 2025: Early Season Predictions",
            category: "Sports",
            time: "4 hours ago",
            summary: "Team performance analysis and key player insights for the upcoming cricket season.",
            impact: "Medium",
            color: "blue"
        },
        {
            title: "Global Economic Outlook 2025-26",
            category: "Economy",
            time: "6 hours ago",
            summary: "GDP growth forecasts and economic indicators across major world economies.",
            impact: "High",
            color: "green"
        },
        {
            title: "Tech Giants Quarterly Earnings Preview",
            category: "Finance",
            time: "8 hours ago",
            summary: "Expectations and predictions for major technology companies' earnings reports.",
            impact: "Medium",
            color: "purple"
        }
    ]

    const getImpactColor = (impact) => {
        switch (impact) {
            case 'High': return 'text-red-400 bg-red-400/20'
            case 'Medium': return 'text-yellow-400 bg-yellow-400/20'
            case 'Low': return 'text-green-400 bg-green-400/20'
            default: return 'text-gray-400 bg-gray-400/20'
        }
    }

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
                    title="Latest Market Insights"
                    subtitle="Stay ahead with curated news that creates trading opportunities"
                    gradient={true}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main News Feed */}
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            {newsItems.map((item, index) => (
                                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="bg-[#087DE6]/20 text-[#087DE6] px-3 py-1 rounded-full text-xs font-medium">
                                            {item.category}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-1 rounded-full text-xs ${getImpactColor(item.impact)}`}>
                                                {item.impact} Impact
                                            </span>
                                            <span className="text-gray-400 text-sm">{item.time}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{item.summary}</p>
                                    <button className="text-[#E1F39F] text-sm font-medium hover:text-white transition-colors">
                                        Read Full Analysis →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trending Topics Sidebar */}
                    <div className="space-y-6">
                        {/* Trending Now */}
                        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                                🔥 Trending Now
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { topic: "Bitcoin $100K", traders: "2.5K traders" },
                                    { topic: "India GDP Growth", traders: "1.8K traders" },
                                    { topic: "IPL 2025 Winner", traders: "3.2K traders" },
                                    { topic: "US Recession", traders: "1.6K traders" }
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-800 rounded transition-colors cursor-pointer">
                                        <span className="text-gray-300 text-sm">{item.topic}</span>
                                        <span className="text-[#087DE6] text-xs">{item.traders}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Market Pulse */}
                        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                            <h3 className="text-white font-semibold text-lg mb-4">📊 Market Pulse</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-400">Sports Markets</span>
                                        <span className="text-green-400">+12%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-400">Crypto Markets</span>
                                        <span className="text-[#E1F39F]">+8%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-[#E1F39F] h-2 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-400">Political Events</span>
                                        <span className="text-[#087DE6]">+15%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-[#087DE6] h-2 rounded-full w-4/5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-gradient-to-r from-[#E1F39F]/10 to-[#087DE6]/10 rounded-lg p-6">
                            <h3 className="text-white font-semibold text-lg mb-4">⚡ Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full bg-[#087DE6] text-white py-2 rounded-lg hover:bg-[#087DE6]/80 transition-colors">
                                    Create Alert
                                </button>
                                <button className="w-full border border-[#E1F39F] text-[#E1F39F] py-2 rounded-lg hover:bg-[#E1F39F] hover:text-black transition-colors">
                                    View Watchlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsFeed
