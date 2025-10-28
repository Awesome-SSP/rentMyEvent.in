"use client"

import React, { useEffect, useRef, useState } from "react"

type Row = { service: string; position: number | string }

const GROUPS: { title: string; rows: Row[] }[] = [
	{
		title: "Projector Results",
		rows: [
			{ service: "Projector on Rent in Delhi", position: 11 },
			{ service: "Projector on Rent Delhi NCR Starting @999", position: 220 },
			{ service: "Projector and Screen on Rent", position: 200 },
			{ service: "Hire Projector Delhi NCR", position: 150 },
			{ service: "Outdoor Projector Rental Near Me", position: 170 },
			{ service: "Projector Rentals in Delhi NCR", position: 165 },
		],
	},
	{
		title: "PA / Sound Results",
		rows: [
			{ service: "PA System on Rent in Delhi NCR", position: 500 },
			{ service: "Sound System on Rent in Gurgaon", position: 225 },
			{ service: "Rent Sound for Conference", position: 625 },
			{ service: "Order Sound System on Rent", position: 252 },
			{ service: "Conference Equipment Rental in India", position: 101 },
			{ service: "Rent Video Conference Equipment", position: 551 },
		],
	},
	{
		title: "Event Management Results",
		rows: [
			{ service: "Event Management in Gurgaon, Delhi NCR", position: 50 },
			{ service: "Best Corporate Event Companies in Delhi NCR", position: 25 },
			{ service: "Fashion Show Event Management", position: 70 },
			{ service: "Cultural Event Organisers in Delhi", position: 60 },
			{ service: "Exhibition & Stall Setup Services", position: 89 },
			{ service: "Brand Product Launch Event Planner", position: 70 },
		],
	},
]

function badgeClassFor(position: number | string) {
	if (typeof position !== "number") return "bg-pink-100/60 text-[#6B4E71] font-medium"
	if (position <= 25) return "bg-emerald-100/70 text-emerald-700 font-semibold"
	if (position <= 100) return "bg-amber-100/70 text-amber-700 font-semibold"
	return "bg-pink-100/60 text-[#FF6B9D] font-semibold"
}

