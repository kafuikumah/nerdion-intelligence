"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Calendar, User, Tag } from "lucide-react";

export default function DebtSurveillanceArchitectureArticle() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/insights" className="hover:text-accent-green transition-colors">Insights</Link>
                    <span>/</span>
                    <span className="text-text-primary">Surveillance Architecture</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase tracking-[0.3em] mb-4">Technical Guide / Architecture</p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight mb-8">
                        Engineering for Macroeconomic Surveillance: Behind the ADMM Technical Architecture
                    </h1>

                    <div className="flex flex-wrap gap-8 items-center border-y border-border-warm py-6 text-xs font-mono text-text-secondary">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> JULY 28, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4" /> HILARY KODJI, CTO
                        </span>
                        <span className="flex items-center gap-2">
                            <Tag className="w-4 h-4" /> ARCHITECTURE & ENGINEERING
                        </span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 animate-in stagger-1">
                    <article className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-8">
                        <p className="text-xl text-text-primary font-medium leading-relaxed">
                            Building a virtual debt surveillance platform that span 55 distinct sovereign economies requires more than just database ingestion. It requires a resilient system architecture that respects data ownership, secures sensitive public finance data, and applies automated validation check rules to heterogeneous inputs.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">Designing a Multi-Tenant Ingestion Strategy</h3>
                        <p>
                            At the core of the ADMM is a multi-tenant portal designed for Member State focal points. Given the varying technical systems across sovereign debt management offices, the ingestion portal was engineered to accept both manual formatted Excel/CSV uploads and direct API integrations with national registries.
                        </p>
                        <p>
                            To enforce quality and methodology alignment, the system runs automated validation check blocks immediately upon upload. These rules audit key mathematical relationships (such as debt-service totals matching budget execution disbursements) and flag statistical gaps—such as missing contingent liabilities or state guarantees.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">Security and Sovereign Isolation</h3>
                        <p>
                            Public debt data is highly sensitive. The architecture isolates staging environments for each Member State. Data is encrypted at-rest and in-transit, with strict role-based access control (RBAC). Only aggregated, approved indicators are pushed to the central repository for continental reporting, ensuring that individual nations retain absolute ownership over non-public fiscal ledgers.
                        </p>

                        <div className="border-l-4 border-accent-green pl-6 my-10 italic text-xl text-text-primary font-medium bg-hover/30 py-6 pr-6">
                            "A central architecture concern was resolving currency volatility and reporting lags to enable fair, aggregated peer benchmarking."
                        </div>

                        <h3 className="font-display text-2xl text-text-primary mt-12">Interactive Analytics and Early Warning Risk Engines</h3>
                        <p>
                            The aggregated repository feeds the public-facing dashboard layer, built with Next.js and Tailwind CSS. The analytical engine models indicators like debt-service-to-revenue ratios and debt-to-GDP percentages, generating visual warnings when sovereign profiles cross critical risk thresholds.
                        </p>
                        <p>
                            This early-warning risk module enables the Economic Development Department of the African Union to compile automated risk briefs and scenario projections, giving AU analysts and Member State planners a shared technical backbone to guide policy interventions.
                        </p>
                    </article>
                </div>

                <div className="lg:col-span-4 animate-in stagger-2">
                    <div className="bg-white border border-border-warm p-10">
                        <h4 className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.4em] mb-6 border-b border-border-warm pb-4">
                            Technical Elements
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-text-primary">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Multi-tenant Staging</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Automated Logic Checks</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Role-Based Access Control</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Early Warning Engine</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Back Button */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-24">
                <Link href="/insights" className="inline-flex items-center gap-3 text-text-secondary hover:text-accent-green font-mono text-xs uppercase tracking-widest transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
                </Link>
            </section>
        </div>
    );
}
