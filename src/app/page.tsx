import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Database,
  BarChart3,
  Code2,
  Search,
  PenTool,
  Code,
  HeartHandshake,
  Activity,
  Sprout,
  Globe,
  Coins,
  ShieldCheck,
  LineChart,
  LayoutDashboard,
  History,
  Layers
} from "lucide-react";
import { GlassmorphicIcon } from "@/components/GlassmorphicIcon";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in stagger-1">
            <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.3em] mb-6">
              Accra · Manchester
            </p>
            <h1 className="font-display text-6xl lg:text-[88px] leading-[1.05] text-text-primary mb-8 tracking-tight">
              Technology built for African development.
            </h1>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl">
              Nerdion Systems turns fragmented administrative, program, geospatial, and economic datasets into interoperable decision-support systems that support planning, implementation tracking, and evaluation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green text-white rounded-sm hover:bg-accent-green/90 transition-all shadow-sm group"
              >
                Explore Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-green text-accent-green rounded-sm hover:bg-hover transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="hidden lg:block animate-in stagger-2">
            <div className="relative aspect-square w-full bg-transparent overflow-hidden group transition-all duration-300">
              <div className="relative w-full h-full">
                <Image
                  src="/Nerdion-hro-image.png"
                  alt="Nerdion Systems Platform Showcase"
                  fill
                  className="object-contain transition-transform duration-75 group-hover:scale-[1.02]"
                  sizes="(max-w-720px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Bar */}
      <section className="bg-footer py-16 border-y border-border-warm animate-in">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.4em] text-center mb-10 px-6">
            Trusted by organizations shaping the world
          </p>

          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-footer before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-footer after:to-transparent">
            <div className="flex animate-marquee-ltr gap-4 whitespace-nowrap">
              {/* First Set of Logos */}
              <div className="flex shrink-0 items-center justify-around gap-4 min-w-full">
                {[
                  { name: "African Union Commission", logo: "/logos/african_union_logo.png" },
                  { name: "African Renaissance Trust", logo: "/logos/african_renaissance_logo.png" },
                  { name: "MTN", logo: "/logos/mtn_logo.png" },
                  { name: "Eco Africa Network", logo: "/logos/eco_africa_logo.png" },
                  { name: "Ghana Water Company Limited", logo: "/logos/ghanawater_logo.png" },
                  { name: "CalBank", logo: "/logos/calbank_logo.png" },
                  { name: "AirtelTigo", logo: "/logos/airteltigo_logo.png" },
                ].map((org, index) => (
                  <div key={`${org.name}-1-${index}`} className="flex items-center justify-center shrink-0">
                    <Image
                      src={org.logo}
                      alt={`${org.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Second Set of Logos (Duplicate for seamless loop) */}
              <div className="flex shrink-0 items-center justify-around gap-4 min-w-full">
                {[
                  { name: "African Union Commission", logo: "/logos/african_union_logo.png" },
                  { name: "African Renaissance Trust", logo: "/logos/african_renaissance_logo.png" },
                  { name: "MTN", logo: "/logos/mtn_logo.png" },
                  { name: "Eco Africa Network", logo: "/logos/eco_africa_logo.png" },
                  { name: "Ghana Water Company Limited", logo: "/logos/ghanawater_logo.png" },
                  { name: "CalBank", logo: "/logos/calbank_logo.png" },
                  { name: "AirtelTigo", logo: "/logos/airteltigo_logo.png" },
                ].map((org, index) => (
                  <div key={`${org.name}-2-${index}`} className="flex items-center justify-center shrink-0">
                    <Image
                      src={org.logo}
                      alt={`${org.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="mb-20 animate-in">
          <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Practice Areas</p>
          <h2 className="font-display text-5xl lg:text-6xl text-text-primary mb-6">
            Five practice areas. One unified data foundation.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            We focus on turning fragmented administrative, programme, geospatial, economic and financial datasets into interoperable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              icon: Database,
              title: "Data Analytics",
              text: "Data engineering, interoperable data models, indicator systems, and automation of reporting workflows.",
              tags: ["Data Modeling", "Pipelines", "BI"]
            },
            {
              num: "02",
              icon: Activity,
              title: "Health",
              text: "Health financing analytics, expenditure tracking, health sector performance intelligence, and facility-level monitoring.",
              tags: ["M&E", "Financing", "Expenditure"]
            },
            {
              num: "03",
              icon: Sprout,
              title: "Agriculture",
              text: "Programme targeting tools, farmer and value-chain delivery analytics, resilience risk, and geospatial intelligence.",
              tags: ["Farmer Data", "Geospatial", "Risk"]
            },
            {
              num: "04",
              icon: Globe,
              title: "Sustainability & Climate",
              text: "NDC implementation tracking, MRV support, climate finance mapping, and geospatial exposure intelligence.",
              tags: ["Climate Finance", "MRV", "NDC"]
            },
            {
              num: "05",
              icon: Coins,
              title: "Finance",
              text: "Public and development finance analytics, budget execution intelligence, investment pipeline, and financing scenarios.",
              tags: ["Public Finance", "Budgets", "Investment"]
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-border-warm p-10 hover:border-accent-green transition-all group animate-in flex flex-col justify-between" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
              <div>
                <p className="font-mono text-[10px] text-text-secondary mb-8">{item.num}</p>
                <GlassmorphicIcon icon={item.icon} size="md" className="mb-8" />
                <h3 className="font-display text-2xl text-text-primary mb-4">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-8">
                  {item.text}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-background border border-border-warm text-[10px] font-mono text-text-secondary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Model Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32 border-t border-border-warm animate-in">
        <div className="mb-20">
          <p className="font-mono text-[10px] text-accent-green uppercase tracking-[0.4em] mb-4">Delivery Model</p>
          <h2 className="font-display text-5xl lg:text-6xl text-text-primary mb-6">
            Data and systems as delivery infrastructure
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Our delivery model treats data systems as critical administrative infrastructure, supporting programme tracking, governmental operational needs, and traceable donor reporting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Governed Data Foundation",
              icon: ShieldCheck,
              bullets: [
                "Automated ingestion pipelines & validation logic",
                "Strict access controls & data classification schemas",
                "Lawful processing pathways agreed with clients"
              ]
            },
            {
              title: "Decision-Ready Analytics",
              icon: LineChart,
              bullets: [
                "Consistent core metrics and historical trend analysis",
                "Interactive scenario-modeling and projection tools",
                "Analytics explicitly tied to key project decisions"
              ]
            },
            {
              title: "Workflow-Integrated Tooling",
              icon: LayoutDashboard,
              bullets: [
                "Dynamic dashboards and automated reporting packs",
                "Low-bandwidth notifications and SMS alert systems",
                "Custom tools built around actual operational workflows"
              ]
            },
            {
              title: "Auditability & Traceability",
              icon: History,
              bullets: [
                "Complete data lineage mapping and source registers",
                "Version-controlled codebases & reproducible datasets",
                "Fully traceable assumptions and parameters throughout"
              ]
            },
            {
              title: "Capacity Transfer & Evolution",
              icon: Layers,
              bullets: [
                "Comprehensive technical documentation and training",
                "Transition frameworks and handover support plans",
                "Systems built to operate beyond single project cycles"
              ]
            }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white border border-border-warm p-10 hover:border-accent-green hover:shadow-sm transition-all group flex flex-col justify-between" style={{ animationDelay: `${0.1 * idx}s` }}>
              <div>
                <GlassmorphicIcon icon={pillar.icon} size="md" className="mb-8" />
                <h3 className="font-display text-2xl text-text-primary mb-6">{pillar.title}</h3>
                <ul className="space-y-4">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 text-sm text-text-secondary leading-relaxed items-start">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-dark-bg py-24 lg:py-32 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-20 animate-in">
            <p className="font-mono text-[10px] text-accent-gold uppercase tracking-widest mb-4">Our Process</p>
            <h2 className="font-display text-5xl lg:text-6xl mb-6">How we work</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { num: "01", title: "Discovery", icon: Search, text: "Context analysis, stakeholder interviews, data landscape assessment, and problem definition." },
              { num: "02", title: "Co-Design", icon: PenTool, text: "Collaborative definition of architecture, indicator frameworks, reporting, and governance model." },
              { num: "03", title: "Prototype", icon: LayoutDashboard, text: "Rapid working prototype validated against real workflows and datasets before full development." },
              { num: "04", title: "Build", icon: Code, text: "Structured engineering with iterative review cycles, QA, and client feedback loops throughout." },
              { num: "05", title: "Deploy", icon: Layers, text: "Production deployment, data migration, integration testing, user acceptance, and go-live support." },
              { num: "06", title: "Iterate", icon: HeartHandshake, text: "Post-launch monitoring, performance review, user feedback incorporation, and improvement cycles." },
            ].map((step, idx) => (
              <div key={idx} className="relative group animate-in" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <p className="font-mono text-[10px] text-text-secondary group-hover:text-accent-gold transition-colors">{step.num}</p>
                  <GlassmorphicIcon icon={step.icon} size="sm" />
                </div>
                <h3 className="font-display text-xl mb-4">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex justify-between items-end mb-16 animate-in">
          <div>
            <p className="font-mono text-[10px] text-accent-green uppercase tracking-widest mb-4">Featured Work</p>
            <h2 className="font-display text-5xl lg:text-6xl text-text-primary">Recent projects</h2>
          </div>
          <Link href="/our-work" className="text-sm font-mono text-accent-green hover:underline mb-2">
            All Case Studies →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Large Featured Card */}
          <Link href="/case-study/ocha" className="group bg-white border border-border-warm hover:border-accent-green transition-all overflow-hidden animate-in">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <p className="font-mono text-[10px] text-accent-green uppercase tracking-widest mb-4">UN OCHA</p>
                <h3 className="font-display text-4xl text-text-primary mb-6 group-hover:text-accent-green transition-colors">
                  Humanitarian Crisis Early Warning System
                </h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  A multi-country platform consolidating 14 real-time data feeds to provide actionable early warnings 4–6 weeks ahead of crises.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Real-time", "Predictive", "Multi-source"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-hover text-[10px] font-mono text-text-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="inline-block px-4 py-2 bg-accent-gold text-white text-xs font-mono rounded-sm">
                  4–6 week early lead time
                </div>
              </div>
              <div className="bg-hover/50 flex items-center justify-center p-12">
                <div className="w-full aspect-video bg-white border border-border-warm shadow-sm flex items-center justify-center">
                  <BarChart3 className="w-24 h-24 text-accent-green opacity-20" />
                </div>
              </div>
            </div>
          </Link>

          {/* Two smaller cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { client: "ECOWAS", title: "Regional MEAL Platform", text: "15-country system tracking 340+ indicators with automated donor reporting.", outcome: "70% time saved", href: "/case-study/ecowas" },
              { client: "AfDB", title: "Investment Portfolio Tracker", text: "Real-time dashboard tracking $2.4B in infrastructure across 18 nations.", outcome: "$2.4B tracked", href: "/case-study/afdb" }
            ].map((project, idx) => (
              <Link key={idx} href={project.href} className="group bg-white border border-border-warm p-10 hover:border-accent-green transition-all animate-in" style={{ animationDelay: `${0.1 * idx}s` }}>
                <p className="font-mono text-[10px] text-accent-green uppercase tracking-widest mb-4">{project.client}</p>
                <h3 className="font-display text-2xl text-text-primary mb-4 group-hover:text-accent-green transition-colors">{project.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-8">{project.text}</p>
                <div className="inline-block px-3 py-1 bg-accent-gold text-white text-[10px] font-mono rounded-sm">
                  {project.outcome}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="bg-hover/50 border-t border-accent-green py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center animate-in">
          <h2 className="font-display text-5xl lg:text-7xl text-text-primary mb-8 max-w-4xl mx-auto leading-tight">
            Ready to make your data work for the world?
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your organization turn evidence into impact with precision and clarity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent-green text-white rounded-sm hover:bg-accent-green/90 transition-all shadow-md group"
            >
              Start a Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-accent-green text-accent-green rounded-sm hover:bg-white transition-all shadow-sm"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
