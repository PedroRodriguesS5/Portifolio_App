"use client"
import Image from "next/image";
import { useEffect } from "react";
import { useGlobalContext } from "@/app/Context/project";
import ProjectsInfo from "@/app/utils/projects";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@radix-ui/react-dialog";
import { Close } from "@mui/icons-material";
import { Button } from "../ui/button";

export default function ProjectsPage() {

    const { data, setData } = useGlobalContext();
    useEffect(() => {
        setData([
            ...ProjectsInfo
        ])
    }, [setData])
    return (
        <section className="flex flex-col gap-24
         items-center
         bg-bg-primary 
         py-32 
         px-10 
         w-full">
            <h1 className="text-4xl text-white font-bold">Projetos</h1>
            <div className="grid 
            grid-cols-3
            gap-12 
            bg-bg-primary
            w-full" >
                {data.map((project) =>
                    <Dialog key={project.id} >
                        <div className="
                            relative
                            border-2
                            rounded-xl
                            h-[300px]
                            w-[500px]
                            ">
                            <DialogTrigger asChild >
                                <Button className="
                                clear
                                bg-transparent
                                p-0
                                h-full
                                group">
                                    <Image src={project.banner} alt="aiImage" className="
                                    rounded-xl h-full w-[500px]"/>
                                    <div className="absolute 
                                        flex
                                        justify-center 
                                        inset-0
                                        rounded-xl 
                                        bg-black 
                                        bg-opacity-0 
                                        group-hover:bg-opacity-50
                                        transition-all 
                                        duration-500 
                                        items-center 
                                        ">
                                        <span className="text-white
                                            opacity-0 
                                            group-hover:opacity-100
                                            uppercase
                                            text-2xl
                                            transition-all 
                                            duration-500">{project.projectTitle}</span>
                                    </div>
                                </Button>
                            </DialogTrigger>
                            <DialogContent key={project.id} className="
                                 fixed 
                                 left-[50%] 
                                 top-[50%] 
                                 z-50  
                                 w-3/4  
                                 translate-x-[-50%] 
                                 translate-y-[-50%] 
                                 gap-4
                                 border
                                border-slate-200 
                                bg-bg-primary 
                                shadow-lg 
                                duration-200 
                                data-[state=open]:animate-in 
                                data-[state=closed]:animate-out 
                                data-[state=closed]:fade-out-0 
                                data-[state=open]:fade-in-0 
                                data-[state=closed]:zoom-out-95 
                                data-[state=open]:zoom-in-95 
                                data-[state=closed]:slide-out-to-left-1/2 
                                data-[state=closed]:slide-out-to-top-[48%] 
                                data-[state=open]:slide-in-from-left-1/2
                                data-[state=open]:slide-in-from-top-[48%] 
                                sm:rounded-lg 
                                ">
                                <section className="flex w-full 
                                gap-5
                                py-12 px-12">
                                    <DialogClose className="absolute top-2 right-2">
                                        <Button variant="ghost"><Close /></Button>
                                    </DialogClose>
                                    <div className="w-3/4">
                                        <Image src={project.banner} className="w-full h-full"
                                            alt="banner" />
                                    </div>
                                    <div className="flex 
                                    flex-col
                                    py-20
                                    px-12 
                                    gap-10
                                    w-2/4">
                                        <h2 className="text-xl uppercase">{project.projectTitle}</h2>
                                        <p>{project.resume}</p>
                                        <div className="flex flex-col gap-2">
                                            <hr />
                                            <h3>Tecnologias Usadas:</h3>
                                            <span className="
                                            opacity-50">{project.tecnologies}</span>
                                            <a href={project.url} className=" " target="_blank">
                                                URL:<span
                                                    className="text-button-color">
                                                    {project.url}
                                                </span></a>
                                        </div>
                                    </div>
                                </section>
                            </DialogContent>
                        </div>
                    </Dialog >
                )}
            </div >
        </section >
    )
}