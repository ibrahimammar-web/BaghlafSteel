export function formatPrice(pricePerTon: number, currency = "SAR"): string {
    return new Intl.NumberFormat("ar-SA", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(pricePerTon);
}

export function formatDimensions(
    thickness: number | null,
    length: number | null
): string {
    if (!thickness && !length) return "—";
    if (!thickness) return `طول: ${length} م`;
    if (!length) return `سماكة: ${thickness} مم`;
    return `سماكة: ${thickness} مم | طول: ${length} م`;
}