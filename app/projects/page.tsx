"use client";

import Carousel from "../../components/Carrousel";

const projects = [
  {
    title: "Portfolio Website",
    description: "Un portafolio personal con Next.js y SCSS modules.",
    image: "/images/wallpaper1.jpg",
    demo: "https://miportafolio.com",
    code: "https://github.com/usuario/portfolio",
  },
  {
    title: "Weather App",
    description: "Aplicación del clima usando API de OpenWeather.",
    image: "/images/wallpaper1.jpg",
    demo: "https://weatherapp.com",
    code: "https://github.com/usuario/weatherapp",
  },
  {
    title: "Ecommerce Store",
    description: "Tienda online con carrito y pasarela de pagos.",
    image: "/images/wallpaper1.jpg",
    demo: "https://ecommerce.com",
    code: "https://github.com/usuario/ecommerce",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-center">Proyectos</h1>
      <Carousel projects={projects} />
    </section>
  );
}