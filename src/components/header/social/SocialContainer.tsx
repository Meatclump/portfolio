import type { ReactNode } from "react"

interface SocialContainerProps {
    children: ReactNode
}

const SocialContainer = ({ children }: SocialContainerProps) => {
    return (
        <ul className="flex gap-3 text-slate-400 mt-auto">
            {children}
        </ul>
    )
}

export default SocialContainer