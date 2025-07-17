import React from 'react'

const FeatureCard = ({
    icon,
    title,
    description,
    color = 'blue'
}) => {
    const colorClasses = {
        blue: 'from-[#087DE6] to-[#087DE6]/70',
        green: 'from-[#E1F39F] to-[#E1F39F]/70',
        purple: 'from-purple-500 to-purple-600',
        orange: 'from-orange-500 to-orange-600'
    }

    return (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorClasses[color]} flex items-center justify-center mb-4`}>
                <span className="text-2xl">{icon}</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    )
}

export default FeatureCard
