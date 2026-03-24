"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./HamburgerButton";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                <Link href="/" className="text-xl font-bold text-gray-900">
                    شعار
                </Link>

                {/* ✅ Use NavLinks component instead of hardcoded map */}
                <NavLinks />

                <div className="flex items-center gap-3">
                    <LanguageSwitch />
                    <HamburgerButton
                        isOpen={isMenuOpen}
                        onToggle={() => setIsMenuOpen((prev) => !prev)}
                    />
                </div>
            </div>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    );
}