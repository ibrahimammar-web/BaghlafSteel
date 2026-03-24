"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../navLinks";
import { isLinkActive } from "./navUtils";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const activeClass = "text-red-600 font-bold";
const inactiveClass = "text-gray-700 hover:text-gray-900";

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();

    if (!isOpen) return null;

    return (
        <nav className="md:hidden border-t border-gray-100 px-4 py-3 flex flex-col gap-3 bg-white">
            {NAV_LINKS.map((link) => {
                const isActive = isLinkActive(pathname, link.href);
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm transition-colors py-1 ${isActive ? activeClass : inactiveClass}`}
                        onClick={onClose}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}