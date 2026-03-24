import Link from "next/link";
import { NAV_LINKS } from "./navLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Company Name */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2">شعار الشركة</h2>
                    <p className="text-sm text-gray-500">نقدم أفضل الحلول لعملائنا.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">روابط سريعة</h3>
                    <ul className="flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Placeholder */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">تواصل معنا</h3>
                    <p className="text-sm text-gray-500">info@company.com</p>
                    <p className="text-sm text-gray-500 mt-1">+966 50 000 0000</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-4 text-center">
                <p className="text-xs text-gray-400">
                    © {currentYear} شعار الشركة. جميع الحقوق محفوظة.
                </p>
            </div>
        </footer>
    );
}