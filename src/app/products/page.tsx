import Image from "next/image";
import Link from "next/link";
import { MOCK_PRODUCTS, CATEGORY_LABELS } from "@/features/products/data/products.mock";

const PAGE_TITLE = { ar: "المنتجات", en: "Products" };
const CALC_LABEL = { ar: "احسب السعر", en: "Calculate Price" };
const SPECS_LABEL = { ar: "تحميل المواصفات", en: "Download Specs" };

export default function ProductsPage() {
    const locale: "ar" | "en" = "ar";

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-10">
                {PAGE_TITLE[locale]}
            </h1>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_PRODUCTS.map((product) => (
                    <div
                        key={product.id}
                        className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden flex flex-col"
                    >
                        {/* Product Image */}
                        <div className="relative w-full h-48">
                            <Image
                                src={product.image}
                                alt={product.name[locale]}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Card Body */}
                        <div className="flex flex-col gap-3 p-6 flex-1">

                            {/* Category Badge */}
                            <span className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full w-fit">
                                {CATEGORY_LABELS[product.category][locale]}
                            </span>

                            {/* Product Name */}
                            <h2 className="text-lg font-bold text-gray-900">
                                {product.name[locale]}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                {product.description[locale]}
                            </p>

                            {/* Divider */}
                            <div className="border-t border-gray-100 pt-4 mt-2 flex gap-3">

                                {/* Primary: Calculate Price */}
                                <Link
                                    href={`/calculator?product=${product.id}`}
                                    className="flex-1 text-center text-sm font-semibold bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700 transition-colors"
                                >
                                    {CALC_LABEL[locale]}
                                </Link>

                                {/* Secondary: Download Specs */}
                                <button
                                    className="flex-1 text-center text-sm font-semibold border border-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
                                >
                                    {SPECS_LABEL[locale]}
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}