import type { ReactNode } from "react"

interface NavContainerProps {
    children: ReactNode
}

const NavContainer = ({ children }: NavContainerProps) => {
    return (
        <nav className="mt-12">
            <ul className="flex flex-col gap-2">
                {children}
            </ul>
        </nav>
    )
}

export default NavContainer