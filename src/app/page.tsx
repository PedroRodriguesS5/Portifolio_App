"use client"

import Introduction from "@/components/introduction/introduction"
import ProjectsPage from '@/components/projectPage/projectsPage';
import TechsPage from "@/components/TechPage/TechPage";
import About from "@/components/about/about";



export default function Dashboard() {



    return (
        <>
            <Introduction />
            <About />
            <ProjectsPage />
            <TechsPage />

        </>

    )
} 