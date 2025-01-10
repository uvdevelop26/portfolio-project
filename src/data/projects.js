import { reactive } from "vue";

const projects = reactive([
    {
        id: 1,
        name: "Rastreador de IP con SASS",
        image: "/images/ip-address-tracker.png",
        github: "https://github.com/uvdevelop26/ip-address-tracker-master",
        live: "https://uvdevelop26.github.io/ip-address-tracker-master/",
    },
    {
        id: 2,
        name: "Plataforma E-learning con Laravel y Vue",
        image: "/images/elearningplatform.png",
        github: "https://github.com/uvdevelop26/e-learning-app",
        live: null,
    },
    {
        id: 3,
        name: "Visor de Productos con Vue y Tailwind",
        image: "/images/productviewer.jpg",
        github: "https://github.com/uvdevelop26/ecomerce-product-page",
        live: "https://ecommerceproductviewer.netlify.app/",
    },
    {
        id: 4,
        name: "Detector de Anomalías Cerebrales con Vue y Node",
        image: "/images/resonancia-project.png",
        github: "https://github.com/uvdevelop26/resonancia-project.git",
        live: null
    }
]);

export default projects;
