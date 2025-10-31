"use client"

import React from "react"
import clsx from "clsx"
import GradientText from "./gradient-text"

export type SectionHeaderProps = {
    title: string
    highlight?: string
    subtitle?: string
    align?: "left" | "center"
    onDark?: boolean
    className?: string
}

export default function SectionHeader({ title, highlight, subtitle, align = "center", onDark = false, className = "" }: SectionHeaderProps) {
    const baseText = onDark ? "text-white" : "text-[#1a1a1a]"
    const subText = onDark ? "text-white/80" : "text-gray-600"
    const alignCls = align === "center" ? "text-center mx-auto" : "text-left"

    return (
        <div className={clsx("w-full", alignCls, className)}>
            <h2 className={clsx("text-3xl md:text-5xl font-extrabold leading-tight", baseText)}>
                {highlight ? (
                    <>
                        {title} <GradientText from="from-[#2cc16f]" via="via-[#ff9700]" to="to-[#dc5f5f]">{highlight}</GradientText>
                    </>
                ) : (
                    title
                )}
            </h2>
            {subtitle && (
                <p className={clsx("mt-3 text-base md:text-lg max-w-3xl", subText)}>
                    {subtitle}
                </p>
            )}
        </div>
    )
}
