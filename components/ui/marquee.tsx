"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"

export type MarqueeProps = {
    items?: React.ReactNode[] // legacy API: explicit items
    children?: React.ReactNode // new ergonomic API: use children
    direction?: "left" | "right"
    step?: number // percentage step per tick (combined with speedFactor)
    intervalMs?: number // tick interval
    speedFactor?: number // multiplier for step
    gapClassName?: string // tailwind gap utility on track
    className?: string // wrapper classes
    pauseOnHover?: boolean
    ariaLabel?: string
    edgeFade?: boolean // apply edge fade with CSS mask-image
    fadeSize?: string // width of fade on each side, e.g., "10%" or "48px"
    offscreenPause?: boolean // pause marquee when not visible in viewport (IntersectionObserver)
    ioRootMargin?: string // IntersectionObserver rootMargin, e.g., "0px 0px -25% 0px"
    ioThreshold?: number | number[] // IntersectionObserver threshold
}

export default function Marquee({
    items,
    children,
    direction = "left",
    step = 0.5,
    intervalMs = 60,
    speedFactor = 0.8,
    gapClassName = "gap-4",
    className = "",
    pauseOnHover = true,
    ariaLabel,
    edgeFade = false,
    fadeSize = "10%",
    offscreenPause = true,
    ioRootMargin = "0px",
    ioThreshold = 0.1,
}: MarqueeProps) {
    const [offset, setOffset] = useState(0)
    const [paused, setPaused] = useState(false)
    const [reduced, setReduced] = useState(false)
    const [inView, setInView] = useState(true)
    const timerRef = useRef<number | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    // Normalize content to an array of nodes
    const contentItems = useMemo(() => {
        if (items && items.length) return items
        return React.Children.toArray(children).filter(Boolean)
    }, [items, children])

    const trackItems = useMemo(() => [...contentItems, ...contentItems], [contentItems])

    useEffect(() => {
        const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)")
        const set = () => setReduced(mq?.matches ?? false)
        set()
        const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
        try {
            mq?.addEventListener?.("change", handler)
        } catch {
            mq?.addListener?.(handler)
        }
        return () => {
            try {
                mq?.removeEventListener?.("change", handler)
            } catch {
                mq?.removeListener?.(handler)
            }
        }
    }, [])

    // Pause when offscreen using IntersectionObserver
    useEffect(() => {
        if (!offscreenPause) return
        if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return
        const el = wrapperRef.current
        if (!el) return
        const obs = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                setInView(entry.isIntersecting)
            },
            { root: null, rootMargin: ioRootMargin, threshold: ioThreshold }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [offscreenPause, ioRootMargin, ioThreshold])

    useEffect(() => {
        if (reduced || paused || (offscreenPause && !inView)) return
        timerRef.current = window.setInterval(() => {
            // Traverse half the track width (0%..50%) and wrap; apply speedFactor to step, not translate range.
            setOffset((prev) => (prev + step * speedFactor) % 50)
        }, intervalMs) as unknown as number
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current)
        }
    }, [reduced, paused, step, speedFactor, intervalMs, offscreenPause, inView])

    // Seamless loop across duplicated content (offset: 0..50):
    // - Left: translate from 0% toward -50%
    // - Right: translate from -50% toward 0%
    const translate = direction === "left"
        ? `translateX(-${offset.toFixed(3)}%)`
        : `translateX(${(-50 + offset).toFixed(3)}%)`

    // Optional edge fade using CSS mask-image
    const wrapperStyle = edgeFade
        ? ({
            WebkitMaskImage: `linear-gradient(to right, transparent 0, black ${fadeSize}, black calc(100% - ${fadeSize}), transparent 100%)`,
            maskImage: `linear-gradient(to right, transparent 0, black ${fadeSize}, black calc(100% - ${fadeSize}), transparent 100%)`,
        } as React.CSSProperties)
        : undefined

    return (
        <div
            ref={wrapperRef}
            className={["relative w-full overflow-hidden", className].filter(Boolean).join(" ")}
            aria-label={ariaLabel}
            onMouseEnter={() => pauseOnHover && setPaused(true)}
            onMouseLeave={() => pauseOnHover && setPaused(false)}
            style={wrapperStyle}
        >
            <div className={["inline-flex w-max", gapClassName].join(" ")}
                style={{ transform: translate, willChange: "transform" }}
            >
                {trackItems.map((node, i) => (
                    <div key={i} className="shrink-0">
                        {node}
                    </div>
                ))}
            </div>
        </div>
    )
}
