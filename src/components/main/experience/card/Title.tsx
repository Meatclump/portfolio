import type { ReactNode } from "react"
import { FaUpRightFromSquare } from "react-icons/fa6"

interface TitleProps {
    href: string
    children: ReactNode
}

const Title = ({ href, children }: TitleProps) => {
    return (
        <h3 className="text-slate-200">
            <a href={href} className="flex gap-3 items-center">
                {children} <FaUpRightFromSquare />
            </a>
        </h3>
    )
}

export default Title