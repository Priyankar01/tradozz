'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const faqs = [
	{
		question: 'How does Tradozz work?',
		answer:
			'You invest in a stream (equity, commodity, or crypto), and our analysts trade on your behalf. You can monitor your investments and returns through your dashboard.',
	},
	{
		question: 'Can I withdraw my profits anytime?',
		answer:
			'Yes! You can request a withdrawal at any time from your dashboard. Profits are updated regularly based on trading performance.',
	},
	{
		question: 'Is there any risk involved?',
		answer:
			'As with any investment, there is risk involved. However, our strategies are designed by experienced analysts to mitigate risk and maximize returns.',
	},
	{
		question: 'What is the minimum investment amount?',
		answer:
			'The minimum investment depends on the stream you choose. You’ll see the required amount when you subscribe.',
	},
];

export default function Home() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<>
			<Navbar />

			{/* Main Section */}
			<main>
				<div className="max-w-auto mx-auto animate-fadeIn">
					<section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100 text-gray-800 transition-colors duration-300">
						{/* Text content */}
						<div className="w-full md:w-1/2 flex flex-col gap-6">
							<h1 className="text-4xl md:text-5xl font-bold leading-tight">
								Let Tradozz Trade While You Focus On Life 💼📈
							</h1>
							<p className="text-lg md:text-xl text-gray-700 md:leading-relaxed">
								Invest without the stress. Our expert traders grow your money
								while you relax and track your profits from your dashboard.
							</p>
							<div className="flex gap-4">
								<Link
									href="/register"
									className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-150">
									Get Started
								</Link>
								<Link
									href="#how-it-works"
									className="border border-gray-400 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-700 hover:border-gray-300 hover:text-white transition-colors duration-150">
									Learn More
								</Link>
							</div>
						</div>

						{/* Image or illustration */}
						<div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
							<img
								src="/hero-illustration.png"
								alt="Trading illustration"
								className="w-[90%] max-w-md drop-shadow-lg"
							/>
						</div>
					</section>
				</div>
			</main>

			{/* How it works */}
			<section
				id="how-it-works"
				className="bg-white text-gray-900  px-6 md:px-12 py-20">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
					<p className="text-lg text-gray-600  mb-12 max-w-2xl mx-auto">
						Getting started with Tradozz is quick and effortless. In just 3
						steps, you’re ready to grow your investments stress-free.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{/* Step 1 */}
						<div className="flex flex-col items-center text-center gap-4">
							<div className="bg-green-700  p-4 rounded-full">
								<span className="text-3xl">📝</span>
							</div>
							<h3 className="text-xl font-semibold">Sign Up</h3>
							<p className="text-gray-600 ">
								Create your free Tradozz account in just a few clicks. It’s
								fast, secure, and hassle-free.
							</p>
						</div>

						{/* Step 2 */}
						<div className="flex flex-col items-center text-center gap-4">
							<div className="bg-green-700 p-4 rounded-full">
								<span className="text-3xl">💸</span>
							</div>
							<h3 className="text-xl font-semibold">Subscribe</h3>
							<p className="text-gray-600">
								Choose a plan and fund your investment. Our experts start
								trading for you instantly.
							</p>
						</div>

						{/* Step 3 */}
						<div className="flex flex-col items-center text-center gap-4">
							<div className="bg-green-700 p-4 rounded-full">
								<span className="text-3xl">📈</span>
							</div>
							<h3 className="text-xl font-semibold">Track & Earn</h3>
							<p className="text-gray-600 ">
								Monitor your profits anytime from your dashboard while we grow
								your portfolio.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section
				id="pricing"
				className="py-24 px-6 md:px-12 bg-white text-gray-900 transition-colors duration-300">
				<div className="max-w-6xl mx-auto text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">
						Choose Your Investment Stream
					</h2>
					<p className="text-gray-600 text-lg">
						Select a stream and let our expert traders grow your portfolio.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{/* Equity */}
					<div className="border rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:cursor-default">
						<h3 className="text-2xl font-semibold mb-4">Equity</h3>
						<p className="mb-4 text-gray-600">
							Steady growth through stock market investments. Ideal for
							long-term wealth building.
						</p>
						<ul className="text-sm text-gray-500 mb-6 space-y-1">
							<li>✔ Managed stock portfolio</li>
							<li>✔ Regular performance reports</li>
							<li>✔ Lower risk, diversified approach</li>
						</ul>
						<button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition hover:cursor-pointer">
							Subscribe to Equity
						</button>
					</div>

					{/* Commodity */}
					<div className="border rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:cursor-default">
						<h3 className="text-2xl font-semibold mb-4">Commodity</h3>
						<p className="mb-4 text-gray-600">
							Tap into gold, oil, and other assets. Perfect for diversifying
							your portfolio and increase you returns.
						</p>
						<ul className="text-sm text-gray-500 mb-6 space-y-1">
							<li>✔ Expert-managed commodity exposure</li>
							<li>✔ Balanced risk-reward ratio</li>
							<li>✔ Monthly insights and strategies</li>
						</ul>
						<button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition hover:cursor-pointer">
							Subscribe to Commodity
						</button>
					</div>

					{/* Crypto */}
					<div className="border rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 bg-gray-100 opacity-80 hover:cursor-default">
						<h3 className="text-2xl font-semibold mb-4 flex items-center justify-between">
							Crypto
							<span className="text-xs bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-medium">
								Coming Soon
							</span>
						</h3>
						<p className="mb-4 text-gray-600">
							High-growth potential from digital assets. Best for aggressive
							investors.
						</p>
						<ul className="text-sm text-gray-500 mb-6 space-y-1">
							<li>✔ Managed crypto trading</li>
							<li>✔ Daily performance tracking</li>
							<li>✔ Real-time volatility handling</li>
						</ul>
						<button
							disabled
							className="w-full bg-gray-400 text-white font-semibold py-2 rounded-lg cursor-not-allowed"
							title="Coming soon!">
							Coming Soon
						</button>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section id="faq" className="bg-white py-20 px-6 md:px-20">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl text-gray-900 md:text-4xl font-bold text-center mb-12">
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="border border-gray-300 rounded-lg p-4 transition-all shadow-sm">
								<button
									className="w-full text-gray-700 text-left font-semibold text-lg flex justify-between items-center hover:cursor-pointer"
									onClick={() => toggleFAQ(index)}>
									{faq.question}
									<span className="text-gray-500">
										{openIndex === index ? '−' : '+'}
									</span>
								</button>
								{openIndex === index && (
									<p className="mt-3 text-gray-600 transition-all duration-300">
										{faq.answer}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
