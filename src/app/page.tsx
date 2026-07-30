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
  Layers,
  BrainCircuit
} from "lucide-react";
import { GlassmorphicIcon } from "@/components/GlassmorphicIcon";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-in stagger-1 min-w-0">
            <p className="font-mono text-[10px] text-accent-green uppercase mb-4 md:mb-6">
              Accra · Manchester
            </p>
            <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-[88px] leading-[1.15] lg:leading-[1.05] text-text-primary mb-5 md:mb-6 lg:mb-8 tracking-tight break-words">
              Technology built for African development.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-8 lg:mb-10 leading-relaxed">
              Nerdion Systems turns fragmented administrative, program, geospatial, and economic datasets into interoperable decision-support systems that support planning, implementation tracking, and evaluation.
            </p>

            <div className="flex flex-row gap-3 sm:gap-4 mb-10 lg:mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-[#0433D3] text-white text-[12px] sm:text-[15px] font-medium rounded-sm hover:bg-[#032BA1] transition-all shadow-sm whitespace-nowrap"
              >
                WORK WITH US <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 border border-[#0433D3] text-[#0433D3] text-[12px] sm:text-[15px] font-medium rounded-sm hover:bg-[#0433D3]/5 transition-all whitespace-nowrap"
              >
                OUR SERVICES
              </Link>
            </div>

            <div className="flex flex-col gap-3 min-w-0 mb-8 lg:mb-0">
              <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest shrink-0">
                Trusted By
              </span>
              <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-8 md:before:w-12 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-8 md:after:w-12 after:bg-gradient-to-l after:from-background after:to-transparent">
                <div className="flex gap-6 sm:gap-8 items-center whitespace-nowrap animate-[marquee-rtl_25s_linear_infinite] hover:[animation-play-state:paused] w-max">
                  {/* First set of logos */}
                  <div className="flex shrink-0 items-center justify-around gap-6 sm:gap-8 md:gap-12">
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
                          width={80}
                          height={32}
                          className="object-contain h-5 sm:h-6 md:h-7 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Second set of logos */}
                  <div className="flex shrink-0 items-center justify-around gap-6 sm:gap-8 md:gap-12">
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
                          width={80}
                          height={32}
                          className="object-contain h-5 sm:h-6 md:h-7 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image — mobile only, after Trusted By */}
            <div className="lg:hidden mt-10 w-full">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/Nerdion-hro-image.png"
                  alt="Nerdion Systems Platform Showcase"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Hero Image — desktop only, right column */}
          <div className="hidden lg:block animate-in stagger-2">
            <div className="relative aspect-square w-full bg-transparent overflow-hidden group transition-all duration-300">
              <div className="relative w-full h-full">
                <Image
                  src="/Nerdion-hro-image.png"
                  alt="Nerdion Systems Platform Showcase"
                  fill
                  className="object-contain transition-transform duration-75 group-hover:scale-[1.02]"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */ }
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="mb-20 animate-in">
          <p className="font-mono text-[10px] text-accent-green uppercase mb-4">Practice Areas</p>
          <h2 className="font-display text-4xl lg:text-6xl text-text-primary mb-6">
            Four practice areas. One unified data foundation.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            We focus on turning fragmented administrative, programme, geospatial, economic and financial datasets into interoperable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              num: "01",
              icon: Code2,
              title: "Product Engineering & Design",
              text: "Production software engineered across every layer of the stack - frontend, backend, infrastructure, and design.",
              tags: ["Mobile App", "Web App", "UI/UX", "Backend"]
            },
            {
              num: "02",
              icon: BrainCircuit,
              title: "Machine Learning & AI",
              text: "Production ML systems, predictive analytics, computer vision, and personalized recommendation engines.",
              tags: ["Predictive Analytics", "Computer Vision", "AI Agents"]
            },
            {
              num: "03",
              icon: Database,
              title: "Data Engineering & Analytics",
              text: "Algorithmic builds data platforms, analytics systems, and infrastructure end-to-end with one senior team.",
              tags: ["Analytics", "BI", "Infrastructure"]
            },
            {
              num: "04",
              icon: LineChart,
              title: "Strategy & Advisory",
              text: "Technical certainty and independent technical assessments for investors, acquirers, and founders.",
              tags: ["AI Readiness", "Feasibility", "Due Diligence"]
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
          <p className="font-mono text-[10px] text-accent-green uppercase mb-4">Delivery Model</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-text-primary mb-6">
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
            <p className="font-mono text-[10px] text-accent-gold uppercase mb-4">Our Process</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-6">How we work</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-16 animate-in">
          <div>
            <p className="font-mono text-[10px] text-accent-green uppercase mb-4">Featured Work</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-text-primary">Recent projects</h2>
          </div>
          <Link href="/our-work" className="text-sm font-mono text-accent-green hover:underline sm:mb-2">
            All Case Studies →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {[
              { client: "African Renaissance Trust (ART)", title: "Health Financing Insights", text: "Interactive analytics platform mapping domestic resources and benchmarking sovereign performances.", outcome: "Sovereign benchmarking", href: "/case-study/health-financing-dashboard" },
              { client: "African Union Commission (AUC)", title: "African Debt Monitoring Mechanism", text: "A continental reference registry for public finance macro-surveillance and risk early warning.", outcome: "Macro surveillance", href: "/case-study/admm" }
            ].map((project, idx) => (
              <Link key={idx} href={project.href} className="group bg-white border border-border-warm p-10 hover:border-accent-green transition-all animate-in flex flex-col justify-between" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div>
                    <p className="text-[11px] text-accent-green uppercase tracking-wide font-medium mb-4">{project.client}</p>
                    <h3 className="font-display text-2xl text-text-primary mb-4 group-hover:text-accent-green transition-colors">{project.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-8">{project.text}</p>
                </div>
                <div className="inline-block px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-[10px] font-semibold rounded-sm self-start">
                  {project.outcome}
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="bg-hover/50 border-t border-accent-green py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center animate-in">
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl text-text-primary mb-8 max-w-4xl mx-auto leading-tight">
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
