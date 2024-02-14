import FinalProjectImg from '../assets/finalProject.png'
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
    tecnologies: "NextJs, typeScript, express, nodeJs, postgreSQL",
    banner: FinalProjectImg,
    url: 'https://appcobranca.netlify.app',
},
{
    id: 2,
    projectTitle: "Social Media Api",
    resume: "Api para uma rede social com posts e interação entre usuários.",
    tecnologies: "JavaScript, nodeJs, express, knexJs",
    banner: '',
    url: 'https://github.com/PedroRodriguesS5/Api-social-media',
},
{
    id: 3,
    projectTitle: "ToDo List",
    resume: "To-do list desenvolvida em java e spring boot",
    tecnologies: "Java, Spring Boot, maven, docker",
    banner: '',
    url: 'https://github.com/PedroRodriguesS5/ToDo-List',
},
{
    id: 4,
    projectTitle: "Delivery Api Project",
    resume: "Delivery Api para restaurantes e lanchonete",
    tecnologies: "NestJs, PrismaORM, typeScript, postgreSQL",
    banner: '',
    url: 'https://github.com/PedroRodriguesS5/Delivery-Project',
},
    ]

export default projectsInfo