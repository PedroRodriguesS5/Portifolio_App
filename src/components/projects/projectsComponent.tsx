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
        w-full
        gap-5
        border-2
        rounded-xl
        bg-bg-primary ">
            <button className="flex justify-center">
                <span className="invisible 
                hover:visible
                h-full
                w-full">Veja Mais</span>
                <Image src={banner} alt="aiImage"
                    className='w-full h-64 rounded-lg
                hover:opacity-50' width={500} height={400} />
            </button>
            {/* <div className="flex 
            
            flex-col 
            text-xl 
            py-5
            text-text-color
            items-center
            gap-5">
                <h2 className="text-xl font-bold uppercase">{projectTitle}</h2>
                <p className="w-3/4 text-justify text-lg">{resume}</p>
                <p className="w-2/4 
                opacity-40
                text-justify 
                text-sm">{tecnologies}</p>
            </div>
            <button className="py-5 hover:text-primary">
                <a href="" className="">
                    Link Teste
                </a>
            </button> */}
        </div>

    )
};

export default ProjectComponent;

