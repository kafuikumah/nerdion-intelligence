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
    GitBranch
} from "lucide-react";

const practices = [
    {
        num: "01",
        id: "data-analytics",
        title: "Data Analytics",
        description: "Establishing strong data engineering processes and building indicator platforms to unify fragmented data for reporting and analysis.",
        services: [
            { name: "Data Engineering & Models", icon: Database, text: "Designing interoperable data models that link administrative, geospatial, and economic source registers." },
            { name: "Analytics & Visualisation", icon: BarChart3, text: "Developing interactive dashboards and intelligence layers to present operational and outcome data clearly." },
            { name: "Indicator Systems", icon: CheckCircle2, text: "Building robust, standardized indicator tracking repositories to measure program objectives and developmental goals." },
            { name: "Workflow Automation", icon: Settings, text: "Automating reporting workflows to eliminate manual spreadsheet accumulation and improve data timeliness." },
        ]
    },
    {
        num: "02",
        id: "health",
        title: "Health",
        description: "Transforming health sector data into decision-support systems for expenditure tracking, facility performance, and financing analytics.",
        services: [
            { name: "Health Financing & Expenditures", icon: Coins, text: "Tracking health sector funding flows and expenditures against program objectives and institutional targets." },
            { name: "Performance Intelligence", icon: Activity, text: "Consolidating health facility-level outputs and performance indicators into centralized monitoring systems." },
            { name: "Scenario & Projection Tooling", icon: GitBranch, text: "Modeling resources and capacity allocations under different policy scenarios and disease profiles." },
            { name: "Facility Monitoring & Targeting", icon: Map, text: "Using geospatial and facility data to target medical interventions and structural resource delivery." },
        ]
    },
    {
        num: "03",
        id: "agriculture",
        title: "Agriculture",
        description: "Developing custom technology for farmer registries, value-chain delivery tracking, and geospatial agricultural planning.",
        services: [
            { name: "Programme Targeting Tools", icon: CheckCircle2, text: "Using socioeconomic and geographic profiles to target agricultural support and input distribution programs." },
            { name: "Farmer & Value-Chain Delivery", icon: TrendingUp, text: "Building tracking dashboards to follow delivery indicators and farmer adoption across value chains." },
            { name: "Resilience & Risk Analysis", icon: Shield, text: "Assessing climate and market exposure risks to support proactive smallholder resilience programs." },
            { name: "Geospatial Agricultural Intel", icon: Map, text: "Integrating remote sensing, soil models, and yield data to build regional agricultural maps." },
        ]
    },
    {
        num: "04",
        id: "climate",
        title: "Sustainability & Climate",
        description: "Supporting carbon tracking, MRV (Measurement, Reporting, and Verification) systems, and climate finance alignment.",
        services: [
            { name: "NDC Implementation Tracking", icon: CheckCircle2, text: "Designing systems to track national and regional progress toward Nationally Determined Contributions (NDCs)." },
            { name: "MRV Platform Support", icon: FileText, text: "Providing the digital infrastructure needed to measure, report, and verify carbon mitigation activities." },
            { name: "Climate Finance Mapping", icon: Coins, text: "Tracking and categorizing bilateral, multilateral, and private investments toward climate adaptation." },
            { name: "Geospatial Risk & Exposure", icon: Map, text: "Modeling climate exposure hazards, asset risk scores, and vulnerabilities across geographic coordinates." },
        ]
    },
    {
        num: "05",
        id: "finance",
        title: "Finance",
        description: "Building analytics tools for public finance environments, budget execution, and investment pipeline tracking.",
        services: [
            { name: "Public & Development Finance", icon: Coins, text: "Analyzing public revenue allocations, donor commitments, and official development assistance (ODA) trends." },
            { name: "Budget Execution Intelligence", icon: TrendingUp, text: "Comparing budget allocations to actual disbursements and implementation progress to highlight gaps." },
            { name: "Investment Pipeline Tools", icon: GitBranch, text: "Managing development finance pipeline portfolios, from initial screening to disbursement monitoring." },
            { name: "Fiscal & Financing Scenarios", icon: FileText, text: "Modeling development program financing scenarios to optimize fiscal sustainability and outcomes." },
        ]
    }
];

export default function WhatWeDo() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Hero */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
                    <Link href="/" className="hover:text-accent-green">Home</Link>
                    <span>/</span>
                    <span className="text-text-primary">What We Do</span>
                </nav>
                <h1 className="font-display text-6xl lg:text-7xl text-text-primary mb-8 max-w-4xl tracking-tight animate-in">
                    Five practice areas. <br />One unified data foundation.
                </h1>
                <p className="text-xl text-text-secondary max-w-2xl leading-relaxed animate-in stagger-1">
                    Nerdion Systems bridges the gap between software engineering and development practice. We focus on turning fragmented datasets into interoperable administrative and programmatic infrastructure.
                </p>
            </section>

            {/* Practices */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-32">
                {practices.map((practice) => (
                    <div key={practice.id} id={practice.id} className="grid lg:grid-cols-12 gap-16 border-t border-border-warm pt-20 animate-in scroll-mt-24">
                        {/* Left Sticky Column */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                            <p className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.4em] mb-6">{practice.num}</p>
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
                                    <div className="shrink-0 w-12 h-12 bg-accent-green/5 flex items-center justify-center rounded-sm group-hover:bg-accent-green/10 transition-colors">
                                        <service.icon className="w-6 h-6 text-accent-green" />
                                    </div>
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
                    <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Our Delivery Standards</p>
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
