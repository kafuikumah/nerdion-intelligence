"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Calendar, User, Tag } from "lucide-react";

export default function HealthDeclarationsArticle() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/insights" className="hover:text-accent-green transition-colors">Insights</Link>
                    <span>/</span>
                    <span className="text-text-primary">Health Financing & Policy</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase tracking-[0.3em] mb-4">White Paper / Health Sector Policy</p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight mb-8">
                        From Declarations to Action: Benchmarking Health Financing across 55 AU States
                    </h1>

                    <div className="flex flex-wrap gap-8 items-center border-y border-border-warm py-6 text-xs font-mono text-text-secondary">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> JULY 28, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4" /> NERDION SYSTEMS TEAM
                        </span>
                        <span className="flex items-center gap-2">
                            <Tag className="w-4 h-4" /> HEALTH & FINANCE POLICY
                        </span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 animate-in stagger-1">
                    <article className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-8">
                        <p className="text-xl text-text-primary font-medium leading-relaxed">
                            African leaders have repeatedly committed to increasing domestic investments in healthcare. From the landmark 2001 Abuja Declaration pledging 15% of annual budgets to health, to the ALM Declaration on Domestic Resource Mobilization, and the 2025 Joint STC Declaration, the policy framework is robust. However, tracking national compliance remains a critical challenge.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">The Challenge of Fragmented Health Accounts</h3>
                        <p>
                            Historically, sovereign health accounts have been fragmented. Health financing data resides across multiple ministries (Health, Finance, Local Government) and external donor registries, making it difficult to compute true aggregate metrics. Without comparable datasets, regional bodies and local advocates struggle to evaluate compliance with continental commitments.
                        </p>
                        <p>
                            To bridge this gap, the African Renaissance Trust, in collaboration with technical and data partners, commissioned the Health Financing Insights Dashboard. The platform acts as a central repository that maps domestic resources, donor funding, and out-of-pocket spending side-by-side, enabling clear, lateral comparisons across all 55 African Union Member States.
                        </p>

                        <div className="border-l-4 border-accent-green pl-6 my-10 italic text-xl text-text-primary font-medium bg-hover/30 py-6 pr-6">
                            "By linking health financing data directly to physical outcomes, the platform helps sovereign planners justify national healthcare allocations."
                        </div>

                        <h3 className="font-display text-2xl text-text-primary mt-12">Benchmarking Sovereign Performance</h3>
                        <p>
                            The dashboard features isolated peer benchmarking profiles, allowing researchers to evaluate a selected country against defined regional or economic peer groups. This methodology highlights exemplars—countries that have successfully increased domestic health mobilization, such as through innovative levies or public-private partnerships.
                        </p>
                        <p>
                            By providing transparent access to sovereign profiles, comparison matrices, and deep dives, the dashboard equips national finance planners and intergovernmental secretariats with the evidence-base required to draft policy briefs, lobby for resource reallocation, and hold sovereign entities accountable to their commitments.
                        </p>
                    </article>
                </div>

                <div className="lg:col-span-4 animate-in stagger-2">
                    <div className="bg-white border border-border-warm p-10">
                        <h4 className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.4em] mb-6 border-b border-border-warm pb-4">
                            Policy Mandates
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-text-primary">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Abuja Declaration (15%)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> ALM Declaration</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> 2025 Joint STC</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> SDG 3 Compliance</li>
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
