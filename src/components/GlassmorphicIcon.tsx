import React from "react";
import { LucideIcon } from "lucide-react";

interface GlassmorphicIconProps {
    icon: LucideIcon;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export function GlassmorphicIcon({ icon: Icon, className = "", size = "md" }: GlassmorphicIconProps) {
    const sizeClasses = {
        sm: {
            wrapper: "w-10 h-10 rounded-xl",
            icon: 18,
            blurOffset: "translate-x-[1px] translate-y-[1px] blur-[1.5px]"
        },
        md: {
            wrapper: "w-14 h-14 rounded-2xl",
            icon: 24,
            blurOffset: "translate-x-[1.5px] translate-y-[1.5px] blur-[2.5px]"
        },
        lg: {
            wrapper: "w-18 h-18 rounded-3xl",
            icon: 32,
            blurOffset: "translate-x-[2px] translate-y-[2px] blur-[3.5px]"
        }
    };

    const currentSize = sizeClasses[size];

    return (
        <div 
            className={`relative flex items-center justify-center bg-gradient-to-br from-blue-400/25 via-blue-500/10 to-blue-600/5 backdrop-blur-[8px] border border-blue-300/40 shadow-[0_8px_32px_0_rgba(4,51,211,0.12)] shadow-inner shadow-blue-300/25 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300 ${currentSize.wrapper} ${className}`}
        >
            {/* Glossy Reflection Highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
            
            {/* 3D Inner Shadow Drop */}
            <div className="absolute top-0.5 left-0.5 right-0.5 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl pointer-events-none" />

            {/* 3D Glow Back-Layer */}
            <Icon 
                size={currentSize.icon}
                className={`absolute text-blue-400/60 pointer-events-none ${currentSize.blurOffset}`} 
            />

            {/* Sharp Front-Layer */}
            <Icon 
                size={currentSize.icon} 
                className="relative text-[#0433D3] drop-shadow-[0_2px_8px_rgba(4,51,211,0.4)] transition-all duration-300 group-hover:text-blue-600" 
            />
        </div>
    );
}
