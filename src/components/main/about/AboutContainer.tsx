import type { ReactNode } from "react"

interface AboutContainerProps {
    children: ReactNode
}

const AboutContainer = ({ children }: AboutContainerProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default AboutContainer