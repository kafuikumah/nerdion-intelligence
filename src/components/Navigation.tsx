"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "HOW WE WORK", href: "/how-we-work" },
    { label: "WORKS", href: "/our-work" },
    {
        label: "RESOURCES",
        href: "/insights",
        megaMenu: [
            { title: "AI READINESS TEST", description: "Evaluate your organization's readiness for AI transformation", href: "/resources/ai-readiness" },
            { title: "INSIGHTS", description: "Technical writing on engineering, ML, and data systems", href: "/insights" },
            { title: "REPORTS", description: "Deep-dive reports, impact analyses, and industry findings", href: "/resources/reports" },
            { title: "IMPACTCOMPASS", description: "Positioning tool to secure deals, grants, and funding", href: "/resources/positioning-tool" },
            { title: "ATLAS BY NERDION", description: "Advanced Transparency, Learning & Accountability System", href: "/resources/atlas" },
        ]
    },
    { label: "CONTACT", href: "/contact" }
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMega, setActiveMega] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-sm border-b border-border-warm py-4" : "py-6"
                }`}
        >
            <nav className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/nerdion_logo.png"
                        alt="Nerdion Systems"
                        width={180}
                        height={40}
                        className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navItems.map((item, idx) => (
                        <div
                            key={item.label}
                            className="relative group py-6"
                            onMouseEnter={() => setActiveMega(idx)}
                            onMouseLeave={() => setActiveMega(null)}
                        >
                            <Link
                                href={item.href}
                                className={`flex items-center gap-1.5 text-[12px] tracking-wide font-medium transition-colors ${activeMega === idx ? "text-gray-400" : "text-text-primary hover:text-gray-600"}`}
                            >
                                {item.label}
                                {item.megaMenu && (
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMega === idx ? "rotate-180" : ""}`} />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {item.megaMenu && (
                                <div
                                    className={`absolute top-full right-0 w-[420px] bg-white border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-200 origin-top overflow-hidden rounded-sm ${activeMega === idx ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                        }`}
                                >
                                    <div className="flex flex-col">
                                        {item.megaMenu.map((sub, i) => (
                                            <Link
                                                key={sub.title}
                                                href={sub.href}
                                                className={`block px-8 py-6 group/item ${i !== item.megaMenu.length - 1 ? 'border-b border-gray-100' : ''}`}
                                            >
                                                <div className="inline-block relative mb-1.5">
                                                    <h4 className="text-[13px] font-semibold text-text-primary uppercase group-hover/item:text-accent-green transition-colors">
                                                        {sub.title}
                                                    </h4>
                                                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-accent-green transition-all duration-300 group-hover/item:w-full"></span>
                                                </div>
                                                <p className="text-[13px] text-gray-500 leading-snug">
                                                    {sub.description}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-text-primary p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-[73px] bg-white z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col p-8 gap-6 h-full overflow-y-auto">
                    {navItems.map((item) => (
                        <div key={item.label} className="border-b border-border-warm pb-4">
                            <Link
                                href={item.href}
                                className="text-2xl font-display text-text-primary mb-4 block uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                            {item.megaMenu && (
                                <div className="grid grid-cols-1 gap-4 pl-4">
                                    {item.megaMenu.map((sub) => (
                                        <Link
                                            key={sub.title}
                                            href={sub.href}
                                            className="block"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <h4 className="text-sm font-semibold text-text-primary uppercase mb-1">{sub.title}</h4>
                                            <p className="text-xs text-text-secondary">{sub.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}

