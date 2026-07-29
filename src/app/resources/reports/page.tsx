"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function Reports() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Hero */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end px-6 lg:px-12 py-16 lg:py-24 bg-cover bg-center mb-16 lg:mb-24" style={{ backgroundImage: "url('/hero_reports.png')" }}>
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full flex flex-col justify-end">
                    <div>
                        <nav className="flex gap-2 text-xs font-mono text-gray-300 uppercase mb-8">
                            <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Resources</span>
                            <span>/</span>
                            <span className="text-white">Reports</span>
                        </nav>
                        <p className="font-mono text-accent-green text-xs uppercase mb-4 flex items-center gap-2">
                            <FileText className="w-4 h-4" /> Knowledgebase
                        </p>
                        <h1 className="font-display text-5xl lg:text-7xl text-white mb-6 max-w-4xl tracking-tight animate-in">
                            Reports & Industry Findings
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed animate-in stagger-1 pb-12">
                            COMING SOON
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-4 border-l border-border-warm pl-6 text-sm">
                        <p className="font-mono text-[10px] text-text-secondary uppercase mb-6">Directory</p>
                        <a href="#about" className="block text-text-secondary hover:text-accent-green transition-colors">1. The Knowledgebase</a>
                    </div>
                </div>

                <div className="lg:col-span-9 animate-in stagger-1">
                    <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-12">
                        <section id="about" className="scroll-mt-24">
                            <h2 className="font-display text-2xl text-text-primary mb-4 border-b border-border-warm pb-3">1. The Knowledgebase</h2>
                            <p className="mb-4">
                                Our reports repository will feature deep-dive impact analyses, post-deployment technical assessments, and macroeconomic findings across our core practice areas (Health, Dev Finance, Agriculture, and Climate).
                            </p>
                            <p>
                                Stay tuned as we compile our field insights into accessible, high-value reports.
                            </p>
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
