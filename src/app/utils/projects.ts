import FinalProjectImg from '../assets/finalProject.png';

const projectsInfo: {
    projectTitle: string,
    resume: string,
    tecnologies: string,
    banner: any,
    url: string
}[] = [{
    projectTitle: "Controlador de Cobranças",
    resume: "Projeto realizado para controlar cobranças e clientes pagantes e indadimplentes",
    tecnologies: `NextJs, typeScript, express, nodeJs, postgreSQL`,
    banner: FinalProjectImg,
    url: 'https://appcobranca.netlify.app',
},
{
    projectTitle: "Social Media Api",
    resume: "Api para uma rede social com posts e interação entre usuários.",
    tecnologies: `Javascript, nodeJs, express, knexJs`,
    banner: FinalProjectImg,
    url: 'https://github.com/PedroRodriguesS5/Api-social-media',
},
{
    projectTitle: "ToDo List",
    resume: "To-do list desenvojava e spring boot",
    tecnologies: "Java, Spring Boot, maven, docker",
    banner: FinalProjectImg,
    url: 'https://github.com/PedroRodriguesS5/ToDo-List',
},
{
    projectTitle: "Delivery Api Project",
    resume: "Delivery Api para restaurantes e lanchonete",
    tecnologies: "NestJs, PrismaORM, typeScript, postgreSQL",
    banner: FinalProjectImg,
    url: 'https://github.com/PedroRodriguesS5/Delivery-Project',
},
{
    projectTitle: "Player Music",
    resume: "Player de música, realizado como trabalho academico no curso da cubos academy",
    tecnologies: "ReactJs, javaScript, css",
    banner: FinalProjectImg,
    url: 'https://github.com/PedroRodriguesS5/Delivery-Project',
},
    ]

export default projectsInfo