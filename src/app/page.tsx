"use client"

import ProjectsInfo from './utils/projects';
import ProjectComponent from '../components/projects/projectsComponent';
import Introduction from "@/components/introduction/introduction"
import ProjectsPage from '@/components/projectPage/projectsPage';


export default function Dashboard() {



    return (
        <>
            {/* <Loading /> */}
            <Introduction />
            <ProjectsPage />
        </>
    )
} 