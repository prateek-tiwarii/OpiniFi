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
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/10">
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
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                        {category}
                    </span>
                </div>
                {trending && (
                    <div className="absolute top-3 right-3">
                        <span className="bg-white text-gray-900 text-xs px-2 py-1 rounded-md font-medium">
                            🔥 Trending
                        </span>
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-5">
                <h3 className="text-white font-medium text-sm mb-4 leading-relaxed">
                    {question}
                </h3>

                {/* Traders Count */}
                <div className="flex items-center text-gray-400 text-xs mb-4">
                    <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {traders.toLocaleString()} traders
                </div>

                {/* Price Options */}
                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-white/10 border border-white/20 text-white py-2.5 px-3 rounded-lg hover:bg-white/20 transition-all duration-200">
                        <div className="text-xs text-gray-400 mb-1">Yes</div>
                        <div className="font-medium">₹{yesPrice}</div>
                    </button>
                    <button className="bg-white/10 border border-white/20 text-white py-2.5 px-3 rounded-lg hover:bg-white/20 transition-all duration-200">
                        <div className="text-xs text-gray-400 mb-1">No</div>
                        <div className="font-medium">₹{noPrice}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TradingCard
