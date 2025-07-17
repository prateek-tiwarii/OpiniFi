import React from 'react';
import FeatureCard from './reusable/FeatureCard';
import SectionHeader from './reusable/SectionHeader';
import heroBg from '../assets/hero-bg.png';

const Features = () => {
    const features = [
        {
            title: "Real-Time Trading",
            description: "Trade on live events with instant price updates and real-time market data.",
            icon: "📈"
        },
        {
            title: "Secure Transactions",
            description: "Bank-grade security with encrypted transactions and secure wallet integration.",
            icon: "🔒"
        },
        {
            title: "Expert Analysis",
            description: "Access insights from market experts and AI-powered prediction models.",
            icon: "🧠"
        },
        {
            title: "Mobile Trading",
            description: "Trade anywhere, anytime with our fully responsive mobile platform.",
            icon: "📱"
        },
        {
            title: "Instant Payouts",
            description: "Get your winnings instantly with our fast and reliable payout system.",
            icon: "💰"
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock customer support to help you with any trading queries.",
            icon: "🎧"
        }
    ];

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
            className="relative min-h-screen py-20"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Platform Features"
                    subtitle="Everything you need to trade opinions successfully"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-3xl font-bold text-white text-center mb-4">
                        Trust & Safety
                    </h3>
                    <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                        Your security and trust are our top priorities. We've built our platform with the highest standards of safety and transparency.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {trustFeatures.map((feature, index) => (
                            <div key={index} className="text-center">
                                <h4 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
