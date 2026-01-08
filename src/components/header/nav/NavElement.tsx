import type { ReactNode } from "react"
import { cn } from "../../../util/cn"

interface NavElementProps {
    href: string
    active: boolean
    children: ReactNode
}

const NavElement = ({ href, active, children } : NavElementProps) => {
    return (
        <a
            href={href}
            className={cn(
                "flex gap-2 items-center",
                active ? "text-slate-300" : "text-slate-500"
            )}
        >
            <span
                className={cn(
                    "flex border-b motion-safe:transition-[width]",
                    active ? "w-12" : "w-8"
                )}
            ></span>
            {children}
        </a>
    )
}

export default NavElement