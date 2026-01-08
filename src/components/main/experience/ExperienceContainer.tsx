import type { ReactNode } from "react"

interface ExperienceContainerProps {
    children: ReactNode
}

const ExperienceContainer = ({ children }: ExperienceContainerProps) => {
    return (
        <div className="flex flex-col gap-6">
            {children}
        </div>
    )
}

export default ExperienceContainer