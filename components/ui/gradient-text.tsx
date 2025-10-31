"use client"

import React from "react"
import clsx from "clsx"

export type GradientTextProps = {
    children: React.ReactNode
    from?: string
    via?: string
    to?: string
    className?: string
}

export default function GradientText({ children, from = "from-[#2cc16f]", via, to = "to-[#dc5f5f]", className = "" }: GradientTextProps) {
    return (
        <span
            className={clsx(
                "bg-clip-text text-transparent bg-gradient-to-r",
                from,
                via,
                to,
                className,
            )}
        >
            {children}
        </span>
    )
}
