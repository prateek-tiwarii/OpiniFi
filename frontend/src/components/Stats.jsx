import React from 'react'
import heroBg from '../assets/hero-bg.png'

const Stats = () => {
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
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E1F39F] to-[#087DE6] bg-clip-text text-transparent mb-4">
                        OpiniFi by the Numbers
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Join the fastest-growing opinion trading community
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                                <span className="text-2xl">{stat.icon}</span>
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Live Activity Feed */}
                <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                        Live Activity
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">₹50,000 traded in "Bitcoin $100K" market</span>
                            <span className="text-[#E1F39F]">2 seconds ago</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">New market: "Will India win the next World Cup?"</span>
                            <span className="text-[#087DE6]">1 minute ago</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">₹25,000 profit realized in Sports category</span>
                            <span className="text-[#E1F39F]">3 minutes ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
