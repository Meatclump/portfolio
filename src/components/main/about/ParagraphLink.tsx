import type { ReactNode } from "react"

interface ParagraphLinkProps {
    href: string
    children: ReactNode
}

const ParagraphLink = ({ href, children }: ParagraphLinkProps) => {
    return (
        <a
            href={href}
            className="font-bold text-slate-200 hover:text-teal-300 motion-safe:transition-colors"
        >
            {children}
        </a>
    )
}

export default ParagraphLink