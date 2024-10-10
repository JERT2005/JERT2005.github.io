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
export const portafolioData = 
[
	{
		imgSrc: '/img/yamatechColombia.png',
		title: 'Yamatech Colombia',
		skills: ['wordpress', 'CSS', 'HTML'],
		descripcion: 'Participé en la creación del sitio web de Yamatech Colombia utilizando WordPress, HTML y CSS. El objetivo fue reflejar la identidad del negocio de manera efectiva a través de una web atractiva y funcional que destaca sus productos y servicios.',
		repoURL: 'https://yamatechcolombia.com',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/excelReferencia.jpg',
		title: 'Excel Macros',
		skills: ['Excel'],
		descripcion: 'Desarrollé un sistema automatizado de gestión de inventario para Reencauche con macros en Excel, optimizando el seguimiento de productos y mejorando la eficiencia en los procesos de inventario.',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/AUFINE.png',
		title: 'Aufine Landing Page',
		skills: ['Astro', 'CSS', 'JavaScript'],
		descripcion: 'Desarrollé la landing page de Aufine Colombia, optimizando la presentación de la marca y sus productos para mejorar la conversión y visibilidad en línea.',
		repoURL: 'https://aufinecolombia.com',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/ROYALBLACK.png',
		title: 'RoyalBlack Landing Page',
		skills: ['Astro', 'CSS', 'JavaScript'],
		descripcion: 'Diseñé y desarrollé la landing page de RoyalBlack Colombia, enfocándome en una experiencia de usuario fluida para destacar sus productos y captar clientes potenciales.',
		repoURL: 'https://royalblackcolombia.com',
		anim: 'fade-left',
	},
];


const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Tailwind: 'skill-icons:tailwindcss-dark',
	wordpress: 'skill-icons:wordpress',
	HTML: 'skill-icons:html',
	

};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 */
export const getPortafolioData = portafolioData.map((item) => 
{
	return {...item, skills: item.skills.map((skill) => skillIcons[skill] || skill),
		   };
});
