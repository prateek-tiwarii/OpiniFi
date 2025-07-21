import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import SectionHeader from './reusable/SectionHeader';
import heroBg from '../assets/hero-bg.png';
import { useTheme } from '../hooks/useTheme';

const Features = () => {
    const { isDark } = useTheme();

    const trustFeatures = [
        {
            title: "Regulated Platform",
            description: "Licensed and regulated trading platform ensuring complete transparency.",
        },
        {
            title: "Fair Trading",
            description: "Advanced algorithms ensure fair pricing and transparent market operations.",
        },
        {
            title: "Data Protection",
            description: "Your personal and financial data is protected with industry-leading security.",
        }
    ];

    return (
        <section
            id="features"
            className="relative min-h-screen py-20"
            style={{
                backgroundColor: !isDark ? '#f8fafc' : 'transparent',
                backgroundImage: isDark ? `url(${heroBg})` : 'none',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-white/10'}`}></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Platform Features"
                    subtitle="Everything you need to trade opinions successfully"
                    gradient={false}
                />                {/* Complete Features Bento Grid - Full Viewport */}
                <BentoGrid className="mb-16 auto-rows-[12rem] grid-cols-1 md:grid-cols-6">
                    {/* Real-Time Trading - Hero Feature */}
                    <BentoGridItem
                        className={`md:col-span-2 md:row-span-2 ${isDark
                            ? 'bg-gradient-to-br from-emerald-900/40 to-teal-900/30 border-emerald-400/30'
                            : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200'
                            } backdrop-blur-md hover:scale-[1.02] transition-all duration-300`}
                        title="Real-Time Trading"
                        description="Experience lightning-fast trades with instant price updates and live market data. Never miss an opportunity with our advanced trading engine."
                        header={
                            <div className="flex flex-col h-full">
                                <div className="text-6xl mb-4">📈</div>
                                <div className="flex-1 flex flex-col justify-end">
                                    <div className={`p-4 rounded-lg ${isDark ? 'bg-emerald-900/40' : 'bg-emerald-100/50'} backdrop-blur-sm mb-4`}>
                                        <div className="flex items-center justify-between">
                                            <span className={`text-sm font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Live Updates</span>                                            <div className="flex space-x-1">
                                                <div className="w-2 h-6 bg-emerald-400 rounded animate-bounce"></div>
                                                <div className="w-2 h-4 bg-emerald-300 rounded animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                <div className="w-2 h-8 bg-emerald-400 rounded animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-2 h-3 bg-emerald-300 rounded animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">                                        <div className={`p-2 rounded-lg ${isDark ? 'bg-emerald-900/30' : 'bg-emerald-100'} text-center`}>
                                        <div className={`text-sm font-bold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>&lt;1ms</div>
                                        <div className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Latency</div>
                                    </div>
                                        <div className={`p-2 rounded-lg ${isDark ? 'bg-teal-900/30' : 'bg-teal-100'} text-center`}>
                                            <div className={`text-sm font-bold ${isDark ? 'text-teal-300' : 'text-teal-700'}`}>99.9%</div>
                                            <div className={`text-xs ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>Uptime</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Secure Transactions */}
                    <BentoGridItem
                        className={`md:col-span-1 ${isDark
                            ? 'bg-gradient-to-br from-red-900/40 to-pink-900/30 border-red-400/30'
                            : 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
                            } backdrop-blur-md`}
                        title="Bank-Grade Security"
                        description="256-bit encryption"
                        header={
                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl">🔒</div>
                                <div className={`w-full h-2 ${isDark ? 'bg-red-900/40' : 'bg-red-100'} rounded-full overflow-hidden`}>
                                    <div className="w-full h-full bg-gradient-to-r from-red-400 to-pink-400 animate-pulse"></div>
                                </div>
                                <div className={`text-xs font-bold ${isDark ? 'text-red-300' : 'text-red-700'}`}>
                                    SSL SECURED
                                </div>
                            </div>
                        }
                    />

                    {/* Expert Analysis */}
                    <BentoGridItem
                        className={`md:col-span-1 ${isDark
                            ? 'bg-gradient-to-br from-purple-900/40 to-indigo-900/30 border-purple-400/30'
                            : 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200'
                            } backdrop-blur-md`}
                        title="AI Insights"
                        description="Smart predictions"
                        header={
                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl">🧠</div>                                <div className="grid grid-cols-3 gap-1 w-full">
                                    <div className={`h-1 ${isDark ? 'bg-purple-400' : 'bg-purple-300'} rounded animate-pulse`}></div>
                                    <div className={`h-1 ${isDark ? 'bg-indigo-400' : 'bg-indigo-300'} rounded animate-pulse`} style={{ animationDelay: '0.2s' }}></div>
                                    <div className={`h-1 ${isDark ? 'bg-purple-400' : 'bg-purple-300'} rounded animate-pulse`} style={{ animationDelay: '0.4s' }}></div>
                                </div>
                                <div className={`text-xs font-bold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                                    AI POWERED
                                </div>
                            </div>
                        }
                    />

                    {/* Mobile Trading */}
                    <BentoGridItem
                        className={`md:col-span-2 ${isDark
                            ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border-blue-400/30'
                            : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
                            } backdrop-blur-md`}
                        title="Mobile Trading Platform"
                        description="Trade anywhere, anytime with our fully responsive mobile platform and dedicated apps."
                        header={
                            <div className="flex items-center justify-between">
                                <div className="text-5xl">📱</div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-900/40' : 'bg-blue-100'} text-center`}>
                                        <div className={`text-xs font-bold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>iOS</div>
                                    </div>
                                    <div className={`p-2 rounded-lg ${isDark ? 'bg-cyan-900/40' : 'bg-cyan-100'} text-center`}>
                                        <div className={`text-xs font-bold ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Android</div>
                                    </div>
                                    <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-900/40' : 'bg-blue-100'} text-center`}>
                                        <div className={`text-xs font-bold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Web</div>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Trading Volume Stats */}
                    <BentoGridItem
                        className={`md:col-span-2 ${isDark
                            ? 'bg-gradient-to-br from-orange-900/40 to-amber-900/30 border-orange-400/30'
                            : 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200'
                            } backdrop-blur-md`}
                        title="Trading Volume"
                        description="Daily trading statistics and market activity"
                        header={
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-5xl">📊</div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? 'bg-orange-900/40 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>
                                        LIVE
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className={`p-3 rounded-lg ${isDark ? 'bg-orange-900/30' : 'bg-orange-100'} text-center`}>
                                        <div className={`text-lg font-bold ${isDark ? 'text-orange-300' : 'text-orange-700'}`}>₹2.5M+</div>
                                        <div className={`text-xs ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>Daily Volume</div>
                                    </div>
                                    <div className={`p-3 rounded-lg ${isDark ? 'bg-amber-900/30' : 'bg-amber-100'} text-center`}>
                                        <div className={`text-lg font-bold ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>10K+</div>
                                        <div className={`text-xs ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>Daily Trades</div>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Instant Payouts */}
                    <BentoGridItem
                        className={`md:col-span-2 ${isDark
                            ? 'bg-gradient-to-br from-yellow-900/40 to-green-900/30 border-yellow-400/30'
                            : 'bg-gradient-to-br from-yellow-50 to-green-50 border-yellow-200'
                            } backdrop-blur-md`}
                        title="Instant Payouts"
                        description="Get your winnings instantly with our lightning-fast payout system. No waiting periods, no delays."
                        header={
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-5xl">💰</div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? 'bg-yellow-900/40 text-yellow-300' : 'bg-yellow-100 text-yellow-700'}`}>
                                        ⚡ INSTANT
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className={`p-2 rounded-lg ${isDark ? 'bg-yellow-900/30' : 'bg-yellow-100'} text-center`}>
                                        <div className={`text-sm font-bold ${isDark ? 'text-yellow-300' : 'text-yellow-700'}`}>UPI</div>
                                    </div>
                                    <div className={`p-2 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-100'} text-center`}>
                                        <div className={`text-sm font-bold ${isDark ? 'text-green-300' : 'text-green-700'}`}>Bank</div>
                                    </div>
                                    <div className={`p-2 rounded-lg ${isDark ? 'bg-yellow-900/30' : 'bg-yellow-100'} text-center`}>
                                        <div className={`text-sm font-bold ${isDark ? 'text-yellow-300' : 'text-yellow-700'}`}>Wallet</div>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* 24/7 Support */}
                    <BentoGridItem
                        className={`md:col-span-1 ${isDark
                            ? 'bg-gradient-to-br from-green-900/40 to-lime-900/30 border-green-400/30'
                            : 'bg-gradient-to-br from-green-50 to-lime-50 border-green-200'
                            } backdrop-blur-md`}
                        title="24/7 Support"
                        description="Always here to help"
                        header={
                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl">🎧</div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                                    <span className={`text-xs font-medium ${isDark ? 'text-green-300' : 'text-green-700'}`}>ONLINE</span>
                                </div>
                                <div className={`text-xs font-bold ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                                    LIVE CHAT
                                </div>
                            </div>
                        }
                    />

                    {/* Platform Performance */}
                    <BentoGridItem
                        className={`md:col-span-1 ${isDark
                            ? 'bg-gradient-to-br from-violet-900/40 to-purple-900/30 border-violet-400/30'
                            : 'bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200'
                            } backdrop-blur-md`}
                        title="Performance"
                        description="Lightning fast"
                        header={
                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl">⚡</div>
                                <div className={`text-sm font-bold ${isDark ? 'text-violet-300' : 'text-violet-700'}`}>
                                    0.5s
                                </div>
                                <div className={`text-xs ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>
                                    Load Time
                                </div>
                            </div>
                        }
                    />
                </BentoGrid>

                {/* Enhanced Trust Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className={`${isDark ? 'bg-white/5 backdrop-blur-sm border-white/20' : 'bg-white/90 backdrop-blur-sm border-gray-200'} rounded-2xl p-8 border`}>
                        <h3 className={`text-3xl font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                            🛡️ Trust & Safety
                        </h3>
                        <div className="space-y-6">
                            {trustFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-white' : 'bg-gray-900'}`}></div>
                                    <div>
                                        <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                                            {feature.title}
                                        </h4>
                                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${isDark ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border-indigo-400/20' : 'bg-gradient-to-br from-indigo-50 to-purple-100 border-indigo-200'} backdrop-blur-md rounded-2xl p-8 border`}>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>🏆 Platform Awards</h3>
                        <div className="space-y-4">
                            <div className={`p-4 rounded-lg ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                                <div className={`text-lg font-bold ${isDark ? 'text-indigo-300' : 'text-indigo-700'} mb-1`}>Best Trading Platform 2024</div>
                                <div className={`text-sm ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Fintech Innovation Awards</div>
                            </div>
                            <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                                <div className={`text-lg font-bold ${isDark ? 'text-purple-300' : 'text-purple-700'} mb-1`}>Most Secure Platform</div>
                                <div className={`text-sm ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Security Excellence Awards</div>
                            </div>
                            <div className={`p-4 rounded-lg ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                                <div className={`text-lg font-bold ${isDark ? 'text-indigo-300' : 'text-indigo-700'} mb-1`}>User Choice Award</div>
                                <div className={`text-sm ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Community Voted 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
