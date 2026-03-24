export interface NavLink {
    label: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "المنتجات", href: "/products" },
    { label: "الحاسبة", href: "/calculator" },
    { label: "الفروع", href: "/branches" },
    { label: "تواصل معنا", href: "/contact" },
];