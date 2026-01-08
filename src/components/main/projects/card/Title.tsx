import type { ReactNode } from "react"
import { FaUpRightFromSquare } from "react-icons/fa6"

interface TitleProps {
    children: ReactNode
}

const Title = ({ children }: TitleProps) => {
    return (
        <h3 className="text-slate-200 flex gap-3 items-center">
            {children} <FaUpRightFromSquare />
        </h3>
    )
}

export default Title