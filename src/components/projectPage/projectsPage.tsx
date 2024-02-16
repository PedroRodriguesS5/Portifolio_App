"use client"

import ProjectComponent from "../projects/projectsComponent"
import ProjectsInfo from "@/app/utils/projects"
export default function ProjectsPage() {
    return (
        <section className="flex flex-col gap-24
         items-center
         bg-bg-secondary py-32 px-10 w-full">
            <h1 className="text-4xl text-white font-bold uppercase">Projetos</h1>
            <div className="grid 
            grid-cols-3 
             gap-12 bg-bg-secondary px-12 w-full" >
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
            </div>
        </section>
    )
}