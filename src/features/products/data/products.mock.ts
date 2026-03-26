import { Product, ProductCategory } from "../types/product";
import { LocalizedString } from "../types/product";

export const MOCK_PRODUCTS: Product[] = [
    {
        id: "prod-001",
        name: { ar: "حديد التسليح", en: "Rebar Steel" },
        category: "rebar",
        pricePerTon: 3200,
        image: "https://placehold.co/600x400?text=Rebar+Steel",
        description: {
            ar: "قضبان تسليح فولاذية عالية الجودة مطابقة للمواصفات السعودية SASO، مصممة للاستخدام في الخرسانة المسلحة والمشاريع الإنشائية السكنية والتجارية والبنية التحتية.",
            en: "High-grade deformed steel rebars compliant with SASO standards, engineered for reinforced concrete applications across residential, commercial, and infrastructure projects.",
        },
    },
    {
        id: "prod-002",
        name: { ar: "حديد البليت", en: "Steel Billet" },
        category: "billet",
        pricePerTon: 2950,
        image: "https://placehold.co/600x400?text=Steel+Billet",
        description: {
            ar: "بيليت فولاذي نصف مصنّع يُستخدم كمادة خام في التصنيع الصناعي وإنتاج قضبان التسليح والمقاطع الفولاذية. مناسب للمصانع ومشاريع إعادة التدوير.",
            en: "Semi-finished steel billets used as raw material for industrial manufacturing, including rebar production, structural sections, and steel rolling mills.",
        },
    },
    {
        id: "prod-003",
        name: { ar: "قضبان سكك حديدية درجة ثانية R50/R65", en: "Second Quality Rails R50/R65" },
        category: "rails",
        pricePerTon: 2800,
        image: "https://placehold.co/600x400?text=Rails+R50/R65",
        description: {
            ar: "قضبان سكك حديدية من الدرجة الثانية بمقاسي R50 وR65، مناسبة للاستخدامات الصناعية الداخلية وخطوط النقل الخفيف ومشاريع إعادة التدوير والتصنيع.",
            en: "Second quality steel rails in R50 and R65 profiles, suitable for industrial trackwork, light-duty transportation lines, recycling operations, and secondary manufacturing use.",
        },
    },
    {
        id: "prod-004",
        name: { ar: "لفائف مدرفلة على البارد", en: "Cold Rolled Coils" },
        category: "cold_coil",
        pricePerTon: 4100,
        image: "https://placehold.co/600x400?text=Cold+Rolled+Coils",
        description: {
            ar: "لفائف فولاذية مدرفلة على البارد ذات سطح أملس ودقة عالية في السماكة، تُستخدم في صناعة السيارات والأجهزة الكهربائية والتصنيع الدقيق.",
            en: "Cold rolled steel coils with a smooth surface finish and precise thickness tolerances, widely used in automotive manufacturing, home appliances, electrical equipment, and precision fabrication.",
        },
    },
    {
        id: "prod-005",
        name: { ar: "لفائف مدرفلة على الساخن", en: "Hot Rolled Coils" },
        category: "hot_coil",
        pricePerTon: 3600,
        image: "https://placehold.co/600x400?text=Hot+Rolled+Coils",
        description: {
            ar: "لفائف فولاذية مدرفلة على الساخن تتميز بمرونة عالية وقابلية للتشكيل، تُستخدم في الإنشاءات الصناعية وتصنيع الأنابيب والهياكل الفولاذية الثقيلة.",
            en: "Hot rolled steel coils offering high formability and structural strength, used in industrial construction, pipe manufacturing, heavy steel fabrication, and structural applications.",
        },
    },
    {
        id: "prod-006",
        name: { ar: "لفائف مجلفنة", en: "Galvanized Rolled Coils" },
        category: "galvanized_coil",
        pricePerTon: 4500,
        image: "https://placehold.co/600x400?text=Galvanized+Coils",
        description: {
            ar: "لفائف فولاذية مطلية بطبقة من الزنك لتوفير حماية فائقة من الصدأ والتآكل، تُستخدم في أنظمة التغليف المعماري والأسقف والبنية التحتية الخارجية.",
            en: "Zinc-coated galvanized steel coils providing superior corrosion and rust resistance, ideal for roofing systems, architectural cladding, outdoor infrastructure, and light structural applications.",
        },
    },
];

export const CATEGORY_LABELS: Record<string, LocalizedString> = {
    rebar: { ar: "حديد تسليح", en: "Rebar Steel" },
    billet: { ar: "حديد البليت", en: "Steel Billet" },
    rails: { ar: "قضبان سكك حديدية", en: "Rails" },
    cold_coil: { ar: "لفائف بارد", en: "Cold Rolled Coils" },
    hot_coil: { ar: "لفائف ساخن", en: "Hot Rolled Coils" },
    galvanized_coil: { ar: "لفائف مجلفنة", en: "Galvanized Coils" },
};