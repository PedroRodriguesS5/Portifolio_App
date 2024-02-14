"use client"

import ProjectComponent from "../projects/projectsComponent"
import ProjectsInfo from "@/app/utils/projects"
export default function ProjectsPage() {
    return (
        <section className="flex gap-10 w-10/12">
            {ProjectsInfo.map((project) => (
                <ProjectComponent
                    key={project.id}
                    projectTitle={project.projectTitle}
                    banner={project.banner}
                    resume={project.resume}
                    tecnologies={project.tecnologies}
                    url={project.url} />
            ))
            }
        </section>
    )
}