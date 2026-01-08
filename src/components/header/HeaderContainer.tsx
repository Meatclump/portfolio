import type { ReactNode } from "react"

interface HeaderContainerProps {
    children?: ReactNode
}
const HeaderContainer = ({ children }: HeaderContainerProps) => {
    return (
        <header className="flex flex-col">
            {children}
        </header>
    )
}

export default HeaderContainer