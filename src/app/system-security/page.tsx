"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Activity, Eye, Terminal } from "lucide-react";

export default function SystemSecurity() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Header */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-text-primary">System Security</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase tracking-[0.3em] mb-4">Security & Operations</p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight">
                        System Security Posture
                    </h1>
                    <p className="text-sm font-mono text-text-secondary mt-6">SECURITY STANDARD: VERSION 2.0</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                {/* Side Directory */}
                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-4 border-l border-border-warm pl-6 text-sm">
                        <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-6">Sections</p>
                        <a href="#stance" className="block text-text-secondary hover:text-accent-green transition-colors">1. Security Architecture</a>
                        <a href="#encryption" className="block text-text-secondary hover:text-accent-green transition-colors">2. Encryption Protocols</a>
                        <a href="#isolation" className="block text-text-secondary hover:text-accent-green transition-colors">3. Sovereign Isolation</a>
                        <a href="#access" className="block text-text-secondary hover:text-accent-green transition-colors">4. Access Controls (RBAC)</a>
                        <a href="#audit" className="block text-text-secondary hover:text-accent-green transition-colors">5. Audit Logging & Lineage</a>
                        <a href="#disclosure" className="block text-text-secondary hover:text-accent-green transition-colors">6. Responsible Disclosure</a>
                    </div>
                </div>

                {/* Policy Body */}
                <div className="lg:col-span-9 animate-in stagger-1">
                    <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-12">
                        
                        <section id="stance" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">1. Security Architecture</h2>
                            <p className="mb-4">
                                Nerdion Systems approaches security as a core pillar of our delivery model. We recognize that development data platforms handle critical indicators, fiscal transactions, and administrative registries. Our systems are engineered using a defense-in-depth framework to protect sovereign resources from unauthorized access and service disruption.
                            </p>
                            <p>
                                All staging databases and analytical pipelines are deployed on enterprise-grade virtual private clouds (VPCs), backed by continuous network surveillance, automated firewalls, and isolated ingress gates.
                            </p>
                        </section>

                        <section id="encryption" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">2. Encryption Protocols</h2>
                            <p className="mb-4">
                                We enforce strict encryption standards across the entire data value chain:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Data at Rest:</strong> All databases, disk volumes, and staging backups are encrypted using advanced AES-256 standards with key rotation cycles.</li>
                                <li><strong>Data in Transit:</strong> Communication between local data focal points and the staging portal is protected by TLS 1.3 (Transport Layer Security) protocols, preventing interception during ingestion.</li>
                                <li><strong>Secure API Tunnels:</strong> Programmatic data pipelines utilize cryptographically signed keys and dedicated endpoints to protect data exchanges.</li>
                            </ul>
                        </section>

                        <section id="isolation" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">3. Sovereign Isolation</h2>
                            <p className="mb-4">
                                In multi-sovereign platforms like the ADMM and Health Financing Insights Dashboard, data isolation is a critical security mandate. Our database architectures use logical or physical isolation partitions to keep member state records segregated:
                            </p>
                            <p>
                                Staging database environments are isolated using dedicated virtual sandboxes. This prevents cross-tenant access and ensures that country focal points can only view or modify datasets authorized for their specific jurisdiction.
                            </p>
                        </section>

                        <section id="access" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">4. Access Controls (RBAC)</h2>
                            <p className="mb-4">
                                System access is governed by the Principle of Least Privilege. We implement strict Role-Based Access Control (RBAC):
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Focal Points:</strong> Granted upload and revision access restricted to their sovereign parameters.</li>
                                <li><strong>AU Analysts:</strong> Granted aggregated read-only and compilation access across the continental repository.</li>
                                <li><strong>System Maintainers:</strong> Granted structural configuration rights, isolated from viewing sensitive, unapproved raw databases.</li>
                            </ul>
                            <p className="mt-4">
                                Multi-Factor Authentication (MFA) is mandatory for all administrative access.
                            </p>
                        </section>

                        <section id="audit" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">5. Audit Logging & Lineage</h2>
                            <p className="mb-4">
                                We maintain immutable audit logs of all transactional actions. Every ingestion, logical check override, or status update is logged with metadata details (timestamp, focal point signature, parameter variables). 
                            </p>
                            <p>
                                This complete data lineage history allows independent auditors to trace calculations back to their original source registers, ensuring the high level of transparency required by multilateral donors and government regulators.
                            </p>
                        </section>

                        <section id="disclosure" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">6. Responsible Disclosure</h2>
                            <p className="mb-4">
                                Nerdion Systems welcomes security reviews from the research community. If you discover a vulnerability in our infrastructure, please report it privately:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Report details to: <strong>security@nerdionsystems.com</strong>.</li>
                                <li>Provide clear steps to reproduce the vulnerability to help us analyze the threat.</li>
                                <li>Give our team a reasonable timeframe (standard 90 days) to address the issue before public disclosure.</li>
                            </ul>
                            <p>
                                We commit to investigating all valid reports promptly and will not pursue legal actions against researchers who act in good faith and respect this policy.
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
