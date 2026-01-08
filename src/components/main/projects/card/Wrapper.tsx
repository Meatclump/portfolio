import type { ReactNode } from "react"
import Skill from "../../experience/card/Skill"

interface CardWrapperProps {
	skills: string[]
	href: string
    image: string
	children: ReactNode
}

const CardWrapper = ({ skills, href, image, children }: CardWrapperProps) => {
	return (
		<li className="">
            <a href={href} className="flex gap-6 mb-6">
                <div className="min-w-50">
                    <img src={image} className="max-w-50" />
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