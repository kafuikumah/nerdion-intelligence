"use client";

import Link from "next/link";
import {
    Users,
    Globe,
    Database,
    Settings2,
    ArrowRight,
    Trees,
    Activity,
    Scale,
    Network
} from "lucide-react";

const sectors = [
    {
        id: "multilaterals",
        icon: Globe,
        title: "Development Agencies & Multilaterals",
        description: "Supporting national governments and international organizations in tracking resource allocation, budget execution, and regional goals.",
        capabilities: [
            "Bilateral and multilateral ODA analytics",
            "Public finance and expenditure monitoring",
            "Nationally Determined Contributions (NDC) tracking",
            "Indicator management repositories & dashboards",
        ],
    },
    {
        id: "ingos",
        icon: Users,
        title: "International NGOs & Delivery Partners",
        description: "Enabling program implementation teams to move past manual spreadsheets and track developmental outcomes in real-time.",
        servicesDescription: "Designed for complex multi-country frameworks.",
        capabilities: [
            "Digital results frameworks & Theory of Change",
            "Socioeconomic profile targeting systems",
            "Farmer and aid value-chain tracking dashboards",
            "Automated multi-donor compliance reporting packs",
        ],
    },
    {
        id: "regional-bodies",
        icon: Database,
        title: "Regional Bodies & Policy Institutions",
        description: "Connecting cross-border stakeholders, aligning regional programs, and sharing insights with international partners.",
        capabilities: [
            "Interoperable regional datasets",
            "Policy monitoring & compliance tracking",
            "Geospatial crop, soil, and environmental maps",
            "Public knowledge portals & registries",
        ],
    },
    {
        id: "research-teams",
        icon: Settings2,
        title: "Social Impact & Research Teams",
        description: "Transforming complex, fragmented research data into interactive dashboards and structured planning scenario engines.",
        capabilities: [
            "Health financing & expenditure tracking",
            "Climate MRV (Measurement & Reporting) platforms",
            "Budget execution scenario-modeling tools",
            "Geospatial climate risk & exposure indicators",
        ],
    },
];

export default function Solutions() {
    return (
        <div className="bg-background">
            {/* Hero */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
                <nav className="flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
                    <Link href="/" className="hover:text-accent-green">Home</Link>
                    <span>/</span>
                    <span className="text-text-primary">Solutions</span>
                </nav>
                <h1 className="font-display text-6xl lg:text-7xl text-text-primary mb-8 max-w-4xl tracking-tight animate-in">
                    Sector Expertise
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl leading-relaxed mb-12 animate-in stagger-1">
                    System architectures and data tools built specifically for development agencies, international NGOs, and policy institutions.
                </p>
                <div className="grid lg:grid-cols-2 gap-12 text-lg text-text-secondary leading-relaxed animate-in stagger-2">
                    <p>
                        We offer a practical bridge between software engineering and development practice. Our focus is supporting organisations that manage complex budgets, programs, and datasets, ensuring that tech solutions are aligned with public sector environments and priority outcomes for people.
                    </p>
                    <p>
                        Our work combines deep technical standards (data engineering, code version-control, complete audit trails) with sector fluency in health financing, agricultural registries, climate finance tracking, and public governance models.
                    </p>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
                <div className="mb-16">
                    <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Focus Areas</p>
                    <h2 className="font-display text-4xl text-text-primary">Who We Serve</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {sectors.map((sector, idx) => {
                        const Icon = sector.icon;
                        return (
                            <div
                                key={idx}
                                id={sector.id}
                                className="bg-white border border-border-warm p-10 group hover:border-accent-green hover:shadow-lg transition-all duration-300 animate-in scroll-mt-24"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <Icon className="w-12 h-12 text-accent-green mb-8 group-hover:scale-110 transition-transform duration-300" />
                                <h2 className="font-display text-2xl text-text-primary mb-4">{sector.title}</h2>
                                <p className="text-sm text-text-secondary mb-8 leading-relaxed italic">
                                    {sector.description}
                                </p>
                                <div className="space-y-4">
                                    <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Core Capabilities:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                        {sector.capabilities.map((cap, cIdx) => (
                                            <li key={cIdx} className="flex items-start gap-2 text-xs text-text-secondary">
                                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 shrink-0" />
                                                <span>{cap}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Growing Focus & Why Us */}
            <section className="bg-footer py-24 lg:py-32">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-24">
                        <div className="animate-in">
                            <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-6">Forward Focus</p>
                            <h2 className="font-display text-4xl text-text-primary mb-8">Strategic Priorities</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Public sector data frameworks", icon: Scale },
                                    { title: "Expenditure and program monitoring", icon: Activity },
                                    { title: "Climate and environmental registers", icon: Trees },
                                    { title: "Research database consolidation", icon: Database },
                                    { title: "Regional policy tracking systems", icon: Network }
                                ].map((item, id) => (
                                    <div key={id} className="flex gap-4 items-center group">
                                        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm border border-border-warm group-hover:border-accent-green transition-colors">
                                            <item.icon className="w-5 h-5 text-accent-green" />
                                        </div>
                                        <span className="text-text-primary font-medium">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-12 lg:p-16 border border-border-warm animate-in">
                            <h2 className="font-display text-4xl text-text-primary mb-8">Operational Integration</h2>
                            <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                Instead of retrofitting generic CRM or ERP software designed for commercial business, we co-design systems from the ground up that reflect complex public finance regulations and multi-stakeholder structures.
                            </p>
                            <p className="text-lg text-text-secondary leading-relaxed mb-10">
                                This ensure operational usefulness for program staff and reproducible, auditable evidence databases for donors.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green text-white hover:bg-black transition-colors rounded-sm font-mono text-sm uppercase tracking-widest">
                                Connect with our team <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
