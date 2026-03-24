export type ProductCategory = "rebar" | "sheet" | "pipe" | "beam" | "coil";

export interface Product {
    id: string;
    name: string;
    category: ProductCategory;
    pricePerTon: number;
    thickness: number | null;
    length: number | null;
    description: string;
}