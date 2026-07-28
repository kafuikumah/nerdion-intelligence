"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Shield, AlertTriangle } from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-text-primary">Terms of Service</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase tracking-[0.3em] mb-4">Legal & Governance</p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight">
                        Terms of Service
                    </h1>
                    <p className="text-sm font-mono text-text-secondary mt-6">LAST UPDATED: JULY 28, 2026</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                {/* Side Directory */}
                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-4 border-l border-border-warm pl-6 text-sm">
                        <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-6">Sections</p>
                        <a href="#acceptance" className="block text-text-secondary hover:text-accent-green transition-colors">1. Acceptance of Terms</a>
                        <a href="#licenses" className="block text-text-secondary hover:text-accent-green transition-colors">2. Institutional Access</a>
                        <a href="#use" className="block text-text-secondary hover:text-accent-green transition-colors">3. Acceptable Use</a>
                        <a href="#ip" className="block text-text-secondary hover:text-accent-green transition-colors">4. IP & Capacity Handover</a>
                        <a href="#warranties" className="block text-text-secondary hover:text-accent-green transition-colors">5. Limitations & Warranties</a>
                        <a href="#law" className="block text-text-secondary hover:text-accent-green transition-colors">6. Governing Law</a>
                    </div>
                </div>

                {/* Policy Body */}
                <div className="lg:col-span-9 animate-in stagger-1">
                    <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-12">
                        
                        <section id="acceptance" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">1. Acceptance of Terms</h2>
                            <p className="mb-4">
                                These Terms of Service govern the use of Nerdion Systems' digital tools, website assets, staging portals, and data analytics repositories. By accessing or executing tasks on our platforms, you agree to comply with these terms on behalf of yourself and the organization you represent.
                            </p>
                            <p>
                                If you are acting on behalf of a sovereign state, regional economic block, or development finance institution, you warrant that you possess the necessary administrative authority to bind your organization to these conditions.
                            </p>
                        </section>

                        <section id="licenses" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">2. Institutional Access</h2>
                            <p className="mb-4">
                                Focal points and designated state analysts are issued credentials to access private data staging spaces (such as the ADMM submission staging portals). Access is strictly restricted:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Account credentials must be safeguarded and never shared across departments.</li>
                                <li>You must immediately notify Nerdion Systems' security team if you suspect a breach.</li>
                                <li>Nerdion Systems reserves the right to suspend accounts violating system integrity.</li>
                            </ul>
                        </section>

                        <section id="use" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">3. Acceptable Use</h2>
                            <p className="mb-4">
                                When uploading metrics, metadata, or data registers to our staging servers, you agree to refrain from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Injecting malicious code, SQL strings, or scripts.</li>
                                <li>Bypassing encryption, rate-limiting, or verification checks.</li>
                                <li>Submitting mock data intentionally designed to distort regional aggregations.</li>
                                <li>Processing data without legal authority or staging agreements.</li>
                            </ul>
                        </section>

                        <section id="ip" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">4. IP & Capacity Handover</h2>
                            <p className="mb-4">
                                Nerdion Systems respects data sovereignty and local ownership. While core system design templates and codebase skeletons remain the intellectual property of Nerdion Systems, our <strong>Capacity Handover Framework</strong> ensures that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Custom databases, indicator repositories, and localized logic scripts are transferred to the contracting state or NGO upon project closure.</li>
                                <li>We grant clients a perpetual, royalty-free, non-exclusive license to operate and adapt the systems within their territory.</li>
                                <li>Comprehensive technical training, code repositories, and metadata dictionaries are provided to local technical experts to prevent vendor lock-in.</li>
                            </ul>
                        </section>

                        <section id="warranties" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">5. Limitations & Warranties</h2>
                            <p className="mb-4">
                                Our data analytics portals are engineered to highest professional standards. However, they are provided as administrative and decision-support infrastructure.
                            </p>
                            <p>
                                <strong>Decision Quality Disclaimer:</strong> Nerdion Systems does not guarantee fiscal or political results. The accuracy of policy decisions, budgetary reallocations, and program outcomes remains the sole responsibility of the executing sovereign entity or development agency. We are not liable for data errors originating from national official sources.
                            </p>
                        </section>

                        <section id="law" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">6. Governing Law</h2>
                            <p className="mb-4">
                                These terms and any disputes arising from them are governed by the laws of <strong>Ghana</strong> (for contracts administered through our Accra HQ) or the laws of <strong>England and Wales</strong> (for contracts administered through our Manchester office), unless explicitly negotiated otherwise in bilateral sovereign treaty agreements.
                            </p>
                            <p>
                                In the event of a dispute, stakeholders agree to seek resolution via constructive diplomacy and institutional mediation before resorting to formal arbitration.
                            </p>
                        </section>

                    </div>
                </div>
            </section>

            {/* Back Button */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-24">
                <Link href="/" className="inline-flex items-center gap-3 text-text-secondary hover:text-accent-green font-mono text-xs uppercase tracking-widest transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </section>
        </div>
    );
}
