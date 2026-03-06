(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/our-work/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const categories = [
    "All",
    "Enterprise Management Platforms",
    "Monitoring & Evaluation Systems",
    "Custom Digital Tools"
];
const caseStudies = [
    {
        client: "Leading Multilateral Organization",
        title: "Global Humanitarian Early Warning System",
        description: "A multi-country platform consolidating 14 real-time data feeds to provide actionable early warnings 4–6 weeks ahead of crises.",
        category: "Enterprise Management Platforms",
        outcome: "4–6wk early lead time",
        href: "/case-study/early-warning-system",
        featured: true
    },
    {
        client: "Regional Intergovernmental Body",
        title: "Cross-Border MEAL Platform",
        description: "A centralized system for tracking 340+ developmental indicators across 15 member states in West Africa.",
        category: "Monitoring & Evaluation Systems",
        outcome: "70% faster reporting",
        href: "/case-study/regional-monitoring",
        featured: false
    },
    {
        client: "Continental Development Finance Institution",
        title: "Strategic Investment Portfolio Tracker",
        description: "Comprehensive dashboard for tracking $2.4B in infrastructure and social investments across multiple regions.",
        category: "Enterprise Management Platforms",
        outcome: "$2.4B portfolio tracked",
        href: "/case-study/portfolio-management",
        featured: false
    },
    {
        client: "Major International NGO",
        title: "Digital Beneficiary Accountability Portal",
        description: "Closing the loop with 1.2M program participants via integrated SMS and web-based feedback mechanisms.",
        category: "Custom Digital Tools",
        outcome: "1.2M participants",
        href: "/case-study/beneficiary-feedback",
        featured: false
    },
    {
        client: "Global Development Foundation",
        title: "Education Outcomes Tracking System",
        description: "Real-time monitoring of literacy programs and school attendance across 240 rural learning centers.",
        category: "Monitoring & Evaluation Systems",
        outcome: "240 schools tracked",
        href: "/case-study/education-tracking",
        featured: false
    },
    {
        client: "Pan-African Development Agency",
        title: "Regional Infrastructure Reporting Tool",
        description: "Strategic project management and reporting tool for continental infrastructure development initiatives.",
        category: "Custom Digital Tools",
        outcome: "Continental rollout",
        href: "/case-study/infrastructure-reporting",
        featured: false
    }
];
function OurWork() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "e52386fa159d0a6237558cfe80e983789cf3123e30255ad98585239d74ae7bfd") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e52386fa159d0a6237558cfe80e983789cf3123e30255ad98585239d74ae7bfd";
    }
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== activeFilter) {
        const filteredStudies = activeFilter === "All" ? caseStudies : caseStudies.filter({
            "OurWork[caseStudies.filter()]": (s)=>s.category === activeFilter
        }["OurWork[caseStudies.filter()]"]);
        const featured = filteredStudies.find(_OurWorkFilteredStudiesFind) || filteredStudies[0];
        const remaining = filteredStudies.filter({
            "OurWork[filteredStudies.filter()]": (s_1)=>s_1 !== featured
        }["OurWork[filteredStudies.filter()]"]);
        t5 = "bg-background min-h-screen pb-24 lg:pb-32";
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex gap-2 text-xs font-mono text-text-secondary uppercase tracking-widest mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-accent-green transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 84,
                                columnNumber: 182
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 84,
                                columnNumber: 262
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-text-primary",
                                children: "Our Work"
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 84,
                                columnNumber: 276
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/our-work/page.tsx",
                        lineNumber: 84,
                        columnNumber: 85
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-6xl lg:text-7xl text-text-primary mb-8 max-w-4xl tracking-tight animate-in",
                        children: "Proven outcomes for a world in transition."
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-work/page.tsx",
                        lineNumber: 84,
                        columnNumber: 333
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-text-secondary max-w-2xl leading-relaxed animate-in stagger-1",
                        children: "Explore our practice through the organizations we serve and the digital systems we've built to drive global impact."
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-work/page.tsx",
                        lineNumber: 84,
                        columnNumber: 489
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-work/page.tsx",
                lineNumber: 84,
                columnNumber: 12
            }, this);
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        const t8 = categories.map({
            "OurWork[categories.map()]": (cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "OurWork[categories.map() > <button>.onClick]": ()=>setActiveFilter(cat)
                    }["OurWork[categories.map() > <button>.onClick]"],
                    className: `text-sm font-medium transition-all relative ${activeFilter === cat ? "text-accent-green" : "text-text-secondary hover:text-text-primary"}`,
                    children: [
                        cat,
                        activeFilter === cat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-[2.4rem] left-0 right-0 h-[2px] bg-accent-green"
                        }, void 0, false, {
                            fileName: "[project]/src/app/our-work/page.tsx",
                            lineNumber: 92,
                            columnNumber: 240
                        }, this)
                    ]
                }, cat, true, {
                    fileName: "[project]/src/app/our-work/page.tsx",
                    lineNumber: 90,
                    columnNumber: 43
                }, this)
        }["OurWork[categories.map()]"]);
        if ($[11] !== t8) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 border-b border-border-warm pb-4 min-w-max",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/app/our-work/page.tsx",
                    lineNumber: 95,
                    columnNumber: 92
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/our-work/page.tsx",
                lineNumber: 95,
                columnNumber: 12
            }, this);
            $[11] = t8;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        t4 = "max-w-[1440px] mx-auto px-6 lg:px-12";
        t2 = "grid grid-cols-1 gap-8";
        t3 = featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: featured.href,
            className: "group bg-white border border-border-warm hover:border-accent-green transition-all animate-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-10 lg:p-16 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[10px] text-accent-green uppercase tracking-widest mb-4 group-hover:tracking-[0.2em] transition-all",
                                children: featured.client
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 103,
                                columnNumber: 250
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-4xl lg:text-5xl text-text-primary mb-6 group-hover:text-accent-green transition-colors",
                                children: featured.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 103,
                                columnNumber: 401
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-secondary text-lg mb-8 leading-relaxed",
                                children: featured.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 103,
                                columnNumber: 543
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-hover text-[10px] font-mono text-text-secondary rounded-full",
                                        children: featured.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/our-work/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 679
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-accent-gold text-white text-xs font-mono rounded-sm",
                                        children: featured.outcome
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/our-work/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 797
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 103,
                                columnNumber: 633
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2 text-accent-green text-sm font-semibold pt-4",
                                children: [
                                    "View Case Study ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/our-work/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 1012
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 103,
                                columnNumber: 909
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/our-work/page.tsx",
                        lineNumber: 103,
                        columnNumber: 191
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-hover/30 p-12 lg:p-24 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full aspect-square bg-white border border-border-warm shadow-md flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2 h-1/2 border-2 border-accent-green border-dashed rounded-full animate-[spin_20s_linear_infinite]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-work/page.tsx",
                                lineNumber: 103,
                                columnNumber: 1351
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/our-work/page.tsx",
                            lineNumber: 103,
                            columnNumber: 1235
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-work/page.tsx",
                        lineNumber: 103,
                        columnNumber: 1106
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-work/page.tsx",
                lineNumber: 103,
                columnNumber: 154
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/our-work/page.tsx",
            lineNumber: 103,
            columnNumber: 22
        }, this);
        t0 = "grid md:grid-cols-2 gap-8";
        t1 = remaining.map(_OurWorkRemainingMap);
        $[1] = activeFilter;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
    }
    let t8;
    if ($[13] !== t0 || $[14] !== t1) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/our-work/page.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[13] = t0;
        $[14] = t1;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t2 || $[17] !== t3 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/our-work/page.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[16] = t2;
        $[17] = t3;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t4 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t4,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/our-work/page.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[20] = t4;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t5 || $[25] !== t6 || $[26] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/our-work/page.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t5;
        $[25] = t6;
        $[26] = t7;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    return t11;
}
_s(OurWork, "AZRvGA5qNeOgBNoKkTmonibR1jE=");
_c = OurWork;
function _OurWorkRemainingMap(study, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: study.href,
        className: "group bg-white border border-border-warm p-10 hover:border-accent-green transition-all animate-in",
        style: {
            animationDelay: `${0.1 * idx}s`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-[10px] text-accent-green uppercase tracking-widest mb-4 group-hover:tracking-[0.2em] transition-all",
                children: study.client
            }, void 0, false, {
                fileName: "[project]/src/app/our-work/page.tsx",
                lineNumber: 169,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display text-2xl text-text-primary mb-4 group-hover:text-accent-green transition-colors",
                children: study.title
            }, void 0, false, {
                fileName: "[project]/src/app/our-work/page.tsx",
                lineNumber: 169,
                columnNumber: 154
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-text-secondary leading-relaxed mb-8",
                children: study.description
            }, void 0, false, {
                fileName: "[project]/src/app/our-work/page.tsx",
                lineNumber: 169,
                columnNumber: 281
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-3 py-1 bg-hover text-[10px] font-mono text-text-secondary rounded-full",
                    children: study.category
                }, void 0, false, {
                    fileName: "[project]/src/app/our-work/page.tsx",
                    lineNumber: 169,
                    columnNumber: 411
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/our-work/page.tsx",
                lineNumber: 169,
                columnNumber: 368
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center group/link",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1 bg-accent-gold/10 text-accent-gold text-[10px] font-mono rounded-sm font-semibold border border-accent-gold/20",
                        children: study.outcome
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-work/page.tsx",
                        lineNumber: 169,
                        columnNumber: 594
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono text-accent-green group-hover/link:underline",
                        children: "Explore →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-work/page.tsx",
                        lineNumber: 169,
                        columnNumber: 753
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-work/page.tsx",
                lineNumber: 169,
                columnNumber: 532
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/our-work/page.tsx",
        lineNumber: 167,
        columnNumber: 10
    }, this);
}
function _OurWorkFilteredStudiesFind(s_0) {
    return s_0.featured;
}
var _c;
__turbopack_context__.k.register(_c, "OurWork");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_our-work_page_tsx_10f086b6._.js.map