import type { SiteConfig } from './src/lib/config.js';

export default {
	name: 'Scratch',
	description: 'A floating spreadsheet for macOS with formulas, notes and clipboard capture.',
	repo: 'https://github.com/rynf1t/scratch-site',
	origin: 'https://scratch.itsryan.me',
	install: 'make run',
	requirement: 'Run from a Scratch checkout with Swift 6 on macOS 14 or later.',
	status: 'Local preview',
	colours: { tint: 247, accent: 257 },
	hero: {
		title: 'A spreadsheet you can pull up anywhere',
		lead: 'Press ⌥ Space for a small grid over the app you’re in. Work out the numbers, jot down what they mean, and pick up where you left off.',
		image: {
			src: '/grid.webp',
			alt: 'Scratch showing a formula typed directly into the selected cell, with a SUM suggestion beneath it',
			width: 880,
			height: 660
		},
		link: { label: 'Open the Scratch guide', href: '/docs' }
	},
	sections: [
		{
			eyebrow: 'Keyboard',
			title: 'Stay in the grid',
			body: 'Type straight into a cell. Tab completes a formula suggestion or takes you to the next column. Open the command palette to find a command, jump to a cell or convert a unit.',
			link: { label: 'Grid and shortcuts', href: '/docs/grid' },
			items: [
				{ name: '⌥ Space', text: 'Show Scratch' },
				{ name: '⇧⌘P', text: 'Open the command palette' },
				{ name: '⌘J', text: 'Show notes' }
			]
		},
		{
			eyebrow: 'Capture',
			title: 'Bring numbers in from another app',
			body: 'Copy amounts or a screenshot and press ⌥⇧ Space. Scratch opens a new sheet. For screenshots, select a row to check the recognised amount against the source image.',
			link: { label: 'Capture and paste', href: '/docs/capture' }
		},
		{
			eyebrow: 'Notes',
			title: 'Keep the numbers with the explanation',
			body: 'Put live cells, tables or a chart beside your notes. Send the table and notes to today’s Obsidian daily note and update the saved sheet in one step.',
			link: { label: 'Notes and Obsidian', href: '/docs/notes-and-obsidian' }
		}
	],
	questions: [
		{ q: 'Can I download Scratch?', a: 'Scratch is a local preview. A public app download is still pending.' },
		{ q: 'Where do my sheets live?', a: 'Scratch saves the workbook and source images on your Mac. Screenshot recognition also runs on your Mac.' },
		{ q: 'Can I read these guides as Markdown?', a: 'Yes. Add `.md` to a guide URL, or start at [llms.txt](/llms.txt).' }
	],
	author: { label: 'by Ryan', href: 'https://itsryan.me' }
} satisfies SiteConfig;
