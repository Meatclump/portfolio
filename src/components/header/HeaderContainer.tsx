import type { ReactNode } from "react"

interface HeaderContainerProps {
    children?: ReactNode
}
const HeaderContainer = ({ children }: HeaderContainerProps) => {
    return (
        <header className="flex-1 flex flex-col px-12 py-16 lg:max-h-screen lg:sticky lg:top-0">
            {children}
        </header>
    )
}

export default HeaderContainer