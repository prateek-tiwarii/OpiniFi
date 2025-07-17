import React from 'react'
import heroBg from '../../assets/hero-bg.png'

const Footer = () => {
    return (
        <footer
            className="relative text-white py-16 px-4 border-t border-gray-800"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#E1F39F] to-[#087DE6] rounded-full flex items-center justify-center">
                                <span className="text-black font-bold text-sm">O</span>
                            </div>
                            <h3 className="text-xl font-bold">OpiniFi</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The world's first decentralized opinion marketplace. Trade predictions, earn rewards, and profit from your insights.
                        </p>
                        <div className="flex space-x-4">

                            <a href="#" className="text-gray-400 hover:text-[#087DE6] transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#087DE6] transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Trading */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-[#E1F39F]">Trading</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sports Markets</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stock Predictions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Political Events</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Entertainment</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Crypto Markets</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Weather & Climate</a></li>
                        </ul>
                    </div>

                    {/* Platform */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-[#087DE6]">Platform</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trading Guide</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Market Analysis</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Leaderboard</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rewards Program</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-[#E1F39F]">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-[#E1F39F]/10 to-[#087DE6]/10 rounded-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                            <p className="text-gray-400 text-sm">Get the latest market insights and trading opportunities delivered to your inbox.</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#087DE6] flex-1 md:w-64"
                            />
                            <button className="bg-gradient-to-r from-[#E1F39F] to-[#087DE6] text-black font-semibold px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Market Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-900 rounded-lg">
                        <div className="text-2xl font-bold text-[#E1F39F]">$2.5M+</div>
                        <div className="text-xs text-gray-400">Total Volume</div>
                    </div>
                    <div className="text-center p-4 bg-gray-900 rounded-lg">
                        <div className="text-2xl font-bold text-[#087DE6]">50K+</div>
                        <div className="text-xs text-gray-400">Active Users</div>
                    </div>
                    <div className="text-center p-4 bg-gray-900 rounded-lg">
                        <div className="text-2xl font-bold text-[#E1F39F]">1000+</div>
                        <div className="text-xs text-gray-400">Markets</div>
                    </div>
                    <div className="text-center p-4 bg-gray-900 rounded-lg">
                        <div className="text-2xl font-bold text-[#087DE6]">98.5%</div>
                        <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-400">
                            © 2025 OpiniFi. All rights reserved. | Trade responsibly and only with money you can afford to lose.
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                            <span className="text-gray-400">🔒 Secured by SSL</span>
                            <span className="text-gray-400">⚡ 99.9% Uptime</span>
                            <span className="text-gray-400">🏆 Licensed Platform</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
