import React from 'react'

const SectionHeader = ({
    title,
    subtitle,
    centered = true,
    gradient = false
}) => {
    return (
        <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${gradient
                    ? 'bg-gradient-to-r from-[#E1F39F] to-[#087DE6] bg-clip-text text-transparent'
                    : ''
                }`}>
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
