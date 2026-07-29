"use client";

import Link from "next/link";
import { ArrowLeft, Target } from "lucide-react";

export default function PositioningTool() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-text-primary">Resources</span>
                    <span>/</span>
                    <span className="text-text-primary">ImpactCompass</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4" /> Coming Soon
                    </p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight">
                        ImpactCompass
                    </h1>
                    <p className="text-sm font-mono text-text-secondary mt-6">LAUNCHING LATE 2026</p>
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-4 border-l border-border-warm pl-6 text-sm">
                        <p className="font-mono text-[10px] text-text-secondary uppercase mb-6">Overview</p>
                        <a href="#about" className="block text-text-secondary hover:text-accent-green transition-colors">1. The Positioning Tool</a>
                        <a href="#features" className="block text-text-secondary hover:text-accent-green transition-colors">2. Capabilities</a>
                    </div>
                </div>

                <div className="lg:col-span-9 animate-in stagger-1">
                    <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-12">
                        <section id="about" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">1. What is ImpactCompass?</h2>
                            <p className="mb-4">
                                ImpactCompass is an intelligent positioning tool designed for niche clients and social impact organizations. It provides data-backed narratives to help organizations competitively position themselves for grants, sovereign deals, and international funding.
                            </p>
                        </section>
                        <section id="features" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">2. Capabilities</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Funder Matrix Alignment</li>
                                <li>Impact Narrative Generation</li>
                                <li>Due Diligence Readiness Scoring</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
            
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-24">
                <Link href="/" className="inline-flex items-center gap-3 text-text-secondary hover:text-accent-green font-mono text-xs uppercase transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </section>
        </div>
    );
}
