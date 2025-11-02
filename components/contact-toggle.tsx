"use client"

import React, { useEffect, useState } from "react"
import { Phone, Mail } from "lucide-react"
// Using the web component <dotlottie-player> loaded in app/layout.tsx

// Local JSX typing for the custom element to satisfy linters/typecheckers
declare global {
    namespace JSX { interface IntrinsicElements { 'dotlottie-player': any } }
}

const Dot: any = 'dotlottie-player'

type Props = {
    phone?: string
    whatsapp?: string
    email?: string
}

export default function ContactToggle({ phone = "+917065441547", whatsapp = "+917065441547", email = "rentmyevent@gmail.com" }: Props) {
    const [reduced, setReduced] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)")
        const onChange = () => setReduced(!!mq?.matches)
        onChange()
        try { mq?.addEventListener?.("change", onChange) } catch { mq?.addListener?.(onChange) }
        return () => { try { mq?.removeEventListener?.("change", onChange) } catch { mq?.removeListener?.(onChange) } }
    }, [])
    const WHATSAPP_TEXT = encodeURIComponent("Hi, I'm interested in your event services.")
    const tel = `tel:${phone}`
    const wa = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${WHATSAPP_TEXT}`
    const mail = `mailto:${email}`

    return (
        <>
            {/* Desktop / Tablet: vertical dock on left with padding */}
            <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-[70] print:hidden">
                <div className="flex flex-col items-center gap-3">
                    {/* Call */}
                    <a href={tel} aria-label="Call" className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] text-white hover:brightness-105 active:scale-95 transition`}>
                        {reduced ? (
                            <Phone className="w-6 h-6" />
                        ) : (
                            <Dot
                                src="https://assets-v2.lottiefiles.com/a/d06d5486-1177-11ee-b8d2-e705f11f27f7/rxihTzTPJW.lottie"
                                autoplay
                                loop
                                style={{ width: 34 as any, height: 34 as any, pointerEvents: "none" }}
                                aria-hidden="true"
                            />
                        )}
                    </a>
                    {/* WhatsApp */}
                    <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] bg-[#25D366] text-white hover:brightness-105 active:scale-95 transition`}>
                        {reduced ? (
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                                <path d="M19.11 17.37c-.26-.13-1.53-.76-1.76-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.31-1.55-1.46-1.81-.15-.26-.02-.4.11-.52.11-.11.26-.3.39-.46.13-.17.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.39-.8-1.9-.21-.5-.42-.43-.58-.43-.15 0-.32-.02-.49-.02-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.15 0 1.26.93 2.48 1.06 2.65.13.17 1.84 2.81 4.47 3.94.62.27 1.11.43 1.49.55.62.2 1.19.17 1.64.1.5-.07 1.53-.62 1.74-1.22.21-.6.21-1.11.15-1.22-.06-.11-.24-.17-.49-.29z" />
                                <path d="M16.02 5.33c-5.87 0-10.65 4.78-10.65 10.65 0 1.88.5 3.74 1.45 5.36L5.05 26.7l5.49-1.44c1.58.87 3.37 1.33 5.2 1.33 5.87 0 10.65-4.78 10.65-10.65 0-5.87-4.78-10.65-10.65-10.65zm0 19.36c-1.69 0-3.35-.45-4.8-1.31l-.34-.2-3.25.86.87-3.16-.21-.33c-.88-1.39-1.35-3-1.35-4.65 0-4.82 3.92-8.74 8.74-8.74s8.74 3.92 8.74 8.74-3.92 8.74-8.74 8.74z" />
                            </svg>
                        ) : (
                            <Dot
                                src="https://assets-v2.lottiefiles.com/a/33c74770-1151-11ee-973a-3bc111579927/8x48PYQa8Y.lottie"
                                autoplay
                                loop
                                style={{ width: 34 as any, height: 34 as any, pointerEvents: "none" }}
                                aria-hidden="true"
                            />
                        )}
                    </a>
                    {/* Email */}
                    <a href={mail} aria-label="Email" className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] bg-white text-[#0f172a] border border-gray-200 hover:bg-gray-50 active:scale-95 transition`}>
                        {reduced ? (
                            <Mail className="w-6 h-6" />
                        ) : (
                            <Dot
                                src="https://assets-v2.lottiefiles.com/a/4fb8aff2-1177-11ee-b8ff-434c121be977/QelDtDRVr2.lottie"
                                autoplay
                                loop
                                background="transparent"
                                style={{ width: 34 as any, height: 34 as any, pointerEvents: "none" }}
                                aria-hidden="true"
                            />
                        )}
                    </a>
                </div>
            </div>

            {/* Mobile: bottom horizontal bar (solid blackish-blue, no glass) */}
            <div className="md:hidden fixed inset-x-0 bottom-0 z-[70] print:hidden">
                <div className="w-full h-20 bg-[#0b1220] text-white border-t border-[#0f1a2e]" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
                    <nav className="grid grid-cols-3 items-stretch divide-x divide-[#0f1a2e]" role="navigation" aria-label="Quick contact">
                        {/* Call */}
                        <a href={tel} aria-label="Call" className="flex items-center justify-center h-20 hover:bg-[#0f1f3a] active:bg-[#0c1a33] transition">
                            {reduced ? (
                                <Phone className="w-7 h-7" />
                            ) : (
                                <Dot
                                    src="https://assets-v2.lottiefiles.com/a/d06d5486-1177-11ee-b8d2-e705f11f27f7/rxihTzTPJW.lottie"
                                    autoplay
                                    loop
                                    style={{ width: 42 as any, height: 42 as any, pointerEvents: "none" }}
                                    aria-hidden="true"
                                />
                            )}
                        </a>
                        {/* WhatsApp (larger) */}
                        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center h-20 hover:bg-[#0f1f3a] active:bg-[#0c1a33] transition">
                            {reduced ? (
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                                    <path d="M19.11 17.37c-.26-.13-1.53-.76-1.76-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.31-1.55-1.46-1.81-.15-.26-.02-.4.11-.52.11-.11.26-.3.39-.46.13-.17.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.39-.8-1.9-.21-.5-.42-.43-.58-.43-.15 0-.32-.02-.49-.02-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.15 0 1.26.93 2.48 1.06 2.65.13.17 1.84 2.81 4.47 3.94.62.27 1.11.43 1.49.55.62.2 1.19.17 1.64.1.5-.07 1.53-.62 1.74-1.22.21-.6.21-1.11.15-1.22-.06-.11-.24-.17-.49-.29z" />
                                    <path d="M16.02 5.33c-5.87 0-10.65 4.78-10.65 10.65 0 1.88.5 3.74 1.45 5.36L5.05 26.7l5.49-1.44c1.58.87 3.37 1.33 5.2 1.33 5.87 0 10.65-4.78 10.65-10.65 0-5.87-4.78-10.65-10.65-10.65zm0 19.36c-1.69 0-3.35-.45-4.8-1.31l-.34-.2-3.25.86.87-3.16-.21-.33c-.88-1.39-1.35-3-1.35-4.65 0-4.82 3.92-8.74 8.74-8.74s8.74 3.92 8.74 8.74-3.92 8.74-8.74 8.74z" />
                                </svg>
                            ) : (
                                <Dot
                                    src="https://assets-v2.lottiefiles.com/a/33c74770-1151-11ee-973a-3bc111579927/8x48PYQa8Y.lottie"
                                    autoplay
                                    loop
                                    style={{ width: 56 as any, height: 56 as any, pointerEvents: "none" }}
                                    aria-hidden="true"
                                />
                            )}
                        </a>
                        {/* Email */}
                        <a href={mail} aria-label="Email" className="flex items-center justify-center h-20 hover:bg-[#0f1f3a] active:bg-[#0c1a33] transition">
                            {reduced ? (
                                <Mail className="w-7 h-7" />
                            ) : (
                                <Dot
                                    src="https://assets-v2.lottiefiles.com/a/4fb8aff2-1177-11ee-b8ff-434c121be977/QelDtDRVr2.lottie"
                                    autoplay
                                    loop
                                    background="transparent"
                                    style={{ width: 42 as any, height: 42 as any, pointerEvents: "none" }}
                                    aria-hidden="true"
                                />
                            )}
                        </a>
                    </nav>
                </div>
            </div>
        </>
    )
}
