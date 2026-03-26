export type ProductCategory =
    | "rebar"
    | "billet"
    | "rails"
    | "cold_coil"
    | "hot_coil"
    | "galvanized_coil";

export interface LocalizedString {
    ar: string;
    en: string;
}

export interface Product {
    id: string;
    name: LocalizedString;
    category: ProductCategory;
    pricePerTon: number;
    description: LocalizedString;
    image: string;
}