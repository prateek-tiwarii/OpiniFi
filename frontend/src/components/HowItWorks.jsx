import React from 'react'
import FeatureCard from './reusable/FeatureCard'
import SectionHeader from './reusable/SectionHeader'
import heroBg from '../assets/hero-bg.png'
import { useTheme } from '../hooks/useTheme'

const HowItWorks = () => {
    const { isDark } = useTheme();

    const steps = [
        {
            icon: "👁️",
            title: "Nazar - Observe",
            description: "Keep an eye on the happenings around you. Be it Politics, Sports, Entertainment and more. Stay informed about events that matter.",
            color: "blue"
        },
        {
            icon: "📰",
            title: "Khabar - Understand",
            description: "Understand the news without the noise. Get to the crux of every matter and develop a well-informed opinion.",
            color: "green"
        },
        {
            icon: "💪",
            title: "Jigar - Take a Stand",
            description: "Have the courage to stand by your opinions about upcoming world events by investing in them with confidence.",
            color: "orange"
        },
        {
            icon: "⏳",
            title: "Sabar - Be Patient",
            description: "Have the patience to negotiate market ups and downs, and make decisions as events unfold over time.",
            color: "purple"
        }
    ]

    return (
        <section
            id="how-it-works"
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
                <SectionHeader
                    title="How OpiniFi Works"
                    subtitle="Turn your knowledge into profit with our simple 4-step process"
                    gradient={false}
                />

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <FeatureCard
                                icon={step.icon}
                                title={step.title}
                                description={step.description}
                                color={step.color}
                            />
                            {/* Step Number */}
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#E1F39F] to-[#087DE6] rounded-full flex items-center justify-center text-black font-bold text-sm">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`text-center ${isDark ? 'bg-gradient-to-r from-[#E1F39F]/10 to-[#087DE6]/10' : 'bg-white/80 backdrop-blur-sm'} rounded-lg p-8`}>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Ready to Start Trading?</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>Join thousands of traders who are already profiting from their predictions</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-[#E1F39F] to-[#087DE6] text-black font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                            Download App
                        </button>
                        <button className={`border-2 ${isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} font-semibold px-8 py-3 rounded-full transition-all duration-300`}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
