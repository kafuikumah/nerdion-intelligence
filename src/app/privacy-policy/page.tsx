"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, Globe } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-text-primary">Privacy Policy</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase tracking-[0.3em] mb-4">Legal & Governance</p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight">
                        Privacy Policy
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
                        <a href="#scope" className="block text-text-secondary hover:text-accent-green transition-colors">1. Scope & Jurisdiction</a>
                        <a href="#compliance" className="block text-text-secondary hover:text-accent-green transition-colors">2. Policy Compliance</a>
                        <a href="#staging" className="block text-text-secondary hover:text-accent-green transition-colors">3. Data Staging Isolation</a>
                        <a href="#subject-rights" className="block text-text-secondary hover:text-accent-green transition-colors">4. Data Subject Rights</a>
                        <a href="#retention" className="block text-text-secondary hover:text-accent-green transition-colors">5. Retention & Disposal</a>
                        <a href="#contact" className="block text-text-secondary hover:text-accent-green transition-colors">6. Officer Contacts</a>
                    </div>
                </div>

                {/* Policy Body */}
                <div className="lg:col-span-9 animate-in stagger-1">
                    <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-12">
                        
                        <section id="scope" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">1. Scope & Jurisdiction</h2>
                            <p className="mb-4">
                                Nerdion Systems operates as a technology contractor and data processor for international development agencies, intergovernmental bodies, and national ministries. This Privacy Policy governs all public web services operated directly by Nerdion Systems, as well as the database staging structures managed under strict client instructions.
                            </p>
                            <p>
                                Because our operations process indicators and registers across regional borders (including sub-Saharan Africa, the United Kingdom, and North America), our data handling procedures are adapted to meet localized sovereign statutory mandates, regional intergovernmental guidelines, and international treaties.
                            </p>
                        </section>

                        <section id="compliance" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">2. Policy Compliance</h2>
                            <p className="mb-4">
                                Our data processing protocols align with and respect the following primary regulatory frameworks:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>African Union Data Policy Framework:</strong> Direct compliance with the principles of data sovereignty, interoperability, and lawful processing agreed under AU Executive Council standards.</li>
                                <li><strong>EU General Data Protection Regulation (GDPR):</strong> Standard principles of transparency, processing limitation, data minimization, and secure storage for all records.</li>
                                <li><strong>National Statutory Compliances:</strong> Adherence to local frameworks including the Ghana Data Protection Act (Act 843) and the UK Data Protection Act.</li>
                            </ul>
                        </section>

                        <section id="staging" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">3. Data Staging Isolation</h2>
                            <p className="mb-4">
                                Unlike commercial platforms that aggregate consumer behavior for advertising, Nerdion Systems enforces a strict <strong>Sovereign Isolation Policy</strong>. Staging databases configured for project pipelines (such as farmer value-chain registers, health financing indicators, and debt monitoring metrics) are staging-isolated:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Data is hosted on segregated virtual private servers with Role-Based Access Control (RBAC).</li>
                                <li>We do not sell, share, trade, or monetize any client staging registers under any circumstances.</li>
                                <li>Data processing is executed solely under written instruction from the contracting agency or ministry.</li>
                            </ul>
                        </section>

                        <section id="subject-rights" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">4. Data Subject Rights</h2>
                            <p className="mb-4">
                                For beneficiary feedback mechanisms and local program registers developed on behalf of NGOs, Nerdion Systems ensures that data subjects retain all recognized rights. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The right to be informed about how their personal indicators are processed.</li>
                                <li>The right to access their specific records and request corrections.</li>
                                <li>The right to request erasure ("the right to be forgotten") from staging platforms.</li>
                            </ul>
                            <p className="mt-4">
                                If you are a program participant seeking to exercise these rights, please contact the specific executing agency/NGO, or reach out to our office for redirection.
                            </p>
                        </section>

                        <section id="retention" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">5. Retention & Disposal</h2>
                            <p className="mb-4">
                                Data is retained only for the duration specified in the contractual agreement with the contracting organization. Upon project handover and completion of capacity transfer protocols, Nerdion Systems executes secure data wiping and decommissioning of staging sandbox servers.
                            </p>
                            <p>
                                All backup registers and audit logs are deleted using standardized protocols, ensuring that no orphaned databases remain in our infrastructure post-handover.
                            </p>
                        </section>

                        <section id="contact" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">6. Officer Contacts</h2>
                            <p className="mb-4">
                                If you have any inquiries regarding data protection policies or wish to report a perceived data discrepancy, please contact our Data Protection Officer:
                            </p>
                            <div className="p-6 bg-white border border-border-warm text-xs font-mono space-y-1.5 w-fit">
                                <p className="font-semibold text-text-primary">Data Protection Officer (DPO)</p>
                                <p>Nerdion Systems Limited</p>
                                <p>Email: dpo@nerdionsystems.com</p>
                                <p>HQ: Airport Residential Area, Accra, Ghana</p>
                            </div>
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
