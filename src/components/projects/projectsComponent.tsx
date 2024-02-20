"use client";

import Image from "next/image";
import ProjectModal from '../projects/projectsModal'



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
        <main>
            <div className="flex 
        flex-col 
        w-full
        relative
        gap-5
        border-2
        rounded-xl
        ">
                <button className="flex justify-center items-center relative group">
                    <Image src={banner} alt="aiImage"
                        className='w-full h-full rounded-lg 
                    ' width={500} height={400} />
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
        </main>

    )
};

export default ProjectComponent;



{/* <div class="relative">
  <img src="sua-imagem.jpg" alt="Imagem de fundo" class="w-full h-full">
  <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
    <p class="text-white opacity-0 hover:opacity-100 transition-all duration-500">Seu texto aqui</p>
  </div>
</div> */}
