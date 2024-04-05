import { useGlobalContext } from "@/app/Context/project";
import tecnologies from "@/app/utils/technologies";
import Image from "next/image";


export default function TechsPage() {

    return (
        <div className="
        grid
        grid-cols-5
        grid-rows-2    
        items-center 
        w-full 
        py-24
        px-32
        gap-4
        bg-bg-secondary">
            {tecnologies.map((t, i: number) =>
                <div key={i} className="flex 
                flex-col 
                items-center 
                justify-center
                p-5
                w-48
                h-48
                bg-bg-primary ">
                    <Image src={t.imgTech} alt="aiImage" className="
                                    rounded-xl h-full"/>
                    <h2 className="opacity-40 text-lg">{t.tech}</h2>
                </div>
            )}
        </div>
    )
}