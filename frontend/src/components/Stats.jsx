import React from 'react'
import heroBg from '../assets/hero-bg.png'
import { useTheme } from '../hooks/useTheme'

const Stats = () => {
    const { isDark } = useTheme();

    const stats = [
        {
            number: "$2.5M+",
            label: "Total Volume Traded",
            icon: "💰",
            color: "from-[#E1F39F] to-[#E1F39F]/70"
        },
        {
            number: "50K+",
            label: "Active Traders",
            icon: "👥",
            color: "from-[#087DE6] to-[#087DE6]/70"
        },
        {
            number: "1000+",
            label: "Markets Available",
            icon: "📈",
            color: "from-[#E1F39F] to-[#E1F39F]/70"
        },
        {
            number: "98.5%",
            label: "Platform Uptime",
            icon: "⚡",
            color: "from-[#087DE6] to-[#087DE6]/70"
        }
    ]

    return (
        <section
            id="stats"
            className="relative w-full py-16 px-4"
            style={{
                backgroundColor: !isDark ? '#f8fafc' : 'transparent',
                backgroundImage: isDark ? `url(${heroBg})` : 'none',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-white/10'}`}></div>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        OpiniFi by the Numbers
                    </h2>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-base`}>
                        Join the fastest-growing opinion trading community
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`${isDark ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10' : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white/90'} backdrop-blur-sm rounded-xl p-6 text-center border transition-all duration-200`}
                        >
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-100'} flex items-center justify-center`}>
                                <span className="text-2xl">{stat.icon}</span>
                            </div>
                            <div className={`text-3xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{stat.number}</div>
                            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Live Activity Feed */}
                <div className={`mt-12 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200'} backdrop-blur-sm rounded-xl p-6 border`}>
                    <h3 className={`text-xl font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        Live Activity
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>₹50,000 traded in "Bitcoin $100K" market</span>
                            <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>2 seconds ago</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>New market: "Will India win the next World Cup?"</span>
                            <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>1 minute ago</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>₹25,000 profit realized in Sports category</span>
                            <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>3 minutes ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats