"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { GlassCard } from "@/components/glass-card";
import { SPRING_GENTLE } from "@/lib/motion";

/**
 * Resolve asset paths.
 */

export function FriendsCard() {
    const { friends } = siteConfig;

    if (!friends || friends.length === 0) return null;

    return (
        <GlassCard variant="panel" className="flex h-full flex-col items-center justify-center gap-3 p-5 md:p-6">
            <div className="flex w-full items-center justify-between mb-1">
                <h3 className="text-[14px] font-semibold text-text-primary tracking-tight">
                    Licenses & Certifications
                </h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {friends.map((friend) => (
                    <motion.a
                        key={friend.name}
                        href={friend.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        variants={{
                            initial: { scale: 1 },
                            hover: { scale: 1.01 },
                            tap: { scale: 0.96 },
                        }}
                        transition={SPRING_GENTLE}
                    >
                        <motion.div
                            className="prism-avatar-disc relative h-12 w-12 overflow-hidden rounded-md bg-white/5 p-1 flex items-center justify-center"
                            variants={{
                                initial: {
                                    rotate: 0,
                                    scale: 1,
                                    transition: { type: "spring", stiffness: 200, damping: 24 },
                                },
                                hover: {
                                    rotate: 0,
                                    scale: 1.025,
                                    transition: { type: "spring", stiffness: 110, damping: 18 },
                                },
                                tap: {
                                    rotate: 0.5,
                                    scale: 0.94,
                                    transition: { type: "spring", stiffness: 300, damping: 22 },
                                },
                            }}
                        >
                            <img
                                src={friend.avatar}
                                alt={friend.name}
                                className="object-contain w-full h-full drop-shadow-sm"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                        <span className="text-[11px] font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200 text-center line-clamp-2 w-full leading-tight">
                            {friend.name}
                        </span>
                    </motion.a>
                ))}
            </div>
        </GlassCard>
    );
}
