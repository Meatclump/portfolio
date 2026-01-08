import type { ReactNode } from "react"

interface HeadingProps {
    children: ReactNode
}

const Heading = ({ children }: HeadingProps) => {
    return (
        <h2 className="text-slate-200 font-semibold uppercase mb-8">
            {children}
        </h2>
    )
}

export default Heading