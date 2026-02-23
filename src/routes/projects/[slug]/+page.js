import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects.js';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return projects.map((p) => ({ slug: p.slug }));
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
}
