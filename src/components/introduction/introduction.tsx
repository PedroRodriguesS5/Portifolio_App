import './introduction.css'
import Image from 'next/image';
import AiPhoto from '@/app/assets/aiPhoto.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { blueGrey } from '@mui/material/colors';
export default function Introduction() {
    return (
        <>
            <section className='flex 
            h-full 
            w-full 
            justify-center 
            items-center 
            text-lg 
            py-5'>
                <section className='flex flex-col gap-5 justify-center w-2/4 px-24'>
                    <div className='flex flex-col gap-5 w-full justify-center'>
                        <h2 id="gradiend-color" className="uppercase 
                    text-gradient-eyes
                    text-6xl w-4/4">Olá! Eu sou Pedro Rodrigues</h2>
                        <span className='uppercase 
                        text-2xl 
                        opacity-40'>Desenvolvedor de software full-stack!</span>
                    </div>
                    <div className='flex w-full  gap-5'>
                        <a href="https://www.linkedin.com/in/pedro-da-silva-856776245/"
                            target='_blank'>
                            <LinkedInIcon sx={{ fontSize: 45, color: blueGrey[500] }} />
                        </a>
                        <a href="https://github.com/PedroRodriguesS5" target='_blank'>
                            <GitHubIcon sx={{ fontSize: 45, color: blueGrey[500] }} />
                        </a>
                        <div className='flex '>
                            <button className=' 
                        rounded-lg 
                        bg-button-color
                        text-lg
                        p-2
                        text-gray-300'>Download CV</button>
                        </div>
                    </div>
                </section>
                <section className='flex justify-center w-2/4'>
                    <Image src={AiPhoto} alt="aiImage" className='rounded-full w-2/4' />
                </section>
            </section >
        </  >
    )
}