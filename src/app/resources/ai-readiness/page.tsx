"use client";

import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";

export default function AIReadiness() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase mb-12">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-text-primary">Resources</span>
                    <span>/</span>
                    <span className="text-text-primary">AI Readiness</span>
                </nav>

                <div className="max-w-4xl animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase mb-4 flex items-center gap-2">
                        <Cpu className="w-4 h-4" /> Coming Soon
                    </p>
                    <h1 className="font-display text-4xl lg:text-6xl text-text-primary tracking-tight leading-tight">
                        AI Readiness Test
                    </h1>
                    <p className="text-sm font-mono text-text-secondary mt-6">LAUNCHING LATE 2026</p>
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-4 border-l border-border-warm pl-6 text-sm">
                        <p className="font-mono text-[10px] text-text-secondary uppercase mb-6">Overview</p>
                        <a href="#about" className="block text-text-secondary hover:text-accent-green transition-colors">1. What is the Test?</a>
                        <a href="#dimensions" className="block text-text-secondary hover:text-accent-green transition-colors">2. Core Dimensions</a>
                    </div>
                </div>

                <div className="lg:col-span-9 animate-in stagger-1">
                    <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-12">
                        <section id="about" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">1. What is the Test?</h2>
                            <p className="mb-4">
                                The AI Readiness Test is a diagnostic tool designed for development agencies and NGOs to assess their preparedness to integrate Artificial Intelligence into their programmatic workflows. It evaluates infrastructure, data governance, and technical capacity.
                            </p>
                        </section>
                        <section id="dimensions" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">2. Core Dimensions</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Data Infrastructure & Quality</li>
                                <li>Technical Capacity & Talent</li>
                                <li>Ethics & Governance</li>
                                <li>Strategic Alignment</li>
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
