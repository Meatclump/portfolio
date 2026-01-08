import type { ReactNode } from "react"

interface MainContainerProps {
    children?: ReactNode
}

const MainContainer = ({ children }: MainContainerProps) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default MainContainer