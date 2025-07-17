import React from 'react'

const TradingCard = ({
    question,
    category,
    traders,
    yesPrice,
    noPrice,
    image,
    trending = false
}) => {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-[#087DE6]/50 transition-all duration-300 hover:transform hover:scale-105">
            {/* Card Header */}
            <div className="relative">
                {image && (
                    <img
                        src={image}
                        alt={question}
                        className="w-full h-32 object-cover"
                    />
                )}
                <div className="absolute top-2 left-2">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        {category}
                    </span>
                </div>
                {trending && (
                    <div className="absolute top-2 right-2">
                        <span className="bg-gradient-to-r from-[#E1F39F] to-[#087DE6] text-black text-xs px-2 py-1 rounded-full font-semibold">
                            🔥 Trending
                        </span>
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3 className="text-white font-medium text-sm mb-3 leading-tight">
                    {question}
                </h3>

                {/* Traders Count */}
                <div className="flex items-center text-gray-400 text-xs mb-4">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {traders.toLocaleString()} traders
                </div>

                {/* Price Options */}
                <div className="grid grid-cols-2 gap-2">
                    <button className="bg-green-600/20 border border-green-600/50 text-green-400 py-2 px-3 rounded-lg hover:bg-green-600/30 transition-colors">
                        <div className="text-xs">Yes</div>
                        <div className="font-semibold">₹{yesPrice}</div>
                    </button>
                    <button className="bg-red-600/20 border border-red-600/50 text-red-400 py-2 px-3 rounded-lg hover:bg-red-600/30 transition-colors">
                        <div className="text-xs">No</div>
                        <div className="font-semibold">₹{noPrice}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TradingCard
