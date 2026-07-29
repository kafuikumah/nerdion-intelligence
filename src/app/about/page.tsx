"use client";

import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    ShieldCheck,
    Lock,
    Users,
    Users2,
    Briefcase,
    Settings,
    Award,
    Scale,
    Activity,
    Sprout,
    Globe,
    Coins,
    HeartHandshake,
    Database,
    Search
} from "lucide-react";
import { GlassmorphicIcon } from "@/components/GlassmorphicIcon";

export default function About() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Hero */}
            <section id="story" className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32 scroll-mt-24">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
                    <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-text-primary">About</span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center animate-in">
                    <div>
                        <h1 className="font-display text-6xl lg:text-7xl text-text-primary mb-8 tracking-tight">
                            Founded in Accra. <br />Built for the world.
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
                            Nerdion Systems is a technology company developing specialized tools and data analytics platforms for development agencies, international NGOs, and social impact delivery partners.
                        </p>
                    </div>
                    <div className="bg-footer p-12 lg:p-24 flex items-center justify-center relative overflow-hidden group">
                        <div className="font-display text-[200px] lg:text-[240px] font-black text-white/50 leading-none group-hover:scale-110 transition-transform duration-700 select-none">
                            2020
                        </div>
                        <div className="absolute inset-0 bg-accent-green/5 mix-blend-multiply"></div>
                    </div>
                </div>
            </section>

            {/* TECH Values Section */}
            <section id="values" className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-border-warm animate-in scroll-mt-24">
                <div className="mb-16">
                    <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Our Values</p>
                    <h2 className="font-display text-4xl lg:text-5xl text-text-primary">Operating Values (TECH)</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            char: "T",
                            title: "Technology for Development",
                            desc: "Build for real delivery environments, using the power of engineering to solve complex administrative, programme, and geospatial challenges to drive development impact."
                        },
                        {
                            char: "E",
                            title: "Equity & Ethics",
                            desc: "Treat equity as a design and measurement requirement. Apply strict privacy and data protection governance, and maintain clear accountability for how models are used."
                        },
                        {
                            char: "C",
                            title: "Collaboration & Co-Development",
                            desc: "Work side-by-side with clients to define problems, test rapid prototypes against actual workflows, and adapt outputs to institutional processes."
                        },
                        {
                            char: "H",
                            title: "Human-Centred",
                            desc: "Measure success through improved decision quality and real delivery outcomes for people, recognizing that systems must work pragmatically with available, imperfect datasets."
                        }
                    ].map((val, idx) => (
                        <div key={idx} className="bg-white border border-border-warm p-10 hover:border-accent-green transition-all group flex flex-col justify-between">
                            <div>
                                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/25 via-blue-500/10 to-blue-600/5 backdrop-blur-[8px] border border-blue-300/40 shadow-[0_8px_32px_0_rgba(4,51,211,0.12)] shadow-inner shadow-blue-300/25 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300 mb-8 font-display text-2xl font-bold text-[#0433D3]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
                                    <span className="relative z-10">{val.char}</span>
                                </div>
                                <h3 className="font-display text-2xl text-text-primary mb-4">{val.title}</h3>
                                <p className="text-xs text-text-secondary leading-relaxed">{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Leadership Section */}
            <section id="team" className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-border-warm animate-in scroll-mt-24">
                <div className="mb-16">
                    <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Leadership</p>
                    <h2 className="font-display text-4xl lg:text-5xl text-text-primary">Executive Committee</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            name: "Kafui Kofi Kumah",
                            role: "Chief Executive Officer",
                            initials: "KK",
                            focus: ["Strategy", "Partnership Management", "Portfolio Oversight", "Delivery", "Accountability", "Client Relationships"]
                        },
                        {
                            name: "Hilary Kodji",
                            role: "Chief Technology Officer",
                            initials: "HK",
                            focus: ["Engineering & Product Strategy", "System Architecture", "Quality Assurance", "Security Posture", "Technical Standards"]
                        },
                        {
                            name: "Teddy Kamassah",
                            role: "Chief Finance Officer",
                            initials: "TK",
                            focus: ["Financial Planning", "Pricing Support", "Project Financial Controls", "Reporting & Audit", "Commercial Risk"]
                        },
                    ].map((member, idx) => (
                        <div key={idx} className="group bg-white border border-border-warm p-10 hover:border-accent-green transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="w-20 h-20 bg-accent-green/10 text-accent-green font-display text-2xl font-bold flex items-center justify-center rounded-full mb-8 group-hover:bg-accent-green group-hover:text-white transition-all duration-300">
                                    {member.initials}
                                </div>
                                <h3 className="font-display text-2xl text-text-primary mb-1">{member.name}</h3>
                                <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-6">{member.role}</p>
                            </div>
                            <div className="space-y-2 mt-6 pt-6 border-t border-border-warm/50">
                                <p className="font-mono text-[9px] text-text-secondary uppercase tracking-widest mb-2">Core Mandate:</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {member.focus.map((item, fIdx) => (
                                        <span key={fIdx} className="px-2 py-0.5 bg-background border border-border-warm text-[9px] text-text-secondary font-mono rounded-sm">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 border-t border-border-warm/50 pt-16">
                    <div className="mb-12">
                        <h3 className="font-display text-3xl text-text-primary">Operations & Divisional Heads</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Daniel Obeng",
                                role: "Chief Operating Officer",
                                initials: "DO",
                                focus: ["Operations", "Resource Optimization", "Service Delivery", "Infrastructure", "Procurement"]
                            },
                            {
                                name: "David Morrison",
                                role: "Chief Marketing Officer",
                                initials: "DM",
                                focus: ["Marketing Strategy", "Brand Integrity", "Public Relations", "Sales Support", "Client Outreach"]
                            },
                            {
                                name: "Kofi Ampah",
                                role: "Head of Legal & Compliance",
                                initials: "KA",
                                focus: ["Contract Governance", "Regulatory Compliance", "Data Privacy Policies", "Risk Auditing"]
                            },
                            {
                                name: "Charles Alabi",
                                role: "Head of Business Development",
                                initials: "CA",
                                focus: ["Growth Strategy", "Pipeline Management", "Alliance Scouting", "Partnerships"]
                            },
                            {
                                name: "Korantema Swatson Damptey",
                                role: "Director of Project Management",
                                initials: "KD",
                                focus: ["Project Delivery Cycles", "Resource Allocation", "Milestone Accountability", "Client Coordination"]
                            },
                            {
                                name: "Akpene Ama Kumah",
                                role: "Administration & Executive Assistant",
                                initials: "AK",
                                focus: ["Executive Support", "Office Administration", "Stakeholder Scheduling", "Internal Coordination"]
                            }
                        ].map((member, idx) => (
                            <div key={idx} className="group bg-white border border-border-warm p-8 hover:border-accent-green transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 bg-accent-green/5 text-accent-green font-display text-lg font-bold flex items-center justify-center rounded-full mb-6 group-hover:bg-accent-green group-hover:text-white transition-all duration-300">
                                        {member.initials}
                                    </div>
                                    <h3 className="font-display text-xl text-text-primary mb-1">{member.name}</h3>
                                    <p className="font-mono text-[9px] text-text-secondary uppercase tracking-widest mb-4">{member.role}</p>
                                </div>
                                <div className="space-y-2 mt-4 pt-4 border-t border-border-warm/50">
                                    <div className="flex flex-wrap gap-1">
                                        {member.focus.map((item, fIdx) => (
                                            <span key={fIdx} className="px-1.5 py-0.5 bg-background border border-border-warm text-[8px] text-text-secondary font-mono rounded-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Structure Grid */}
            <section id="structure" className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-border-warm animate-in scroll-mt-24">
                <div className="mb-16">
                    <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Divisions</p>
                    <h2 className="font-display text-4xl lg:text-5xl text-text-primary">Technical Expert Divisions</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Health Systems Division", icon: Activity, text: "Focuses on health financing databases, clinical resource tracking, and sovereign health dashboards." },
                        { name: "Data Science & Analytics Division", icon: Database, text: "Focuses on data engineering, automated pipeline ingestion, validation, and aggregated registries." },
                        { name: "Agriculture Division", icon: Sprout, text: "Focuses on farmer registries, regional agricultural mapping, and value-chain delivery tracking." },
                        { name: "Development Finance Division", icon: Coins, text: "Focuses on ODA analytics, budget execution tracking, investment pipelines, and fiscal scenario modeling." },
                        { name: "Sustainability & Climate Division", icon: Globe, text: "Focuses on carbon tracking registries, MRV support platforms, and geospatial climate risk mapping." },
                        { name: "Research Division", icon: Search, text: "Focuses on peer-reviewed study consolidation, data translation, theory of change, and academic partnerships." }
                    ].map((division, idx) => (
                        <div key={idx} className="bg-white border border-border-warm p-10 hover:border-accent-green hover:shadow-sm transition-all group flex flex-col justify-between">
                            <div>
                                <GlassmorphicIcon icon={division.icon} size="md" className="mb-8" />
                                <h3 className="font-display text-2xl text-text-primary mb-4 group-hover:text-accent-green transition-colors">{division.name}</h3>
                                <p className="text-xs text-text-secondary leading-relaxed">{division.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Approach Section */}
            <section id="approach" className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-border-warm animate-in scroll-mt-24">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Our Engagement</p>
                        <h2 className="font-display text-4xl lg:text-5xl text-text-primary mb-8 leading-tight">
                            Co-creation and managed technical support
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8 text-base">
                            We don&apos;t take a one-size-fits-all approach. Every development partner has unique decision flow structures, data collection constraints, and strategic mandates.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 text-accent-green font-semibold hover:gap-3 transition-all">
                            Discuss Engagement Models <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="space-y-6">
                        {[
                            { title: "Co-Design and Alignment", icon: Users, text: "We run alignment workshops with program leads and field staff to model Theory of Change and logic structures." },
                            { title: "Rapid Iterative Prototyping", icon: Settings, text: "We deploy working prototypes early to validate system logic against actual workflows before full development." },
                            { title: "Long-term Handover Support", icon: HeartHandshake, text: "Ensuring systems run beyond project cycles by transferring documentation, training, and source registers." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-border-warm p-8 shadow-sm flex gap-6 group hover:border-accent-green transition-all">
                                <GlassmorphicIcon icon={item.icon} size="md" />
                                <div>
                                    <h4 className="font-display text-xl text-text-primary mb-2">{item.title}</h4>
                                    <p className="text-xs text-text-secondary leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnerships Section */}
            <section id="partners" className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-border-warm animate-in scroll-mt-24">
                <div className="mb-16">
                    <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Partnerships</p>
                    <h2 className="font-display text-4xl lg:text-5xl text-text-primary">Trusted by international and regional allies</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "African Union Commission",
                            logo: "/logos/african_union_logo.png",
                            description: "Coordinating continental digital initiatives, regional integrations, and inter-state evidence systems across 55 Member States."
                        },
                        {
                            name: "African Renaissance Trust",
                            logo: "/logos/african_renaissance_logo.png",
                            description: "Empowering communities through cultural preservation, education, and strategic developmental research partnerships."
                        },
                        {
                            name: "MTN Group",
                            logo: "/logos/mtn_logo.png",
                            description: "Collaborating on mobile-first database applications, infrastructure dashboards, and connectivity analytics in West Africa."
                        },
                        {
                            name: "Eco Africa Network",
                            logo: "/logos/eco_africa_logo.png",
                            description: "Building spatial data infrastructure and monitoring frameworks to track environmental resilience and sustainability metrics."
                        },
                        {
                            name: "Ghana Water Company Limited",
                            logo: "/logos/ghanawater_logo.png",
                            description: "Developing utility management platforms, real-time consumer billing trackers, and leak detection telemetry systems."
                        },
                        {
                            name: "CalBank",
                            logo: "/logos/calbank_logo.png",
                            description: "Integrating secure transaction APIs, trade finance tracking portals, and investment database infrastructure."
                        },
                        {
                            name: "AirtelTigo",
                            logo: "/logos/airteltigo_logo.png",
                            description: "Partnering on corporate data services, beneficiary notifications, and low-bandwidth SMS reporting services."
                        }
                    ].map((partner, idx) => (
                        <div key={idx} className="bg-white border border-border-warm p-10 hover:border-accent-green transition-all group flex flex-col justify-between">
                            <div>
                                <div className="h-16 flex items-center mb-8">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        width={140}
                                        height={60}
                                        className="object-contain h-12 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    />
                                </div>
                                <h3 className="font-display text-2xl text-text-primary mb-4">{partner.name}</h3>
                                <p className="text-xs text-text-secondary leading-relaxed">{partner.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
