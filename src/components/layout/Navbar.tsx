"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./navLinks";
import { isLinkActive } from "./Navbar/navUtils";

const activeClass = "text-red-600 font-bold border-b-2 border-red-600 pb-0.5";
const inactiveClass = "text-gray-600 hover:text-gray-900";

const activeMobileClass = "text-red-600 font-bold";
const inactiveMobileClass = "text-gray-700 hover:text-gray-900";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-gray-900">
                    شعار
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => {
                        const isActive = isLinkActive(pathname, link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-colors ${isActive ? activeClass : inactiveClass}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Language Switch + Hamburger */}
                <div className="flex items-center gap-3">
                    <button className="text-sm font-medium border border-gray-300 rounded-md px-3 py-1.5 text-gray-700 hover:bg-gray-50 transition-colors">
                        EN
                    </button>

                    <button
                        className="md:hidden flex flex-col gap-1.5 p-1"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-gray-100 px-4 py-3 flex flex-col gap-3 bg-white">
                    {NAV_LINKS.map((link) => {
                        const isActive = isLinkActive(pathname, link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-colors py-1 ${isActive ? activeMobileClass : inactiveMobileClass}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            )}
        </header>
    );
}