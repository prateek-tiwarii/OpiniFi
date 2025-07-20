import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const TradingCard = ({
    question,
    category,
    traders,
    yesPrice,
    noPrice,
    image,
    trending = false
}) => {
    const { isDark } = useTheme();
    return (
        <div className={`rounded-xl border transition-all duration-200 ${isDark
                ? 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 hover:bg-white/10'
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
            }`}>
            {/* Card Header */}
            <div className="relative">
                {image && (
                    <img
                        src={image}
                        alt={question}
                        className="w-full h-32 object-cover rounded-t-xl"
                    />
                )}
                <div className="absolute top-3 left-3">
                    <span className={`text-xs px-2 py-1 rounded-md ${isDark
                            ? 'bg-black/50 backdrop-blur-sm text-white'
                            : 'bg-white/90 backdrop-blur-sm text-gray-900 border border-gray-200'
                        }`}>
                        {category}
                    </span>
                </div>
                {trending && (
                    <div className="absolute top-3 right-3">
                        <span className={`text-xs px-2 py-1 rounded-md font-medium ${isDark
                                ? 'bg-white text-gray-900'
                                : 'bg-gray-900 text-white'
                            }`}>
                            🔥 Trending
                        </span>
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-5">
                <h3 className={`font-medium text-sm mb-4 leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {question}
                </h3>

                {/* Traders Count */}
                <div className={`flex items-center text-xs mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {traders.toLocaleString()} traders
                </div>

                {/* Price Options */}
                <div className="grid grid-cols-2 gap-3">
                    <button className={`py-2.5 px-3 rounded-lg transition-all duration-200 border ${isDark
                            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                            : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100'
                        }`}>
                        <div className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Yes</div>
                        <div className="font-medium">₹{yesPrice}</div>
                    </button>
                    <button className={`py-2.5 px-3 rounded-lg transition-all duration-200 border ${isDark
                            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                            : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100'
                        }`}>
                        <div className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>No</div>
                        <div className="font-medium">₹{noPrice}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TradingCard
