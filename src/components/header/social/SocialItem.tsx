import type { ReactNode } from "react"

interface SocialItemProps {
    href: string
    children: ReactNode
}

const SocialItem = ({ href, children }: SocialItemProps) => {
    return (
        <li>
            <a
                href={href}
                className="text-3xl text-slate-400 hover:text-slate-200 motion-safe:transition-colors"
            >
                {children}
            </a>
        </li>
    )
}

export default SocialItem