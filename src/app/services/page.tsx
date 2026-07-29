"use client";

import Link from "next/link";
import {
    ArrowRight,
    Database,
    Activity,
    Sprout,
    Globe,
    Coins,
    CheckCircle2,
    Map,
    BarChart3,
    TrendingUp,
    Shield,
    FileText,
    Settings,
    GitBranch,
    Code2,
    BrainCircuit,
    LineChart,
    Smartphone,
    Layout,
    PenTool,
    Server,
    Eye,
    Star,
    Bot,
    PieChart,
    Network,
    Target,
    Search
} from "lucide-react";
import { GlassmorphicIcon } from "@/components/GlassmorphicIcon";

const practices = [
    {
        num: "01",
        id: "product-engineering",
        title: "Product Engineering & Design",
        description: "Production software engineered across every layer of the stack - frontend, backend, infrastructure, and design - by the same senior team from architecture through deployment.",
        services: [
            { name: "Mobile App Development", icon: Smartphone, text: "Native and cross-platform mobile applications engineered for performance, scalability, and long-term maintainability." },
            { name: "Web App Development", icon: Layout, text: "Full-stack web applications optimized for speed, accessibility, and production-grade reliability." },
            { name: "UI/UX Design", icon: PenTool, text: "Research-driven design that translates business objectives into clear, intuitive interfaces." },
            { name: "Backend & Infrastructure", icon: Server, text: "High-performance APIs, service architectures, and cloud infrastructure engineered for reliability and growth." },
        ]
    },
    {
        num: "02",
        id: "ml-ai",
        title: "Machine Learning & AI Systems",
        description: "Production ML systems from founders with standing in the field, their research peer-reviewed and their methods patented. Every model ships with monitoring, retraining infrastructure, and measurable business outcomes defined before the first experiment runs.",
        services: [
            { name: "Predictive Analytics", icon: LineChart, text: "ML pipelines that convert historical data into reliable forecasts your team can trust and act on." },
            { name: "Computer Vision Systems", icon: Eye, text: "Image and video analysis pipelines for detection, classification, and segmentation at production scale." },
            { name: "Recommendation Systems", icon: Star, text: "Personalization engines built on collaborative filtering, content-based models, and hybrid approaches." },
            { name: "AI Agents & Automation", icon: Bot, text: "Custom agent systems and automation workflows powered by large language models for complex, multi-step tasks." },
        ]
    },
    {
        num: "03",
        id: "data-engineering",
        title: "Data Engineering & Analytics",
        description: "Algorithmic builds data platforms, analytics systems, and infrastructure end-to-end - architecture, pipelines, analytics, dashboards - with one senior team that owns the entire system.",
        services: [
            { name: "Data Analytics & Business Intelligence", icon: PieChart, text: "Analytics infrastructure and dashboards that give your organization a single source of truth for every decision." },
            { name: "Data Infrastructure & Integrations", icon: Network, text: "Resilient data systems engineered for throughput - ingestion, streaming, orchestration, and cross-system synchronization." },
        ]
    },
    {
        num: "04",
        id: "strategy",
        title: "Strategy & Advisory",
        description: "Technical certainty is a prerequisite for capital deployment. Our advisory practice is led by the same senior engineers who ship our production systems, offering a builder-first perspective on your roadmap grounded in what we have delivered. For teams that need ongoing technical leadership, we also offer embedded advisory and fractional CTO engagements.",
        services: [
            { name: "AI Readiness Assessment", icon: Target, text: "A structured evaluation of your data, infrastructure, and team to determine where AI will deliver measurable returns." },
            { name: "Feasibility Studies", icon: Search, text: "Technical assessments that validate your product hypothesis before you commit capital." },
            { name: "Technical Due Diligence", icon: FileText, text: "Independent technical assessments that give investors, acquirers, and founders an honest verdict on a codebase before capital changes hands." },
        ]
    }
];

export default function WhatWeDo() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Hero */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end px-6 lg:px-12 py-16 lg:py-24 bg-cover bg-center mb-16 lg:mb-24" style={{ backgroundImage: "url('/hero_services.png')" }}>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full flex flex-col justify-end">
                    <div>
                        <nav className="flex gap-2 text-xs font-mono text-gray-300 uppercase mb-8">
                            <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Services</span>
                        </nav>
                        <h1 className="font-display text-5xl lg:text-7xl text-white mb-6 max-w-4xl tracking-tight animate-in">
                            Rigorous engineering for complex sectors.
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed animate-in stagger-1 pb-12">
                            We don&apos;t just advise; we engineer. Our practices merge deep sector expertise with production-grade software engineering to solve systemic challenges.
                        </p>
                    </div>

                    <div className="mt-auto">
                        <p className="font-display text-xl lg:text-2xl text-white/90">A small team. Serious engineering.</p>
                    </div>
                </div>
            </section>

            {/* Practices */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-32">
                {practices.map((practice) => (
                    <div key={practice.id} id={practice.id} className="grid lg:grid-cols-12 gap-16 border-t border-border-warm pt-20 animate-in scroll-mt-24">
                        {/* Left Sticky Column */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                            <p className="font-mono text-[10px] text-text-secondary uppercase mb-6">{practice.num}</p>
                            <h2 className="font-display text-4xl text-text-primary mb-6">{practice.title}</h2>
                            <p className="text-text-secondary mb-10 leading-relaxed max-w-md text-base">
                                {practice.description}
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-accent-green font-semibold hover:gap-3 transition-all">
                                Consult on {practice.title} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Right Content Column */}
                        <div className="lg:col-span-7 space-y-4">
                            {practice.services.map((service, sIdx) => (
                                <div key={sIdx} className="bg-white border border-border-warm p-8 lg:p-10 group hover:border-accent-green transition-all flex gap-8 items-start">
                                    <GlassmorphicIcon icon={service.icon} size="md" />
                                    <div>
                                        <h3 className="font-display text-2xl text-text-primary mb-3 group-hover:text-accent-green transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-text-secondary leading-relaxed text-sm">
                                            {service.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Delivery Infrastructure Detail */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-32 mt-32 border-t border-border-warm animate-in">
                <div className="mb-20">
                    <p className="font-mono text-[10px] text-accent-green uppercase mb-4">Our Delivery Standards</p>
                    <h2 className="font-display text-5xl lg:text-6xl text-text-primary mb-6">How we guarantee system viability</h2>
                    <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
                        Technology in development contexts succeeds only when it accommodates localized network limits, guarantees auditability, and transitions capacity to stakeholders.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Governed Data Foundation",
                            desc: "Unifying administrative records requires rigorous data curation. We design clean ingestion pipelines, format metadata dictionaries, and enforce access controls to safeguard data integrity and secure compliance."
                        },
                        {
                            title: "Auditability & Provenance",
                            desc: "We ensure all data transformations can be audited. Development finance partners require verifiable metrics; hence we build systems with strict version control, full data lineage tracking, and explicit parameter mappings."
                        },
                        {
                            title: "Decision-Ready Interface Layouts",
                            desc: "Dashboards must guide action rather than overwhelm. We design tailored user interfaces that highlight key performance metrics, facilitate planning scenario exploration, and compile automatic reporting packets."
                        },
                        {
                            title: "System Handover & Sustainability",
                            desc: "We ensure capacity is transferred. Nerdion provides detailed documentation, developer onboarding workshops, and operational support to make certain systems run smoothly long after project closure."
                        }
                    ].map((model, idx) => (
                        <div key={idx} className="bg-white border border-border-warm p-12 hover:border-accent-green transition-all duration-300">
                            <h3 className="font-display text-2xl text-text-primary mb-4">{model.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{model.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
