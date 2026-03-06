(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navItems = [
    {
        label: "About",
        href: "/about",
        megaMenu: {
            grid: [
                {
                    title: "Our Story",
                    description: "Founded in Accra, built for the world",
                    href: "/about#story"
                },
                {
                    title: "The Team",
                    description: "Engineers, designers, specialists",
                    href: "/about#team"
                },
                {
                    title: "Our Approach",
                    description: "How we discover, design, and build",
                    href: "/about#approach"
                },
                {
                    title: "Partnerships",
                    description: "Strategic alliances and registrations",
                    href: "/about#partners"
                }
            ]
        }
    },
    {
        label: "What We Do",
        href: "/what-we-do",
        megaMenu: {
            featured: {
                label: "Our Practice",
                title: "End-to-end Technology for Development Organizations",
                subtext: "We design and build the digital infrastructure that turns evidence into action.",
                href: "/what-we-do"
            },
            items: [
                {
                    title: "Enterprise Management Platforms",
                    description: "Dashboards and analytics for evidence-based leadership decisions",
                    href: "/what-we-do#decision-intelligence"
                },
                {
                    title: "Monitoring & Evaluation Systems",
                    description: "Full MEAL platform builds from logframe to live system",
                    href: "/what-we-do#me-systems"
                },
                {
                    title: "Custom Digital Tools",
                    description: "Bespoke internal tools built for how your teams actually work",
                    href: "/what-we-do#custom-tools"
                }
            ]
        }
    },
    {
        label: "Solutions",
        href: "/solutions",
        megaMenu: {
            grid: [
                {
                    title: "UN & Multilateral Agencies",
                    description: "Supporting global coordination and response",
                    href: "/solutions#un-agencies"
                },
                {
                    title: "International NGOs",
                    description: "Enabling program teams to track outcomes",
                    href: "/solutions#ingos"
                },
                {
                    title: "Regional Bodies",
                    description: "ECOWAS, AU, IGAD coordination platforms",
                    href: "/solutions#regional-bodies"
                },
                {
                    title: "Development Finance Institutions",
                    description: "Impact measurement for social investment",
                    href: "/solutions#dfis"
                },
                {
                    title: "Humanitarian Response",
                    description: "Rapid-deployment crisis tracking systems",
                    href: "/solutions#humanitarian"
                },
                {
                    title: "Climate & Environment",
                    description: "Monitoring tools for a sustainable future",
                    href: "/solutions#climate"
                }
            ]
        }
    },
    {
        label: "Our Work",
        href: "/our-work",
        megaMenu: {
            featured: {
                label: "Featured Case Study",
                title: "Global Humanitarian Early Warning System",
                outcome: "4–6 week early lead time",
                href: "/case-study/early-warning-system"
            },
            items: [
                {
                    title: "Cross-Border MEAL Platform",
                    href: "/case-study/regional-monitoring"
                },
                {
                    title: "Strategic Investment Portfolio Tracker",
                    href: "/case-study/portfolio-management"
                },
                {
                    title: "Digital Beneficiary Accountability Portal",
                    href: "/case-study/beneficiary-feedback"
                }
            ]
        }
    },
    {
        label: "Insights",
        href: "/insights"
    }
];
function Navigation() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "065001c189fee5fe258a182d688bf647dd968ccabb23364f8c34ebf1fe020931") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "065001c189fee5fe258a182d688bf647dd968ccabb23364f8c34ebf1fe020931";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeMega, setActiveMega] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navigation[useEffect()]": ()=>{
                const handleScroll = {
                    "Navigation[useEffect() > handleScroll]": ()=>setScrolled(window.scrollY > 20)
                }["Navigation[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navigation[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border-warm py-4" : "bg-transparent py-6"}`;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-3 group",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/logo.png",
                alt: "Nerdion Systems",
                width: 180,
                height: 40,
                className: "h-10 w-auto object-contain transition-transform group-hover:scale-105",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 143,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== activeMega) {
        t4 = navItems.map({
            "Navigation[navItems.map()]": (item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group py-2",
                    onMouseEnter: {
                        "Navigation[navItems.map() > <div>.onMouseEnter]": ()=>setActiveMega(idx)
                    }["Navigation[navItems.map() > <div>.onMouseEnter]"],
                    onMouseLeave: {
                        "Navigation[navItems.map() > <div>.onMouseLeave]": ()=>setActiveMega(null)
                    }["Navigation[navItems.map() > <div>.onMouseLeave]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-accent-green transition-colors",
                            children: [
                                item.label,
                                item.megaMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 155,
                                    columnNumber: 232
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 155,
                            columnNumber: 61
                        }, this),
                        item.megaMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute top-full left-1/2 -translate-x-1/2 w-[600px] mt-2 bg-white border border-border-warm shadow-xl transition-all duration-300 origin-top overflow-hidden rounded-sm ${activeMega === idx ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2",
                                children: item.megaMenu.featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-hover/30 p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-4",
                                                    children: item.megaMenu.featured.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 697
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-xl text-text-primary mb-4 leading-tight",
                                                    children: item.megaMenu.featured.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 819
                                                }, this),
                                                item.megaMenu.featured.subtext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-text-secondary mb-6 leading-relaxed",
                                                    children: item.megaMenu.featured.subtext
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 963
                                                }, this),
                                                item.megaMenu.featured.outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-block px-3 py-1 bg-accent-gold text-white text-[10px] font-mono rounded-sm mb-6",
                                                    children: item.megaMenu.featured.outcome
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 1099
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.megaMenu.featured.href,
                                                    className: "flex items-center gap-2 text-accent-green text-sm font-semibold hover:gap-3 transition-all",
                                                    children: [
                                                        "Learn More ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navigation.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 1397
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 1242
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 155,
                                            columnNumber: 664
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 space-y-6",
                                            children: [
                                                item.megaMenu.items?.map(_NavigationNavItemsMapAnonymous),
                                                item.label === "Our Work" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/our-work",
                                                    className: "block text-xs font-mono text-accent-green hover:underline pt-2",
                                                    children: "View All Case Studies →"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 1564
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 155,
                                            columnNumber: 1444
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 grid grid-cols-2 gap-x-8 gap-y-6 p-8",
                                    children: item.megaMenu.grid?.map(_NavigationNavItemsMapAnonymous2)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 155,
                                    columnNumber: 1705
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 155,
                                columnNumber: 602
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 155,
                            columnNumber: 293
                        }, this)
                    ]
                }, item.label, true, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 151,
                    columnNumber: 52
                }, this)
        }["Navigation[navItems.map()]"]);
        $[4] = activeMega;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center gap-8",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/contact",
                className: "px-6 py-2.5 bg-accent-green text-white text-sm font-medium rounded-sm hover:bg-accent-green/90 transition-all shadow-sm",
                children: "Start a Project"
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 172,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== isOpen) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "lg:hidden text-text-primary p-2",
            onClick: {
                "Navigation[<button>.onClick]": ()=>setIsOpen(!isOpen)
            }["Navigation[<button>.onClick]"],
            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 181,
                columnNumber: 50
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 181,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        $[9] = isOpen;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t5 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between",
            children: [
                t3,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 189,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = `lg:hidden fixed inset-0 top-[73px] bg-white z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`;
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = navItems.map({
            "Navigation[navItems.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-border-warm pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item_0.href,
                            className: "text-2xl font-display text-text-primary mb-4 block",
                            onClick: {
                                "Navigation[navItems.map() > <Link>.onClick]": ()=>setIsOpen(false)
                            }["Navigation[navItems.map() > <Link>.onClick]"],
                            children: item_0.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 200,
                            columnNumber: 116
                        }, this),
                        item_0.megaMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-3 pl-4",
                            children: (item_0.megaMenu.items || item_0.megaMenu.grid)?.map({
                                "Navigation[navItems.map() > (anonymous)()]": (sub_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: sub_1.href,
                                        className: "text-sm text-text-secondary hover:text-accent-green",
                                        onClick: {
                                            "Navigation[navItems.map() > (anonymous)() > <Link>.onClick]": ()=>setIsOpen(false)
                                        }["Navigation[navItems.map() > (anonymous)() > <Link>.onClick]"],
                                        children: sub_1.title
                                    }, sub_1.title, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 203,
                                        columnNumber: 68
                                    }, this)
                            }["Navigation[navItems.map() > (anonymous)()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 202,
                            columnNumber: 100
                        }, this)
                    ]
                }, item_0.label, true, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 200,
                    columnNumber: 47
                }, this)
        }["Navigation[navItems.map()]"]);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col p-8 gap-6 h-full overflow-y-auto",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "mt-4 px-8 py-4 bg-accent-green text-white text-center font-medium rounded-sm",
                    onClick: {
                        "Navigation[<Link>.onClick]": ()=>setIsOpen(false)
                    }["Navigation[<Link>.onClick]"],
                    children: "Start a Project"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 214,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12 || $[19] !== t2 || $[20] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t2,
            children: [
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t2;
        $[20] = t8;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    return t13;
}
_s(Navigation, "K19pZuduYYfXmE1bVqktiRJtiJs=");
_c = Navigation;
function _NavigationNavItemsMapAnonymous2(sub_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: sub_0.href,
        className: "group/item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-semibold text-text-primary group-hover/item:text-accent-green transition-colors mb-1",
                children: sub_0.title
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 242,
                columnNumber: 75
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-text-secondary",
                children: sub_0.description
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 242,
                columnNumber: 207
            }, this)
        ]
    }, sub_0.title, true, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 242,
        columnNumber: 10
    }, this);
}
function _NavigationNavItemsMapAnonymous(sub) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: sub.href,
        className: "block group/item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-semibold text-text-primary group-hover/item:text-accent-green transition-colors mb-1",
                children: sub.title
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 245,
                columnNumber: 77
            }, this),
            "description" in sub && sub.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-text-secondary line-clamp-2",
                children: sub.description
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 245,
                columnNumber: 251
            }, this)
        ]
    }, sub.title, true, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 245,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollProgress() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "992b558584dc2c88adbce9582797ca7fe53fcd88c7af621bde03895cc77a117e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "992b558584dc2c88adbce9582797ca7fe53fcd88c7af621bde03895cc77a117e";
    }
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ScrollProgress[useEffect()]": ()=>{
                const handleScroll = {
                    "ScrollProgress[useEffect() > handleScroll]": ()=>{
                        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
                        const currentScroll = window.scrollY;
                        setWidth(currentScroll / totalScroll * 100);
                    }
                }["ScrollProgress[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["ScrollProgress[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = `${width}%`;
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-0 left-0 right-0 z-[60] h-[2px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full bg-accent-green transition-all duration-100 linear",
                style: {
                    width: t2
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollProgress.tsx",
                lineNumber: 41,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ScrollProgress.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_s(ScrollProgress, "4/nr7/glcmtQpNPa3y1HsyGlpKw=");
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_5f041e8e._.js.map