"use client";

import Image from "next/image";


type ProjectComponentProps = {
    id?: number;
    projectTitle: string;
    banner: any;
    resume: string;
    tecnologies: string;
    url: string;
};

const ProjectComponent: React.FC<ProjectComponentProps> = ({
    id, projectTitle, banner, resume, tecnologies, url }) => {

    return (

        <div className="flex 
        flex-col 
        justify-center i
        items-center
        w-6/12
        gap-5
        bg-blue-400 h-96">
            <Image src={banner} alt="aiImage"
                className=' w-full' width={100} height={100} />
            <h2>{projectTitle}</h2>
            <p>{resume}</p>
        </div>

    )
};

export default ProjectComponent;

