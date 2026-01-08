import type { ReactNode } from "react"

interface HeadingProps {
    children: ReactNode
}

const Heading = ({ children }: HeadingProps) => {
    return (
        <h2 className="text-slate-200 font-semibold uppercase">
            {children}
        </h2>
    )
}

export default Heading