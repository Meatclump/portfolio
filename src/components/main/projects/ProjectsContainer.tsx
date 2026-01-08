import type { ReactNode } from "react"

interface ProjectsContainerProps {
    children?: ReactNode
}

const ProjectsContainer = ({ children }: ProjectsContainerProps) => {
    return (
        <section className="">
            <ul className="flex flex-col gap-6">
                {children}
            </ul>
        </section>
    )
}

export default ProjectsContainer