import type { ReactNode } from "react"

interface HeaderContainerProps {
    children?: ReactNode
}
const HeaderContainer = ({ children }: HeaderContainerProps) => {
    return (
        <header className="flex-1 flex flex-col">
            {children}
        </header>
    )
}

export default HeaderContainer