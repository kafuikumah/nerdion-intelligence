import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Insights() {
    return (
        <div className="bg-background pb-24 lg:pb-32">
            {/* Hero */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end px-6 lg:px-12 py-16 lg:py-24 bg-cover bg-center mb-16 lg:mb-24" style={{ backgroundImage: "url('/hero_insights.png')" }}>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full flex flex-col justify-end">
                    <div>
                        <nav className="flex gap-2 text-xs font-mono text-gray-300 uppercase mb-8">
                            <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Insights</span>
                        </nav>
                        <h1 className="font-display text-5xl lg:text-7xl text-white mb-6 max-w-4xl tracking-tight animate-in">
                            Articles, analysis, and institutional guides.
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed animate-in stagger-1 pb-12">
                            Perspectives on the intersection of data, technology, and international development from our multidisciplinary practice.
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-display text-xl lg:text-2xl text-white/90">A small team. Serious engineering.</p>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20">
                <div className="group bg-white border border-border-warm hover:border-accent-green transition-all overflow-hidden animate-in">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-10 lg:p-16 flex flex-col justify-center">
                            <div className="flex gap-4 mb-6">
                                <span className="font-mono text-[10px] text-accent-green uppercase">Policy Paper</span>
                                <span className="font-mono text-[10px] text-text-secondary uppercase">JUL 28, 2026</span>
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-text-primary mb-6 group-hover:text-accent-green transition-colors leading-tight">
                                Reclaiming Sovereignty: The Role of African-Owned Data in Debt Negotiations
                            </h2>
                            <p className="text-text-secondary text-base mb-8 leading-relaxed">
                                A policy analysis of the G20 Common Framework and why building an African-owned sovereign debt reference registry restores technical agency and voice in creditor negotiations.
                            </p>
                            <Link href="/insights/african-debt-sovereignty" className="flex items-center gap-2 text-accent-green text-sm font-semibold group/link">
                                Read Policy Paper <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="bg-hover/50 p-12 lg:p-24 flex items-center justify-center">
                            <div className="w-full aspect-[4/3] bg-white border border-border-warm shadow-md flex flex-col p-12 relative">
                                <div className="flex justify-between mb-8">
                                    <div className="w-16 h-16 bg-accent-green/10 rounded-full"></div>
                                    <div className="space-y-2">
                                        <div className="w-24 h-2 bg-border-warm"></div>
                                        <div className="w-12 h-2 bg-border-warm"></div>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-auto">
                                    <div className="w-full h-8 bg-hover"></div>
                                    <div className="w-3/4 h-8 bg-hover"></div>
                                    <div className="w-1/2 h-8 bg-hover"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Grid */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 animate-in">
                {[
                    { tag: "Architecture", title: "Engineering for Macroeconomic Surveillance: Behind the ADMM Technical Architecture", date: "JUL 28, 2026", href: "/insights/building-scalable-debt-surveillance" },
                    { tag: "Policy", title: "From Declarations to Action: Benchmarking Health Financing across 55 AU States", date: "JUL 28, 2026", href: "/insights/translating-declarations-to-budgets" },
                    { tag: "Product Design", title: "Designing Decision-Ready Analytics: Benchmarking Healthcare Expenditures in Africa", date: "JUL 28, 2026", href: "/insights/benchmarking-health-financing-africa" },
                ].map((article, idx) => (
                    <div key={idx} className="bg-white border border-border-warm p-10 hover:border-accent-green transition-all group flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between mb-8">
                                <span className="font-mono text-[10px] text-accent-green uppercase">{article.tag}</span>
                                <span className="font-mono text-[10px] text-text-secondary uppercase">{article.date}</span>
                            </div>
                            <h3 className="font-display text-2xl text-text-primary mb-6 group-hover:text-accent-green transition-colors flex-grow">
                                {article.title}
                            </h3>
                        </div>
                        <Link href={article.href} className="text-xs font-mono text-text-secondary group-hover:text-accent-green transition-colors mt-auto block pt-6">
                            READ ARTICLE →
                        </Link>
                    </div>
                ))}
            </section>

            {/* White Papers Section */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-border-warm animate-in">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <p className="font-mono text-[10px] text-accent-green uppercase mb-4">Resources</p>
                        <h2 className="font-display text-4xl lg:text-5xl text-text-primary">White papers & guides</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Building an Institutional Data Strategy", date: "MAR 2021", desc: "A comprehensive guide for CDOs and Program Directors at international development agencies." },
                        { title: "The Theory of Change in a Digital Age", date: "JAN 2025", desc: "Redefining how we map programs to data systems for measurable outcomes." },
                    ].map((paper, idx) => (
                        <div key={idx} className="flex gap-8 bg-white border border-border-warm p-10 group hover:border-accent-green transition-all">
                            <div className="w-16 h-16 bg-footer border border-border-warm flex items-center justify-center flex-shrink-0 group-hover:bg-accent-green group-hover:border-accent-green transition-all">
                                <Download className="w-6 h-6 text-text-secondary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-display text-2xl text-text-primary flex-grow">{paper.title}</h3>
                                    <span className="font-mono text-[10px] text-text-secondary uppercase ml-4">{paper.date}</span>
                                </div>
                                <p className="text-sm text-text-secondary leading-relaxed mb-6">{paper.desc}</p>
                               <Link href="#" className="text-xs font-mono text-accent-green hover:underline">DOWNLOAD PDF (4.2 MB)</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-24">
                <div className="bg-footer border border-border-warm py-20 px-8 lg:px-24 text-center animate-in">
                    <h2 className="font-display text-4xl text-text-primary mb-6">Stay informed via our periodic newsletter</h2>
                    <p className="text-text-secondary mb-10 max-w-xl mx-auto">
                        Institutional analysis and practice updates delivered directly to your inbox. No spam, only substance.
                    </p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Official Email Address"
                            className="flex-1 px-6 py-4 bg-white border border-border-warm text-sm focus:outline-none focus:border-accent-green transition-colors"
                        />
                        <button className="px-10 py-4 bg-accent-green text-white font-medium hover:bg-accent-green/90 transition-all shadow-sm">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
