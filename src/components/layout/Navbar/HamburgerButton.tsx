interface HamburgerButtonProps {
    isOpen: boolean;
    onToggle: () => void;
}

export default function HamburgerButton({ isOpen, onToggle }: HamburgerButtonProps) {
    return (
        <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={onToggle}
            aria-label="toggle menu"
        >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
    );
}