import type { ReactNode } from "react"

interface TitleProps {
    children?: ReactNode
}
const Title = ({children}: TitleProps) => {
    return (
        <h1 className="text-6xl text-slate-300 font-bold tracking-tight mb-3">
            {children}
        </h1>
    )
}

export default Title