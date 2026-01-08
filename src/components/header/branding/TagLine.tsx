import type { ReactNode } from "react"

interface TagLineProps {
    children?: ReactNode
}
const TagLine = ({children}: TagLineProps) => {
    return (
        <p className="text-slate-400 max-w-100">
            {children}
        </p>
    )
}

export default TagLine