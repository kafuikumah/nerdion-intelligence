"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Data Analytics", "Health", "Agriculture", "Sustainability & Climate", "Finance"];

const caseStudies = [
    {
        client: "African Renaissance Trust (ART)",
        title: "Health Financing Insights Dashboard",
        description: "Interactive analytics platform mapping domestic resources, benchmarking sovereign performances, and tracking ALM/Abuja declaration targets across 55 African nations.",
        category: "Health",
        outcome: "Sovereign benchmarking matrix",
        href: "/case-study/health-financing-dashboard",
        featured: true
    },
    {
        client: "African Union Commission (AUC)",
        title: "African Debt Monitoring Mechanism (ADMM)",
        description: "A continental reference registry for public finance macro-surveillance and risk early warning of public external and domestic liabilities across 55 Member States.",
        category: "Finance",
        outcome: "Macro surveillance registry",
        href: "/case-study/admm",
        featured: false
    }
];

export default function OurWork() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredStudies = activeFilter === "All"
        ? caseStudies
        : caseStudies.filter(s => s.category === activeFilter);

    const featured = filteredStudies.find(s => s.featured) || filteredStudies[0];
    const remaining = filteredStudies.filter(s => s !== featured);

    return (
        <div className="bg-background min-h-screen pb-24 lg:pb-32">
            {/* Hero */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end px-6 lg:px-12 py-16 lg:py-24 bg-cover bg-center mb-16 lg:mb-24" style={{ backgroundImage: "url('/hero_works.png')" }}>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full flex flex-col justify-end">
                    <div>
                        <nav className="flex gap-2 text-xs font-mono text-gray-300 uppercase mb-8">
                            <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Our Work</span>
                        </nav>
                        <h1 className="font-display text-5xl lg:text-7xl text-white mb-6 max-w-4xl tracking-tight animate-in">
                            Proven outcomes for a world in transition.
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed animate-in stagger-1 pb-12">
                            Explore our practice through the organizations we serve and the digital systems we&apos;ve built to drive global impact.
                        </p>
                    </div>

                    <div className="mt-auto">
                        <p className="font-display text-xl lg:text-2xl text-white/90">A small team. Serious engineering.</p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 overflow-x-auto">
                <div className="flex gap-8 border-b border-border-warm pb-4 min-w-max">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`text-sm font-medium transition-all relative ${activeFilter === cat ? "text-accent-green" : "text-text-secondary hover:text-text-primary"
                                }`}
                        >
                            {cat}
                            {activeFilter === cat && (
                                <div className="absolute top-[2.4rem] left-0 right-0 h-[2px] bg-accent-green"></div>
                            )}
                        </button>
                    ))}
                </div>
            </section>

            {/* Case Study Grid */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-8">
                    {/* Large Featured Card */}
                    {featured && (
                        <Link href={featured.href} className="group bg-white border border-border-warm hover:border-accent-green transition-all animate-in">
                            <div className="grid lg:grid-cols-2">
                                <div className="p-10 lg:p-16 flex flex-col justify-center">
                                    <p className="font-mono text-[10px] text-accent-green uppercase mb-4 group-hover: transition-all">
                                        {featured.client}
                                    </p>
                                    <h3 className="font-display text-4xl lg:text-5xl text-text-primary mb-6 group-hover:text-accent-green transition-colors">
                                        {featured.title}
                                    </h3>
                                    <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                                        {featured.description}
                                    </p>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-hover text-[10px] font-mono text-text-secondary rounded-full">
                                            {featured.category}
                                        </span>
                                        <div className="px-4 py-2 bg-accent-gold text-white text-xs font-mono rounded-sm">
                                            {featured.outcome}
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-2 text-accent-green text-sm font-semibold pt-4">
                                        View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                                <div className="bg-hover/30 p-12 lg:p-24 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                                    <div className="w-full aspect-square bg-white border border-border-warm shadow-md flex items-center justify-center">
                                        <div className="w-1/2 h-1/2 border-2 border-accent-green border-dashed rounded-full animate-[spin_20s_linear_infinite]"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Smaller Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {remaining.map((study, idx) => (
                            <Link
                                key={idx}
                                href={study.href}
                                className="group bg-white border border-border-warm p-10 hover:border-accent-green transition-all animate-in"
                                style={{ animationDelay: `${0.1 * idx}s` }}
                            >
                                <p className="font-mono text-[10px] text-accent-green uppercase mb-4 group-hover: transition-all">
                                    {study.client}
                                </p>
                                <h3 className="font-display text-2xl text-text-primary mb-4 group-hover:text-accent-green transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed mb-8">
                                    {study.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 bg-hover text-[10px] font-mono text-text-secondary rounded-full">
                                        {study.category}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center group/link">
                                    <div className="px-3 py-1 bg-accent-gold/10 text-accent-gold text-[10px] font-mono rounded-sm font-semibold border border-accent-gold/20">
                                        {study.outcome}
                                    </div>
                                    <span className="text-xs font-mono text-accent-green group-hover/link:underline">
                                        Explore →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
