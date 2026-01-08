import type { ReactNode } from "react"

interface NavContainerProps {
    children: ReactNode
}

const NavContainer = ({ children }: NavContainerProps) => {
    return (
        <nav className="flex flex-col gap-1">
            {children}
        </nav>
    )
}

export default NavContainer