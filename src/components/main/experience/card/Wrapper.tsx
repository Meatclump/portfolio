import type { ReactNode } from "react"
import Skill from "./Skill"

interface CardWrapperProps {
	from: string
	to: string
	skills: string[]
	href: string
	children: ReactNode
}

const CardWrapper = ({ from, to, skills, href, children }: CardWrapperProps) => {
	return (
		<li className="group relative after:absolute after:inset-0 after:rounded hover:after:bg-slate-400/10 hover:cursor-pointer hover:after:shadow-xl motion-safe:transition-colors duration-300">
			<a href={href} className="flex gap-6 p-3">
				<div className="min-w-37.5">
					<p className="text-sm font-bold text-slate-500 pt-1">{from} — {to}</p>
				</div>
				<div className="flex flex-col">
					<div>
						{children}
					</div>
					<div className="flex flex-wrap gap-3">
						{skills.map((skill, index) => (
							<Skill key={index}>
								{skill}
							</Skill>
						))}
					</div>
				</div>
			</a>
		</li>
	)
}

export default CardWrapper