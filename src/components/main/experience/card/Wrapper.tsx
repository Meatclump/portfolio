import type { ReactNode } from "react"
import Skill from "./Skill"

interface CardWrapperProps {
	from: string
	to: string
	skills: string[]
	children: ReactNode
}

const CardWrapper = ({ from, to, skills, children }: CardWrapperProps) => {
	return (
		<div className="flex gap-6">
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
		</div>
	)
}

export default CardWrapper