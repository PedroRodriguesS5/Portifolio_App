import { Mail } from "@mui/icons-material";
import Image from "next/image";



export default function About() {
    return (
        <section className="
        flex
        flex-col
        justify-center
        items-center
        gap-12
        py-32
        w-full 
        bg-bg-secondary">
            <h2 className="text-4xl font-bold">Sobre Mim</h2>
            <div className="p-24 leading-10 text-xl opacity-70">
                <p>Olá! Sou um desenvolvedor full-stack há mais de um ano, especializado no desenvolvimento de aplicações web . Minhas habilidades incluem ReactJS, HTML, NextJs, TailwindCSS, NodeJS,
                    Java, Spring Boot, TypeScript e PostgreSQL para banco de dados.

                    Estou em constante busca por aprimoramento, com o objetivo de me especializar ainda mais no campo do desenvolvimento de software. Sou também entusiasta de jogos eletrônicos, futebol e música.

                    Entre em contato comigo e vamos trabalhar juntos!</p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center ">
                <p className="text-2xl">Me envie um e-mail</p>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank"
                    className="flex 
                gap-2 hover:underline text-button-color text-xl">
                    <Mail /><h2>pedroxbrs@gmail.com</h2>
                </a>
            </div>
        </section>
    )
}