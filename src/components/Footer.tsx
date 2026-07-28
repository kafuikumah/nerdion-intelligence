import Link from "next/link";
import { Linkedin, Twitter, Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-[#050B1A] text-[#94A3B8] border-t border-slate-900 pt-24 pb-12">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* Main Directory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    {/* Column 1: Brand & Positioning */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <Image
                                src="/nerdion_logo.png"
                                alt="Nerdion Systems"
                                width={180}
                                height={40}
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-xs text-[#94A3B8]/80 leading-relaxed mb-8">
                            Nerdion Systems builds sustainable, auditable administrative and programmatic data systems for global development agencies, international NGOs, and sovereign institutions.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Globe, label: "Website" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center hover:border-accent-green hover:text-accent-green transition-all text-[#94A3B8]"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Sectors & Solutions */}
                    <div>
                        <h4 className="font-mono text-[9px] text-[#38BDF8] uppercase tracking-[0.3em] mb-6">Solutions</h4>
                        <ul className="space-y-3.5 text-xs">
                            {[
                                { label: "Multilaterals & Agencies", href: "/solutions#multilaterals" },
                                { label: "INGOs & Partners", href: "/solutions#ingos" },
                                { label: "Regional Intergovernmental", href: "/solutions#regional-bodies" },
                                { label: "Social Impact & Research", href: "/solutions#research-teams" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-accent-green transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Practice Areas */}
                    <div>
                        <h4 className="font-mono text-[9px] text-[#38BDF8] uppercase tracking-[0.3em] mb-6">Practice Divisions</h4>
                        <ul className="space-y-3.5 text-xs">
                            {[
                                { label: "Data Science & Analytics", href: "/what-we-do#data-analytics" },
                                { label: "Health Systems", href: "/what-we-do#health" },
                                { label: "Agriculture & Value Chains", href: "/what-we-do#agriculture" },
                                { label: "Sustainability & Climate", href: "/what-we-do#climate" },
                                { label: "Development Finance", href: "/what-we-do#finance" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-accent-green transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Corporate & Governance */}
                    <div>
                        <h4 className="font-mono text-[9px] text-[#38BDF8] uppercase tracking-[0.3em] mb-6">Corporate</h4>
                        <ul className="space-y-3.5 text-xs">
                            {[
                                { label: "Our Story", href: "/about#story" },
                                { label: "Executive Committee", href: "/about#team" },
                                { label: "Operating Values (TECH)", href: "/about#values" },
                                { label: "Corporate Structure", href: "/about#structure" },
                                { label: "Partnerships & Allies", href: "/about#partners" },
                                { label: "Insights & Guides", href: "/insights" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-accent-green transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Global Offices */}
                    <div>
                        <h4 className="font-mono text-[9px] text-[#38BDF8] uppercase tracking-[0.3em] mb-6">Global Offices</h4>
                        <div className="space-y-5 text-xs leading-relaxed text-[#94A3B8]/95">
                            <div>
                                <p className="font-semibold text-white">Accra, Ghana (HQ)</p>
                                <p className="text-[11px] text-[#94A3B8]/80">Airport Residential Area, Accra</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Manchester, UK</p>
                                <p className="text-[11px] text-[#94A3B8]/80">Spinningfields, Manchester</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Washington D.C., USA</p>
                                <p className="text-[11px] text-[#94A3B8]/80">K Street NW, Washington D.C.</p>
                            </div>
                            <div className="pt-3 border-t border-slate-900 space-y-1.5 font-mono text-[10px] text-accent-green">
                                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> info@nerdionsystems.com</p>
                                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +233 24 104 9063</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Governance & Compliance Strip */}
                <div className="border-t border-slate-900 pt-8 pb-10 text-[11px] text-[#94A3B8]/65 leading-relaxed">
                    <p>
                        <strong>Registrations & Compliance:</strong> Nerdion Systems is a registered corporate contractor complying with the African Union Data Policy Framework, EU General Data Protection Regulation (GDPR), and localized sovereign data classification standards. All software delivery cycles incorporate strict source registers, repeatable logic validations, and data lineage auditability records.
                    </p>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="border-t border-slate-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-wider">
                    <p className="uppercase">
                        © 2026 NERDION SYSTEMS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6 uppercase text-[#94A3B8]/80">
                        <Link href="/privacy-policy" className="hover:text-accent-green transition-colors">Privacy Policy</Link>
                        <span>·</span>
                        <Link href="/terms-of-service" className="hover:text-accent-green transition-colors">Terms of Service</Link>
                        <span>·</span>
                        <Link href="/system-security" className="hover:text-accent-green transition-colors">System Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
