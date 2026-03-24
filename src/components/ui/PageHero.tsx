interface PageHeroProps {
    title: string;
    description: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{description}</p>
        </section>
    );
}