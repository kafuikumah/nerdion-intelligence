"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Calendar, User, Tag } from "lucide-react";

export default function DebtSovereigntyArticle() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/insights" className="hover:text-accent-green transition-colors">Insights</Link>
                    <span>/</span>
                    <span className="text-text-primary">Debt Sovereignty</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase mb-4">White Paper / Policy Analysis</p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight mb-8">
                        Reclaiming Sovereignty: The Role of African-Owned Data in Debt Negotiations
                    </h1>

                    <div className="flex flex-wrap gap-8 items-center border-y border-border-warm py-6 text-xs font-mono text-text-secondary">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> JULY 28, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4" /> NERDION SYSTEMS TEAM
                        </span>
                        <span className="flex items-center gap-2">
                            <Tag className="w-4 h-4" /> PUBLIC DEBT & POLICY
                        </span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 animate-in stagger-1">
                    <article className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-8">
                        <p className="text-xl text-text-primary font-medium leading-relaxed">
                            For decades, African countries have relied on global institutions like the International Monetary Fund (IMF), the World Bank, and international credit rating agencies for debt statistics, sustainability analysis, risk assessments, and policy advice. While these institutions provide valuable resources, this structural data dependency has historically marginalized African voices in global debt discourse.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">The Informational Disadvantage in Debt Treatment</h3>
                        <p>
                            When external creditors hold the monopoly on debt sustainability metrics, debtor nations enter restructuring negotiations at a significant disadvantage. Standard global models and Debt Sustainability Analyses (DSAs) often prioritize creditor concerns over local developmental needs or fiscal realities. 
                        </p>
                        <p>
                            Under frameworks like the G20 Common Framework, this asymmetry leads to protracted negotiations. Sovereign nations are forced to default on climate and development initiatives while attempting to manage simultaneous, opaque negotiations across a fragmented creditor landscape—ranging from Paris Club members to private commercial bondholders.
                        </p>

                        <div className="border-l-4 border-accent-green pl-6 my-10 italic text-xl text-text-primary font-medium bg-hover/30 py-6 pr-6">
                            "Without data sovereignty, African nations remain dependent on external platforms to interpret, frame, and communicate their own fiscal narratives."
                        </div>

                        <h3 className="font-display text-2xl text-text-primary mt-12">The Rationale for the African Debt Monitoring Mechanism (ADMM)</h3>
                        <p>
                            The proposal for the ADMM, adopted by the 40th African Union Executive Council (Decision EX.CL/Dec.1147(XL)), is designed to dismantle this data dependency. The virtual mechanism establishes an African-owned reference registry to monitor, analyze, and manage public debt in a sustainable, transparent, and coordinated manner.
                        </p>
                        <p>
                            By harmonizing public debt definitions, classification structures, and indicator reporting templates, the ADMM provides a shared technical evidence base. This registry serves as the technical backbone for the Common African Position on Debt, ensuring that African states can negotiate restructuring programs from a position of equal informational strength.
                        </p>

                        <h3 className="font-display text-2xl text-text-primary mt-12">Fostering Collective Agency and Data Governance</h3>
                        <p>
                            Establishing data sovereignty is not just about reporting numbers; it is about building local technical capacity. The ADMM facilitates peer learning, helps countries identify contingent liabilities and state guarantees, and integrates early-warning surveillance systems directly into continental policy discussions. As the African Union represents the continent at global forums like the G20, the ADMM offers the technical agency required to challenge creditor-centric paradigms and build long-term macroeconomic stability.
                        </p>
                    </article>
                </div>

                <div className="lg:col-span-4 animate-in stagger-2">
                    <div className="bg-white border border-border-warm p-10">
                        <h4 className="font-mono text-[10px] text-text-secondary uppercase mb-6 border-b border-border-warm pb-4">
                            Key Themes
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-text-primary">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Data Sovereignty</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> G20 Common Framework</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Macro-Surveillance</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> AU Executive Council Decision</li>
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
