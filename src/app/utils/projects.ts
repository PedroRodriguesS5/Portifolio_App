import FinalProjectImg from '../assets/finalProject.png';

const projectsInfo: {
    id: number,
    projectTitle: string,
    resume: string,
    tecnologies: string,
    banner: any,
    url: string
}[] = [{
    id: 1,
    projectTitle: "Controlador de Cobranças",
    resume: "Projeto realizado para controlar cobranças e clientes pagantes e indadimplentes",
    tecnologies: `NextJs, typeScript, express, nodeJs, postgreSQL`,
    banner: FinalProjectImg,
    url: 'https://appcobranca.netlify.app',
},
{
    id: 2,
    projectTitle: "Social Media Api",
    resume: "Api para uma rede social com posts e interação entre usuários.",
    tecnologies: `Javascript, nodeJs, express, knexJs`,
    banner: FinalProjectImg,
    url: 'https://github.com/PedroRodriguesS5/Api-social-media',
},
{
    id: 3,
    projectTitle: "ToDo List",
    resume: "To-do list desenvolvida em java e spring boot",
    tecnologies: "Java, Spring Boot, maven, docker",
    banner: FinalProjectImg,
    url: 'https://github.com/PedroRodriguesS5/ToDo-List',
},
{
    id: 4,
    projectTitle: "Delivery Api Project",
    resume: "Delivery Api para restaurantes e lanchonete",
    tecnologies: "NestJs, PrismaORM, typeScript, postgreSQL",
    banner: FinalProjectImg,
    url: 'https://github.com/PedroRodriguesS5/Delivery-Project',
},
{
    id: 5,
    projectTitle: "Player Music",
    resume: "Player de música, realizado como trabalho academico no curso da cubos academy",
    tecnologies: "ReactJs, javaScript, css",
    banner: FinalProjectImg,
    url: 'https://github.com/PedroRodriguesS5/Delivery-Project',
},
    ]

export default projectsInfo