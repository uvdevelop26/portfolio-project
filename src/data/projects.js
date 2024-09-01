import { reactive } from "vue";

const projects = reactive([
    {
        id: 1,
        name: "Página de Ventas con SASS",
        image: "/images/loopstudio-desktop.png",
        github: "https://github.com/uvdevelop26/loopstudios-landing-page",
        live: "https://uvdevelop26.github.io/loopstudios-landing-page/",
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
    }
]);

export default projects;
