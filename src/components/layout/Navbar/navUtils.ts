export function isLinkActive(pathname: string, href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
}