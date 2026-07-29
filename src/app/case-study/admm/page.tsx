"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Shield, Coins, BarChart3, Database } from "lucide-react";

export default function ADMMCaseStudy() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Hero / Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/our-work" className="hover:text-accent-green transition-colors">Our Work</Link>
                    <span>/</span>
                    <span className="text-text-primary">ADMM</span>
                </nav>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 animate-in">
                    <div className="max-w-4xl">
                        <p className="font-mono text-accent-green text-xs uppercase mb-4">Case Study: Public Finance & Debt</p>
                        <h1 className="font-display text-5xl lg:text-7xl text-text-primary tracking-tight leading-tight">
                            African Debt Monitoring Mechanism (ADMM).
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-3 border border-border-warm rounded-sm hover:border-accent-green transition-colors">
                            <Share2 className="w-4 h-4 text-text-secondary" />
                        </button>
                    </div>
                </div>

                {/* Metric Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-white border border-border-warm shadow-sm animate-in stagger-1">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                            <Coins className="w-5 h-5 text-accent-gold" />
                        </div>
                        <div>
                            <p className="font-display text-2xl text-text-primary font-bold">55 AU Member States</p>
                            <p className="text-[10px] text-text-secondary font-mono uppercase">Macro-Surveillance</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 md:border-l border-border-warm md:pl-8">
                        <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                            <Database className="w-5 h-5 text-accent-green" />
                        </div>
                        <div>
                            <p className="font-display text-2xl text-text-primary font-bold">Data Sovereignty</p>
                            <p className="text-[10px] text-text-secondary font-mono uppercase">African-owned Narrative</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 md:border-l border-border-warm md:pl-8">
                        <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                            <Shield className="w-5 h-5 text-accent-gold" />
                        </div>
                        <div>
                            <p className="font-display text-2xl text-text-primary font-bold">Early Warning</p>
                            <p className="text-[10px] text-text-secondary font-mono uppercase">Risk Mitigation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 animate-in stagger-2">
                    <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed">
                        <h3 className="font-display text-3xl text-text-primary mb-8">The Challenge</h3>
                        <p className="mb-8">
                            African government debt reached an average of 61% of GDP in 2024, leaving 22 countries in or at high risk of debt distress. With the changing composition of debt—moving away from traditional Paris Club members to commercial loans, Eurobonds, and opaque bilateral terms—restructuring negotiations have become slow and fragmented. 
                        </p>
                        <p className="mb-8">
                            Before the ADMM, African ministries depended on external databases (such as those maintained by the IMF and World Bank) to analyze and justify their own debt portfolios. This created a structural data dependency, leaving African nations at an informational disadvantage during multi-creditor restructurings and global rating assessments.
                        </p>

                        <h3 className="font-display text-3xl text-text-primary mb-8 mt-16">The Solution</h3>
                        <p className="mb-8">
                            In response to AU Executive Council Decision EX.CL/Dec.1147(XL) and the Africa Data Consensus, Nerdion Systems co-designed and engineered the virtual African Debt Monitoring Mechanism (ADMM) platform. Developed for the Economic Development Department of the African Union Commission, the system acts as a centralized sovereign reference registry.
                        </p>
                        <p className="mb-8">
                            The platform features a secure, multi-tenant portal for Member State focal points to submit official data, integrated logic checks to validate reporting consistency, and a public-facing dashboard. It harmonizes key statistics (such as debt-service-to-revenue ratios and contingent liabilities) across shared definitions, providing a unified Common African Position on Debt.
                        </p>

                        <h3 className="font-display text-3xl text-text-primary mb-8 mt-16">The Impact</h3>
                        <p className="mb-8">
                            The ADMM has significantly strengthened Africa's data sovereignty and collective bargaining power. By providing debt management offices with real-time projections and scenario-modeling indicators, the mechanism allows sovereign negotiators to coordinate restructuring processes on equal footing with external private and public creditors. Furthermore, it tracks national progress towards AU commitments like the Lomé Declaration on Debt, bringing transparency to previously opaque liabilities.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-4 animate-in stagger-3">
                    <div className="bg-white border border-border-warm p-10 sticky top-32">
                        <h4 className="font-mono text-[10px] text-text-secondary uppercase mb-10 border-b border-border-warm pb-4">
                            Project Details
                        </h4>

                        <div className="space-y-8">
                            <div>
                                <p className="text-[10px] text-text-secondary font-mono uppercase mb-1">Client</p>
                                <p className="text-sm font-semibold text-text-primary">Economic Development Department, African Union Commission (AUC)</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-text-secondary font-mono uppercase mb-1">Scope</p>
                                <p className="text-sm font-semibold text-text-primary">55 African Union Member States</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-text-secondary font-mono uppercase mb-1">Services</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Public Finance Analytics", "Risk Surveillance Systems", "Debt Indicator Registry", "Capacity Transfer"].map(s => (
                                        <span key={s} className="px-3 py-1 bg-hover text-[10px] font-mono text-text-secondary rounded-sm">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-text-secondary font-mono uppercase mb-1">Technology & Governance</p>
                                <ul className="text-sm font-medium text-text-primary space-y-1 mt-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> AU Data Policy Framework Compliant</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Secure Data Ingestion</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Scenario & Risk Modeling Engines</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-10 border-t border-border-warm">
                            <Link href="/contact" className="w-full py-4 bg-accent-green text-white text-center rounded-sm font-medium block hover:bg-accent-green/90 transition-all text-sm">
                                Discuss Public Finance Systems
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-24">
                <Link href="/our-work" className="inline-flex items-center gap-3 text-text-secondary hover:text-accent-green font-mono text-xs uppercase transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to All Case Studies
                </Link>
            </section>
        </div>
    );
}
