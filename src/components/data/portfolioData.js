/**
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/yamatechColombia.png',
		title: 'Yamatech Colombia',
		skills: ['wordpress', 'CSS', 'HTML'],
		descripcion: 'Yamatech Colombia es un proyecto en el que participé, utilizando WordPress junto con HTML y CSS para crear su presencia en línea. El enfoque fue desarrollar un sitio web atractivo y funcional que refleje la identidad del restaurante y destaque sus servicios y productos de manera efectiva.',
		repoURL: 'https://yamatechcolombia.com',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/excelReferencia.jpg',
		title: 'Excel Macros',
		skills: ['Excel'],
		descripcion: 'Desarrollé un sistema de inventario personalizado para Reencauche utilizando macros en Excel. Este sistema permitió automatizar y agilizar el proceso de seguimiento y gestión de inventario, proporcionando una solución eficiente para mantener un registro preciso de los productos disponibles. La implementación de macros en Excel permitió realizar acciones específicas de forma rápida y automatizada, lo que mejoró significativamente la productividad y la exactitud en la gestión de inventario.',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/ReferenciaLlantaFacil.png',
		title: 'E-commerce montado',
		skills: ['wordpress', 'CSS', 'HTML'],
		descripcion: 'He completado el desarrollo de un e-commerce utilizando WordPress. Este proyecto implica la creación de una tienda en línea funcional y atractiva, utilizando tecnologías como WordPress, HTML y CSS para ofrecer una experiencia de compra fluida y segura para los usuarios.',
		demoURL: '',
		repoURL: 'https://llantafacil.co',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/AUFINE.png',
		title: 'Aufine Landing Page',
		skills: ['Astro', 'CSS', 'JavaScript'],
		descripcion: 'Actualmente también desarrollando varias landing pages de las marcas de la empresa, una de esas es esta',
		repoURL: 'https://aufinecolombia.co',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/ROYALBLACK.png',
		title: 'RoyalBlack Landing Page',
		skills: ['Astro', 'CSS', 'JavaScript'],
		descripcion: 'Actualmente también desarrollando varias landing pages de las marcas de la empresa, una de esas es esta',
		repoURL: 'https://royalblackcolombia.co',
		anim: 'fade-left',
	},
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
	wordpress: 'skill-icons:wordpress',
	HTML: 'skill-icons:html',
	Excel: 'skill-icons:excel',
	Php: 'skill-icons:php', // Agregado PHP
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		...item,
		skills: item.skills.map((skill) => skillIcons[skill] || skill),
	};
});
