'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="bg-white dark:bg-gray-900 px-6 md:px-12 py-4 text-gray-900 dark:text-white flex justify-between items-center sticky top-0 z-50 shadow-md">
			<Link href="/" className="font-bold text-2xl tracking-wide">
				Tradozz
			</Link>

			{/* Hamburger Icon */}
			<button
				className="md:hidden text-gray-800 dark:text-white"
				onClick={() => setMenuOpen(!menuOpen)}>
				{menuOpen ? <X size={28} /> : <Menu size={28} />}
			</button>

			{/* Desktop Menu */}
			<nav className="hidden md:flex items-center gap-8">
				<NavLinks />
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 px-6 py-4 shadow-lg flex flex-col gap-4 md:hidden">
					<NavLinks />
				</div>
			)}
		</header>
	);
}

// Extracted links into a component to avoid repetition
function NavLinks() {
	return (
		<>
			<Link
				href="/"
				className="hover:scale-105 transition-transform duration-100">
				Home
			</Link>
			<Link
				href="#how-it-works"
				className="hover:scale-105 transition-transform duration-100">
				How it works
			</Link>
			<Link
				href="#pricing"
				className="hover:scale-105 transition-transform duration-100">
				Pricing
			</Link>
			<Link
				href="#faq"
				className="hover:scale-105 transition-transform duration-100">
				FAQ
			</Link>
			<Link
				href="/login"
				className="bg-green-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-800 transition-colors duration-150 w-fit">
				Login / Register
			</Link>
		</>
	);
}
