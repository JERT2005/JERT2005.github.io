/**
 * @typedef PortafolioData
 * @property {string} imgSrc Image URL
 * @property {string} title Card title
 * @property {string[]} skills Array of your skills, e.g., ['React', 'CSS', 'JavaScript']
 * @property {string} description The description of the card
 * @property {string} demoURL URL for a demo page
 * @property {string} repoURL URL of the repository, e.g., https://github.com/user/repo
 * @property {string} anim The animation that will run when the card loads, e.g., fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness How bright the background color of the card will be, e.g., 0.1
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
		description: 'I participated in creating the website for Yamatech Colombia using WordPress, HTML, and CSS. The goal was to effectively reflect the business identity through an attractive and functional website that highlights its products and services.',
		repoURL: 'https://yamatechcolombia.com',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/excelReferencia.jpg',
		title: 'Excel Macros',
		skills: ['Excel'],
		description: 'I developed an automated inventory management system for Reencauche using Excel macros, optimizing product tracking and improving efficiency in inventory processes.',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/AUFINE.png',
		title: 'Aufine Landing Page',
		skills: ['Astro', 'CSS', 'JavaScript'],
		description: 'I developed the landing page for Aufine Colombia, optimizing the presentation of the brand and its products to improve conversion and online visibility.',
		repoURL: 'https://aufinecolombia.com',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/ROYALBLACK.png',
		title: 'RoyalBlack Landing Page',
		skills: ['Astro', 'CSS', 'JavaScript'],
		description: 'I designed and developed the landing page for RoyalBlack Colombia, focusing on a smooth user experience to highlight its products and capture potential customers.',
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
 * @description Maps the portfolioData to include skill icons
 */
export const getPortafolioData = portafolioData.map((item) => 
{
	return {
		...item,
		skills: item.skills.map((skill) => skillIcons[skill] || skill),
	};
});
