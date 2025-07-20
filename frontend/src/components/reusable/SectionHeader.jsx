import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const SectionHeader = ({ title, subtitle, gradient = true }) => {
    const { isDark } = useTheme();

    return (
        <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-base md:text-lg ${gradient
                        ? 'bg-[linear-gradient(90deg,_rgba(225,243,159,1)_0%,_rgba(225,243,159,1)_50%,_rgba(8,125,230,1)_100%)] bg-clip-text text-transparent'
                        : isDark ? 'text-gray-300' : 'text-gray-600'
                    } max-w-2xl mx-auto`}>
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
