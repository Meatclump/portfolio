import type { ReactNode } from "react"

interface ParagraphProps {
    children: ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => {
    return (
        <p className="text-slate-400 mb-4">
            {children}
        </p>
    )
}

export default Paragraph