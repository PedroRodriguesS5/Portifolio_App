'use client'
import { useGlobalContext } from "@/app/Context/project"
import projectsInfo from "@/app/utils/projects";
import Image from "next/image";
import { useEffect } from "react";

export default function ProjectModal() {
    const { data, setData } = useGlobalContext();

    useEffect(() => {
        setData({
            ...projectsInfo
        })
    })
    return (
        <>
            {data.map((p) =>
                <Image key={p.id} src={p.banner} alt="banner"></Image>
            )}
        </>
    )
}