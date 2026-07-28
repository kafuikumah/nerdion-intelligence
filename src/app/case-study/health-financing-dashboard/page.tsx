"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Activity, Globe, Scale, Heart } from "lucide-react";

export default function HealthFinancingDashboardCaseStudy() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Hero / Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/our-work" className="hover:text-accent-green transition-colors">Our Work</Link>
                    <span>/</span>
                    <span className="text-text-primary">Health Financing Dashboard</span>
                </nav>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 animate-in">
                    <div className="max-w-4xl">
                        <p className="font-mono text-accent-green text-xs uppercase tracking-[0.3em] mb-4">Case Study: Health Sector Systems</p>
                        <h1 className="font-display text-5xl lg:text-7xl text-text-primary tracking-tight leading-tight">
                            Health Financing Insights Dashboard.
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
                            <Globe className="w-5 h-5 text-accent-gold" />
                        </div>
                        <div>
                            <p className="font-display text-2xl text-text-primary font-bold">55 AU Member States</p>
                            <p className="text-[10px] text-text-secondary font-mono uppercase tracking-widest">Sovereign Benchmarking</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 md:border-l border-border-warm md:pl-8">
                        <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                            <Activity className="w-5 h-5 text-accent-green" />
                        </div>
                        <div>
                            <p className="font-display text-2xl text-text-primary font-bold">6 Analytics Modules</p>
                            <p className="text-[10px] text-text-secondary font-mono uppercase tracking-widest">Multi-Tier Insights</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 md:border-l border-border-warm md:pl-8">
                        <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                            <Scale className="w-5 h-5 text-accent-gold" />
                        </div>
                        <div>
                            <p className="font-display text-2xl text-text-primary font-bold">Policy Aligned</p>
                            <p className="text-[10px] text-text-secondary font-mono uppercase tracking-widest">ALM & Abuja Targets</p>
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
                            A healthy Africa is not only a moral imperative, but the foundation for continental prosperity and resilience. However, tracking healthcare spending and efficiency has historically been a massive challenge. African Union declarations (such as the 15% Abuja target, the Africa Scorecard on Health Financing, and the ALM Declaration on Domestic Resource Mobilization) specify clear objectives, but national health ministries often lack the datasets and analytical tools to measure how domestic government spending, out-of-pocket expenses, and donor assistance actually impact health outcomes.
                        </p>

                        <h3 className="font-display text-3xl text-text-primary mb-8 mt-16">The Solution</h3>
                        <p className="mb-8">
                            Nerdion Systems, in close collaboration with the African Renaissance Trust, developed the Health Financing Insights Africa platform (<a href="https://dashboard.the-african-renaissance.org/" target="_blank" rel="noopener noreferrer" className="text-accent-green underline">dashboard.the-african-renaissance.org</a>). The system is a specialized analytics tool designed to track, visualize, and benchmark health financing data across all 55 African Union Member States.
                        </p>
                        <p className="mb-8">
                            The platform delivers a multi-tier dashboard containing several components:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 mb-8">
                            <li><strong>Continental Map Explorer:</strong> Offers an overview of health expenditure per capita to isolate funding gaps.</li>
                            <li><strong>Isolated Benchmarking Profiles:</strong> Allows users to evaluate a chosen country against peer economic groups.</li>
                            <li><strong>Direct Comparison Matrices:</strong> Facilitates side-by-side analysis of domestic versus external donor dependency.</li>
                            <li><strong>Exemplars & Deep Dives Database:</strong> Showcases case studies and peer-reviewed articles detailing successful health reforms.</li>
                        </ul>

                        <h3 className="font-display text-3xl text-text-primary mb-8 mt-16">The Impact</h3>
                        <p className="mb-8">
                            The platform serves as a critical bridge between macroeconomic research and operational policy development. By mapping health financing to outcomes (like maternal and child care indices), it provides the evidence-base needed by state actors to lobby for budget reforms and justify domestic investments. The tool is actively used by policy advisors, researchers, and intergovernmental agencies to support advocacy surrounding continental declarations.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-4 animate-in stagger-3">
                    <div className="bg-white border border-border-warm p-10 sticky top-32">
                        <h4 className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.4em] mb-10 border-b border-border-warm pb-4">
                            Project Details
                        </h4>

                        <div className="space-y-8">
                            <div>
                                <p className="text-[10px] text-text-secondary font-mono uppercase tracking-widest mb-1">Client</p>
                                <p className="text-sm font-semibold text-text-primary">African Renaissance Trust (ART)</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-text-secondary font-mono uppercase tracking-widest mb-1">Scope</p>
                                <p className="text-sm font-semibold text-text-primary">55 African Union Member States</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-text-secondary font-mono uppercase tracking-widest mb-1">Services</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Health Financing Analytics", "Sovereign Benchmarking", "Policy Alignment Tracking", "Exemplars Database"].map(s => (
                                        <span key={s} className="px-3 py-1 bg-hover text-[10px] font-mono text-text-secondary rounded-sm">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-text-secondary font-mono uppercase tracking-widest mb-1">Policy Alignments</p>
                                <ul className="text-sm font-medium text-text-primary space-y-1 mt-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Abuja Declaration (15%)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> ALM Declaration on Resource Mobilisation</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> WHO Health System Blocks</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-10 border-t border-border-warm">
                            <Link href="/contact" className="w-full py-4 bg-accent-green text-white text-center rounded-sm font-medium block hover:bg-accent-green/90 transition-all text-sm">
                                Discuss Health Analytics Systems
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-24">
                <Link href="/our-work" className="inline-flex items-center gap-3 text-text-secondary hover:text-accent-green font-mono text-xs uppercase tracking-widest transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to All Case Studies
                </Link>
            </section>
        </div>
    );
}
