# Portafolio con Astro

Bienvenido al portafolio creado con Astro. Este template te permite mostrar todos tus proyectos con una interfaz moderna y atractiva. A continuación, encontrarás instrucciones sobre cómo usar este template, cómo agregar nuevos elementos al portafolio y detalles sobre las principales dependencias utilizadas.


![Portada](image-1.png)

## Tabla de Contenidos

1. [Uso](#uso)
2. [Formato de Datos para el Portafolio](#formato-de-datos-para-el-portafolio)
3. [Agregando Iconos con Iconify](#agregando-iconos-con-iconify)
4. [Tecnologías Usadas](#tecnologías-usadas)
5. [Diseño en Figma](#diseño-en-figma)
6. [Autor y Licencia](#autor-y-licencia)
7. [Errores e Incidencias](#errores-e-incidencias)
8. [Página de Inicio](#página-de-inicio)

## Uso

Para añadir nuevos elementos a tu portafolio, agrégalos en el archivo `/src/data/portfolioData.js`.

## Formato de Datos para el Portafolio

Los datos para tu portafolio deben seguir este formato:

```js
/**
 * @typedef PortfolioData
 * @property {string} imgSrc - URL de la imagen
 * @property {string} title - Título de la tarjeta
 * @property {string[]} skills - Array de tus habilidades, e.g., ['React', 'CSS', 'JavaScript']
 * @property {string} description - Descripción de la tarjeta
 * @property {string} demoURL - URL de una página demo
 * @property {string} repoURL - URL del repositorio, e.g., https://github.com/JERT2005/mi-proyecto
 * @property {string} anim - Animación que se reproducirá al cargar la tarjeta, e.g., fade-up, fade-right
 * @property {number} averageBrightness - Nivel de brillo del fondo de la tarjeta, e.g., 0.1
 */

/**
 * @type {PortfolioData[]}
 */
export const portfolioData = [
    {
        imgSrc: 'https://example.com/image.png',
        title: 'Restaurante',
        skills: ['React', 'StyledComponents'],
        description: 'Descripción del proyecto...',
        demoURL: 'https://example.com',
        repoURL: 'https://github.com/JERT2005/mi-proyecto',
        anim: 'fade-right',
    },
    // Más proyectos aquí
];

const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    React: 'skill-icons:react-dark',
    Astro: 'skill-icons:astro',
    CSS: 'skill-icons:css',
    Sass: 'skill-icons:sass',
    StyledComponents: 'skill-icons:styledcomponents',
    Bootstrap: 'skill-icons:bootstrap',
    Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Mapea portfolioData para incluir iconos de habilidades
 */
export const getPortfolioData = portfolioData.map((item) => ({
    ...item,
    skills: item.skills.map((skill) => skillIcons[skill]),
}));
Tecnologías Usadas
Este template utiliza varias tecnologías modernas para crear un portafolio altamente responsivo y visualmente atractivo:

Astro: Generador de sitios estáticos que permite usar frameworks como React, Vue y Svelte.
React: Biblioteca de JavaScript para construir interfaces de usuario, permite crear componentes reutilizables.
Tailwind CSS: Framework de CSS basado en utilidades para diseñar directamente en el marcado.
Styled Components: Librería para React que permite usar estilos a nivel de componente.
Iconify: Librería de iconos que proporciona acceso a miles de iconos de diferentes colecciones.
Diseño en Figma
Puedes ver y modificar el diseño de este template en Figma. Aquí está el enlace a Figma.

Autor y Licencia
Autor: Juan Esteban Rendon Torres (@JERT2005)
Licencia: UNLICENCED
Errores e Incidencias
Si encuentras algún error o tienes sugerencias, repórtalos aquí.

Página de Inicio
Para más información y documentación detallada, visita la página de inicio del proyecto.