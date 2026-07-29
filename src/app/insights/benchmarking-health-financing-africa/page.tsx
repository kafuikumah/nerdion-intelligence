"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Calendar, User, Tag } from "lucide-react";

export default function HealthAnalyticsDesignArticle() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/insights" className="hover:text-accent-green transition-colors">Insights</Link>
                    <span>/</span>
                    <span className="text-text-primary">Dashboard Design</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase mb-4">Technical Guide / Product Design</p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight mb-8">
                        Designing Decision-Ready Analytics: Benchmarking Healthcare Expenditures in Africa
                    </h1>

                    <div className="flex flex-wrap gap-8 items-center border-y border-border-warm py-6 text-xs font-mono text-text-secondary">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> JULY 28, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4" /> HILARY KODJI, CTO
                        </span>
                        <span className="flex items-center gap-2">
                            <Tag className="w-4 h-4" /> DASHBOARD DESIGN & ANALYTICS
                        </span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 animate-in stagger-1">
                    <article className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-8">
                        <p className="text-xl text-text-primary font-medium leading-relaxed">
                            Data dashboard design in development contexts must balance comprehensiveness with simplicity. An interface that overwhelms users with raw figures fails to drive operational utility. The Health Financing Insights Dashboard addresses this by structuring analytics into six decision-ready modules.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">1. Continental Map Explorer</h3>
                        <p>
                            The primary entry point of the platform is a visual geographic map mapping healthcare spending across all 55 African Union Member States. By applying clear color gradients, the explorer allows researchers to instantly isolate differences in per capita spending and identify geographic gaps between regional economic blocks.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">2. Peer Benchmarking and Group Profiles</h3>
                        <p>
                            To make sovereign comparison meaningful, the dashboard features isolated peer benchmarking. Planners can evaluate a country's performance against defined groups (such as SADC member states, low-income economies, or countries with similar disease profiles). The interface uses percentile rankings to clearly contextualize a country's status.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">3. Direct Comparison Matrices</h3>
                        <p>
                            For granular side-by-side analysis, the comparison matrices allow users to lock in two or more countries and compare their health financing structures. This module is particularly helpful in assessing source dependency—visually contrasting domestic fiscal revenues, out-of-pocket patient expenditures, and external development assistance.
                        </p>

                        <div className="border-l-4 border-accent-green pl-6 my-10 italic text-xl text-text-primary font-medium bg-hover/30 py-6 pr-6">
                            "A dashboard should convert complex macroeconomic indicators into digestible, interactive decision layouts."
                        </div>

                        <h3 className="font-display text-2xl text-text-primary mt-12">4. Sovereign Country Ledgers</h3>
                        <p>
                            Each AU state is allocated a consolidated country profile ledger. This section aggregates available macroeconomic indices, demographic trends, and health financing history, allowing national health planners to easily compile standardized reporting packs for internal and external audits.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">5. Exemplars & Deep Dives</h3>
                        <p>
                            Quantitative charts are accompanied by qualitative insights. The Exemplars and Deep Dives databases archive successful healthcare system reforms, policy lessons, and peer-reviewed research, enabling cross-border learning and capacity transfer.
                        </p>
                    </article>
                </div>

                <div className="lg:col-span-4 animate-in stagger-2">
                    <div className="bg-white border border-border-warm p-10">
                        <h4 className="font-mono text-[10px] text-text-secondary uppercase mb-6 border-b border-border-warm pb-4">
                            Analytical Modules
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-text-primary">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Continental Map</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Benchmarking Matrices</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Comparison Portals</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Sovereign Profiles</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Back Button */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-24">
                <Link href="/insights" className="inline-flex items-center gap-3 text-text-secondary hover:text-accent-green font-mono text-xs uppercase transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
                </Link>
            </section>
        </div>
    );
}
