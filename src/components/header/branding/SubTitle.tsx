import type { ReactNode } from "react"

interface SubTitleProps {
    children?: ReactNode
}
const SubTitle = ({children}: SubTitleProps) => {
    return (
        <h2 className="text-2xl text-slate-300 tracking-tight mb-4">
            {children}
        </h2>
    )
}

export default SubTitle