export default function SearchResultsSection() {
	const ref = useRef<HTMLElement | null>(null)
	const [inView, setInView] = useState(false)
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

	useEffect(() => {
		const mq =
			typeof window !== "undefined" ? window.matchMedia?.("(prefers-reduced-motion: reduce)") : null
		setPrefersReducedMotion(mq?.matches ?? false)
		const mqHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
		try {
			mq?.addEventListener?.("change", mqHandler)
		} catch {
			mq?.addListener?.(mqHandler)
		}

		const el = ref.current
		if (!el) return
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true)
					obs.disconnect()
				}
			},
			{ threshold: 0.12 }
		)
		obs.observe(el)
		return () => {
			obs.disconnect()
			try {
				mq?.removeEventListener?.("change", mqHandler)
			} catch {
				mq?.removeListener?.(mqHandler)
			}
		}
	}, [])

	const CARD_DURATION = 900
	const CARD_STAGGER = 120
	const EASING = "cubic-bezier(.2,.8,.25,1)"

	return (
		<section
			ref={ref}
			className="diagonal-bg-purple py-16 md:py-24 relative"
			aria-label="Our Rent Results of December"
		>
			{/* Floating decorative elements */}
			<div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] opacity-15 blur-2xl animate-float pointer-events-none"></div>
			<div className="absolute bottom-20 right-5 w-20 h-20 rounded-full bg-gradient-to-br from-[#B3F0E8] to-[#FFB3D9] opacity-10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<header className="text-center mb-8 animate-fade-in-down">
					<h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#6B4E71]">OUR RENT RESULTS OF DECEMBER</h2>
					<p className="text-[#6B4E71] max-w-2xl mx-auto font-medium">
						Snapshot of SEO performance and ranking positions for our core services across Delhi & NCR.
						Positions shown are the best recorded for the period.
					</p>
					<p className="text-sm text-[#8B6B8D] mt-2 font-medium">Last updated: December</p>
				</header>

				<div className="grid gap-6 md:grid-cols-3">
					{GROUPS.map((group, gi) => {
						const groupDelay = gi * 80
						const cardStyle: React.CSSProperties = {
							opacity: inView || prefersReducedMotion ? 1 : 0,
							transform:
								inView || prefersReducedMotion ? "translateY(0) scale(1)" : "translateY(18px) scale(0.995)",
							transition: `opacity ${CARD_DURATION}ms ${EASING} ${groupDelay}ms, transform ${CARD_DURATION}ms ${EASING} ${groupDelay}ms`,
						}

						return (
							<article
								key={group.title}
								style={{ ...cardStyle, animationDelay: `${groupDelay}ms` }}
								className="rounded-2xl overflow-hidden transform-gpu card-hover-lift shadow-soft animate-slide-up"
							>
								{/* Premium light card */}
								<div
									className="bg-white border-2 border-pink-200 shadow-soft-lg"
									style={{ borderRadius: 16 }}
								>
									<div className="p-5 flex items-start justify-between gap-4 border-b border-pink-100">
										<div>
											<h3 className="text-lg font-bold text-[#6B4E71] leading-tight">
												{group.title}
											</h3>
											<p className="text-xs text-[#8B6B8D] mt-1 font-medium">Top service keywords & positions</p>
										</div>

										<div className="flex items-center gap-3">
											<div className="text-right">
												<div className="text-xs text-[#8B6B8D] font-medium">Top position</div>
												<div className="text-sm font-bold text-[#FF6B9D]">
													{
														group.rows
															.map((r) => (typeof r.position === "number" ? r.position : Infinity))
															.reduce((a, b) => Math.min(a, b), Infinity)
													}
												</div>
											</div>
											<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] flex items-center justify-center border border-pink-200 shadow-soft">
												<svg
													width="20"
													height="20"
													viewBox="0 0 24 24"
													fill="none"
													className="text-[#5a3a7a]"
												>
													<path
														d="M12 2v20M2 12h20"
														stroke="currentColor"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
										</div>
									</div>

									<div className="p-4 sm:p-6">
										<div className="overflow-x-auto">
											<table className="w-full text-left">
												<thead>
													<tr>
														<th className="text-sm text-[#6B4E71] font-bold pb-3">Services</th>
														<th className="text-sm text-[#6B4E71] font-bold pb-3">Position</th>
													</tr>
												</thead>
												<tbody className="divide-y divide-pink-100">
													{group.rows.map((row, ri) => {
														const rowDelay = (gi * 6 + ri) * CARD_STAGGER
														const rowStyle: React.CSSProperties = {
															opacity: inView || prefersReducedMotion ? 1 : 0,
															transform:
																inView || prefersReducedMotion
																	? "translateX(0) scale(1)"
																	: "translateX(8px) scale(0.997)",
															transition: `opacity ${CARD_DURATION}ms ${EASING} ${rowDelay}ms, transform ${CARD_DURATION}ms ${EASING} ${rowDelay}ms`,
														}
														const isTop = typeof row.position === "number" && row.position <= 50
														const badgeClass = badgeClassFor(row.position)
														return (
															<tr
																key={row.service}
																style={rowStyle}
																className="align-middle hover:bg-pink-50/30 transition-colors"
															>
																<td className="py-3 pr-4">
																	<div className="flex items-start gap-3">
																		<div className="mt-0.5">
																			<div
																				className={`inline-flex items-center justify-center w-8 h-8 rounded-md ${isTop ? "bg-emerald-100/80 text-emerald-700" : "bg-pink-100/60 text-[#FF6B9D]"
																					} text-sm font-bold`}
																			>
																				{typeof row.position === "number" && row.position <= 25
																					? "★"
																					: ri + 1}
																			</div>
																		</div>
																		<div>
																			<div className="text-sm text-[#6B4E71] font-semibold">
																				{row.service}
																			</div>
																			<div className="text-xs text-[#8B6B8D] mt-0.5 font-medium">
																				keyword visibility
																			</div>
																		</div>
																	</div>
																</td>

																<td className="py-3">
																	<div className="flex items-center justify-end">
																		<span
																			className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${badgeClass}`}
																		>
																			<span className="text-xs opacity-80">#</span>
																			<span>{row.position}</span>
																		</span>
																	</div>
																</td>
															</tr>
														)
													})}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</article>
						)
					})}
				</div>

				<footer className="mt-6 text-center text-xs text-gray-400">
					Positions are approximate and represent search visibility during December. Monitoring continues.
				</footer>
			</div>
		</section>
	)
}
