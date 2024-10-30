/**
 * @typedef PortafolioData
 * @property {string} imgSrc URL de la imagen
 * @property {string} title Título de la tarjeta
 * @property {string[]} skills Array de tus habilidades, por ejemplo, ['React', 'CSS', 'JavaScript']
 * @property {string} description La descripción de la tarjeta
 * @property {string} demoURL URL para una página de demostración
 * @property {string} repoURL URL del repositorio, por ejemplo, https://github.com/user/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, por ejemplo, fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Qué tan brillante será el color de fondo de la tarjeta, por ejemplo, 0.1
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
		description: 'Participé en la creación del sitio web de Yamatech Colombia utilizando WordPress, HTML y CSS. El objetivo fue reflejar de manera efectiva la identidad del negocio a través de un sitio web atractivo y funcional que destaca sus productos y servicios.',
		repoURL: 'https://yamatechcolombia.com',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/excelReferencia.jpg',
		title: 'Macros en Excel',
		skills: ['Excel'],
		description: 'Desarrollé un sistema automatizado de gestión de inventario para Reencauche utilizando macros en Excel, optimizando el seguimiento de productos y mejorando la eficiencia en los procesos de inventario.',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/AUFINE.png',
		title: 'Página de aterrizaje de Aufine',
		skills: ['Astro', 'CSS', 'JavaScript'],
		description: 'Desarrollé la página de aterrizaje para Aufine Colombia, optimizando la presentación de la marca y sus productos para mejorar la conversión y la visibilidad en línea.',
		repoURL: 'https://aufinecolombia.com',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/ROYALBLACK.png',
		title: 'Página de aterrizaje de RoyalBlack',
		skills: ['Astro', 'CSS', 'JavaScript'],
		description: 'Diseñé y desarrollé la página de aterrizaje para RoyalBlack Colombia, enfocándome en una experiencia de usuario fluida para resaltar sus productos y captar clientes potenciales.',
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
 * @description Mapea los datos del portafolio para incluir íconos de habilidades
 */
export const getPortafolioData = portafolioData.map((item) => 
{
	return {
		...item,
		skills: item.skills.map((skill) => skillIcons[skill] || skill),
	};
});
