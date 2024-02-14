import './introduction.css'
import Image from 'next/image'
import AiPhoto from '@/app/assets/aiPhoto.jpg'
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
                <section className='flex justify-center w-2/4'>
                    <h2 id="gradiend-color" className="uppercase 
                    text-gradient-eyes
                    text-6xl w-3/4">Olá! Me chamo Pedro sou desenvolvedor full-stack </h2>
                </section>
                <section className='flex justify-center w-2/4'>
                    <Image src={AiPhoto} alt="aiImage" className='rounded-full w-2/4' />
                </section>
            </section>
        </  >
    )
}