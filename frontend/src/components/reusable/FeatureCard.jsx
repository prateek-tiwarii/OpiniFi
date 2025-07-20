import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const FeatureCard = ({
    icon,
    title,
    description
}) => {
    const { isDark } = useTheme();

    return (
        <div className={`${isDark ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10' : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white/90'} backdrop-blur-sm rounded-xl p-6 border transition-all duration-200`}>
            <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'} flex items-center justify-center mb-4`}>
                <span className="text-2xl">{icon}</span>
            </div>
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-lg mb-3`}>{title}</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>{description}</p>
        </div>
    )
}

export default FeatureCard
