import type { ReactNode } from "react"

interface TitleProps {
    children: ReactNode
}

const Title = ({ children }: TitleProps) => {
    return (
        <h2 className="text-slate-200 font-semibold uppercase mb-8">
            {children}
        </h2>
    )
}

export default Title