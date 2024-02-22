"use client"
import Image from "next/image";
import { useEffect } from "react";
import { useGlobalContext } from "@/app/Context/project";
import ProjectsInfo from "@/app/utils/projects";
import ProjectModal from "./projectsModal";

export default function ProjectsPage() {

    const { data, setData } = useGlobalContext();
    useEffect(() => {
        setData([
            ...ProjectsInfo
        ])
    })
    return (
        <section className="flex flex-col gap-24
         items-center
         bg-bg-secondary 
         py-32 
         px-10 
         w-full">
            <h1 className="text-4xl text-white font-bold uppercase">Projetos</h1>
            <div className="grid 
            grid-cols-3 
            gap-12 bg-bg-secondary px-12 w-full" >
                {data.map((project) =>
                    <div key={project.id} className="flex 
                flex-col 
                w-full
                relative
                gap-5
                border-2
                rounded-xl
                ">
                        <button
                            className="flex justify-center items-center relative group">
                            <Image src={project.banner} alt="aiImage"
                                className="w-full h-full rounded-lg"
                                width={500}
                                height={400} />
                            <div className="absolute inset-0 bg-black 
                        bg-opacity-0 
                        group-hover:bg-opacity-50
                        transition-all 
                        duration-500 
                        flex items-center 
                        justify-center">
                                <span className="text-white
                            opacity-0 
                            group-hover:opacity-100
                            uppercase
                            text-2xl
                            transition-all 
                            duration-500">Veja mais</span>
                            </div>
                        </button>
                    </div>

                )}
                {/* <ProjectModal /> */}
            </div>
        </section>
    )
}