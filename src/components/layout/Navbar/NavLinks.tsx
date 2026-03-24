"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../navLinks";
import { isLinkActive } from "./navUtils";

const activeClass = "text-red-600 font-bold border-b-2 border-red-600 pb-0.5";
const inactiveClass = "text-gray-600 hover:text-gray-900";

export default function NavLinks() {
    const pathname = usePathname();
    const activeClass = "nav-active";
    const inactiveClass = "nav-inactive";

    return (
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
    );
}