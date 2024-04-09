import { useGlobalContext } from "@/app/Context/project";
import tecnologies from "@/app/utils/technologies";
import Image from "next/image";


export default function TechsPage() {

    return (
        <div className="flex flex-col 
        items-center
        gap-24
        py-32
         bg-bg-secondary">
            <h2 className="text-4xl text-white font-bold">Tecnologias</h2>
            <div className="
        grid
        grid-cols-5
        grid-rows-2    
        items-center 
        w-full 
        px-32
        gap-4">
                {tecnologies.map((t, i: number) =>
                    <div key={i} className="flex 
                flex-col 
                items-center 
                justify-center
                p-5
                xl:w-48
                xl:h-48
                md:max-lg:w-24
                md:max-lg:h-32
                bg-bg-primary ">
                        <Image src={t.imgTech} alt="aiImage" className="
                                    rounded-xl h-full"/>
                        <h2 className="opacity-40 md:max-lg:text-sm
                        px-6 
                        xl:text-lg">{t.tech}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}