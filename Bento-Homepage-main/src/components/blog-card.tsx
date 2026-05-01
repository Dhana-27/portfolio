"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Eye } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { siteConfig } from "@/config/site";

/* ============================================================
   Blog Card — Halo 2.x Public Content API
   ============================================================ */

    const blogConfig = siteConfig.blog;
    const posts = blogConfig?.posts ?? [];
    
    if (!blogConfig?.enabled) return null;

    return (
        <GlassCard variant="panel" className="flex flex-col gap-4 p-5 md:p-6 h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div
                        className="w-[26px] h-[26px] rounded-[8px] flex items-center justify-center shrink-0"
                        style={{ background: "rgba(var(--tint-rgb), 0.10)" }}
                    >
                        <BookOpen size={13} style={{ color: "var(--tint-color)" }} />
                    </div>
                    <h3 className="text-[14px] font-semibold text-text-primary tracking-tight">Blog</h3>
                </div>
                {blogConfig.posts && blogConfig.posts.length > 0 && (
                    <a
                        href="https://www.linkedin.com/in/dhanalakshmi-k-tech/recent-activity/all/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-0.5 text-[11px] font-medium text-text-tertiary hover:text-tint transition-colors duration-150"
                    >
                        View All
                        <ArrowUpRight
                            size={11}
                            className="opacity-70 transition-opacity duration-150 group-hover:opacity-100"
                        />
                    </a>
                )}
            </div>

            {/* Post List */}
            <div className="flex flex-col flex-1 gap-0.5 -mx-1">
                {posts.length > 0 ? (
                    posts.map((post, i) => (
                        <motion.a
                            key={post.url}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="prism-panel prism-interactive group relative flex flex-col gap-1 rounded-[14px] px-3 py-[10px]"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: i * 0.045,
                                type: "spring",
                                stiffness: 300,
                                damping: 26,
                            }}
                        >
                            {/* Content */}
                            <div className="flex flex-col flex-1 min-w-0">
                                <h4 className="text-[13px] font-semibold leading-snug line-clamp-1 transition-colors duration-150 text-text-primary group-hover:text-tint">
                                    {post.title}
                                </h4>
                                <p className="text-[12px] text-text-secondary leading-relaxed line-clamp-2 mt-0.5">
                                    {post.description}
                                </p>

                                {/* Meta row */}
                                <div className="flex items-center gap-1.5 mt-2">
                                    <span className="text-[11px] font-medium text-text-tertiary">
                                        {post.date || "LinkedIn Post"}
                                    </span>
                                    <span
                                        className="ml-auto flex items-center gap-1 text-[11px]"
                                        style={{ color: "var(--text-tertiary)", opacity: 0.55 }}
                                    >
                                        <ArrowUpRight size={12} />
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))
                ) : (
                    <p
                        className="text-[13px] py-6 text-center"
                        style={{ color: "var(--text-tertiary)", opacity: 0.55 }}
                    >
                        No posts yet
                    </p>
                )}
            </div>
        </GlassCard>
    );
}
