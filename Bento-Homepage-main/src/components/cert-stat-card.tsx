"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { siteConfig } from "@/config/site";

export function CertStatCard() {
    // The user has 30+ total certifications.
    // Displaying 30+ hardcoded instead of array length.

    return (
        <GlassCard variant="panel" className="flex h-full flex-col items-center justify-center p-6 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center gap-3 z-10"
            >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-500/10 text-emerald-500 mb-2">
                    <Award size={32} />
                </div>
                <div className="text-center">
                    <span className="text-5xl font-bold tracking-tight text-text-primary block mb-1">
                        30+
                    </span>
                    <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
                        Certifications Done
                    </span>
                </div>
            </motion.div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl z-0" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-tint/5 rounded-full blur-2xl z-0" />
        </GlassCard>
    );
}
