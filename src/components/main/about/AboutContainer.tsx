import type { ReactNode } from "react"

interface AboutContainerProps {
    children: ReactNode
}

const AboutContainer = ({ children }: AboutContainerProps) => {
    return (
        <section>
            {children}
        </section>
    )
}

export default AboutContainer