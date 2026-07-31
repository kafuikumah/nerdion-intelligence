"use client";

import Link from "next/link";
import {
    Users, Globe, Code, Layers, GitBranch, Search,
    Briefcase, ShieldCheck, Database, Layout, Cpu, ArrowRight
} from "lucide-react";
import { GlassmorphicIcon } from "@/components/GlassmorphicIcon";

const phases = [
    { num: "01", title: "Discovery", icon: Search, description: "Context analysis, stakeholder interviews, data landscape assessment, problem definition" },
    { num: "02", title: "Co-Design", icon: Users, description: "Collaborative definition of architecture, indicator framework, reporting requirements, and governance model" },
    { num: "03", title: "Prototype", icon: Layers, description: "Rapid working prototype validated against real workflows and data before full development" },
    { num: "04", title: "Build", icon: Code, description: "Structured engineering with iterative review cycles, QA, and client feedback loops throughout" },
    { num: "05", title: "Deploy", icon: Globe, description: "Production deployment, data migration, integration testing, user acceptance, go-live support" },
    { num: "06", title: "Iterate", icon: GitBranch, description: "Post-launch monitoring, performance review, user feedback incorporation, improvement cycles" }
];

export default function HowWeWork() {
    return (
        <div className="bg-background min-h-screen pb-24 lg:pb-32">
            
            {/* Hero */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end px-6 lg:px-12 py-16 lg:py-24 bg-cover bg-center mb-16 lg:mb-24" style={{ backgroundImage: "url('/hero_how_we_work.png')" }}>
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full flex flex-col justify-end">
                    <div>
                        <nav className="flex gap-2 text-xs font-mono text-gray-300 uppercase mb-8">
                            <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">How We Work</span>
                        </nav>
                        <h1 className="font-display text-5xl lg:text-7xl text-white mb-6 max-w-4xl tracking-tight animate-in">
                            A practical bridge between software engineering & development practice.
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed animate-in stagger-1 pb-12">
                            We focus on turning fragmented administrative, programme, geospatial, economic and financial datasets into interoperable systems that support planning, implementation tracking, and evaluation.
                        </p>
                    </div>

                    <div className="mt-auto">
                        <p className="font-display text-xl lg:text-2xl text-white/90">A small team. Serious engineering.</p>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
                <div className="text-center mb-16 lg:mb-24 animate-in">
                    <p className="font-mono text-accent-green text-xs uppercase mb-4 tracking-wider">Value Proposition</p>
                    <h2 className="font-display text-4xl lg:text-5xl text-text-primary tracking-tight">One Unified Delivery Model</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="space-y-8 animate-in stagger-1">
                        <div className="p-8 bg-white/5 border border-border-warm rounded-sm hover:border-accent-green transition-colors">
                            <h3 className="font-display text-2xl text-text-primary mb-6 flex items-center gap-4">
                                <GlassmorphicIcon icon={Code} size="sm" /> The Engineering Core
                            </h3>
                            <ul className="space-y-4 font-mono text-sm text-text-secondary">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Software Engineers</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> UI/UX Designers</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Data Analysts & Scientists</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div> Cloud System Engineers</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="space-y-8 animate-in stagger-2">
                        <div className="p-8 bg-[#0433D3]/10 border border-[#0433D3]/30 rounded-sm hover:border-[#0433D3] transition-colors">
                            <h3 className="font-display text-2xl text-text-primary mb-6 flex items-center gap-4">
                                <GlassmorphicIcon icon={Globe} size="sm" /> Sector Data Experts
                            </h3>
                            <ul className="space-y-4 font-mono text-sm text-text-secondary">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0433D3] rounded-full"></div> Health Financing & Intelligence</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0433D3] rounded-full"></div> Development Finance Analytics</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0433D3] rounded-full"></div> Agricultural Value Chains</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0433D3] rounded-full"></div> Sustainability & Climate Finance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6-Phase Process */}
            <section className="bg-black text-white py-24 lg:py-32 border-y border-border-warm">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="mb-16 lg:mb-24 animate-in">
                        <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">Our 6-Phase Process</h2>
                        <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
                            A structured, iterative methodology designed to validate assumptions early, align with complex governance models, and deploy systems that operate beyond a single project cycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {phases.map((phase, idx) => (
                            <div key={idx} className="group flex flex-col p-8 border border-white/10 bg-white/5 hover:border-accent-green transition-all animate-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                <div className="flex justify-between items-start mb-12">
                                    <GlassmorphicIcon icon={phase.icon} />
                                    <span className="font-mono text-4xl text-white/10 font-bold group-hover:text-accent-green/30 transition-colors">{phase.num}</span>
                                </div>
                                <h3 className="font-display text-2xl mb-4 group-hover:text-accent-green transition-colors">{phase.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                                    {phase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Work For */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 animate-in">
                        <h2 className="font-display text-4xl lg:text-5xl text-text-primary tracking-tight mb-8">
                            Who we work for
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed mb-8">
                            Our work targets a persistent gap where technology solutions optimised for private/commercial incentives are not aligned with the unique context and needs of development organisations.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-mono uppercase text-text-secondary hover:text-accent-green transition-colors group">
                            Start a conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 animate-in stagger-1">
                        <div className="p-8 border border-border-warm bg-white hover:border-accent-green transition-colors">
                            <div className="mb-6"><GlassmorphicIcon icon={Globe} size="md" /></div>
                            <h3 className="font-display text-xl mb-3">Development Agencies</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">Multilaterals and bilateral agencies operating in complex public finance environments with fragmented data.</p>
                        </div>
                        <div className="p-8 border border-border-warm bg-white hover:border-accent-green transition-colors">
                            <div className="mb-6"><GlassmorphicIcon icon={Briefcase} size="md" /></div>
                            <h3 className="font-display text-xl mb-3">International NGOs</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">Organizations requiring robust monitoring, evaluation, and impact tracking across decentralized field offices.</p>
                        </div>
                        <div className="p-8 border border-border-warm bg-white hover:border-accent-green transition-colors sm:col-span-2">
                            <div className="mb-6"><GlassmorphicIcon icon={ShieldCheck} size="md" /></div>
                            <h3 className="font-display text-xl mb-3">Social Impact Delivery Partners</h3>
                            <p className="text-sm text-text-secondary leading-relaxed max-w-xl">Groups holding different expectations and mandates that prioritise equity and measurable outcomes for people, requiring auditable data pipelines and decision-ready analytics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
