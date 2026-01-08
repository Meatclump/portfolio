import type { ReactNode } from "react"

interface SkillProps {
    children: ReactNode
}

const Skill = ({ children }: SkillProps) => {
    return (
        <span className="text-sm text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full">{children}</span>
    )
}

export default Skill