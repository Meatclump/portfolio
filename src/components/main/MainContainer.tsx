import type { ReactNode } from "react"

interface MainContainerProps {
    children?: ReactNode
}

const MainContainer = ({ children }: MainContainerProps) => {
    return (
        <main className="flex-1 flex flex-col gap-12 px-12 lg:py-16">
            {children}
        </main>
    )
}

export default MainContainer