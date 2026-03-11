<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects.js';
</script>

<section class="mt-6 mb-14 max-w-content">
	<p class="mb-6 text-base leading-relaxed">
		Hey, I'm Jack, a final year Bachelor of Computer Science student at Deakin University focused on
		gameplay programming, tools and engine development. I enjoy building stuff from scratch and
		getting into the details.
	</p>
	<p class="mb-6 text-base leading-relaxed">
		In my spare time, I enjoy working on side projects &mdash; mostly games, reading books, and
		lately I've been programming in C++ with raylib.
	</p>
	<p class="mb-6 text-base leading-relaxed">
		Feel free to contact me via
		<a href="mailto:hello@jackboakes.com" target="_blank" rel="noopener noreferrer" class="hover:text-accent"><span class="underline underline-offset-4">Email</span>↗</a>, or find me on
		<a href="https://www.linkedin.com/in/jack-boakes-92273b389/" target="_blank" rel="noopener noreferrer" class="hover:text-accent"><span class="underline underline-offset-4">LinkedIn</span>↗</a> and
		<a href="https://github.com/jackboakes" target="_blank" rel="noopener noreferrer" class="hover:text-accent"><span class="underline underline-offset-4">GitHub</span>↗</a>.
	</p>
</section>

<section id="projects">
	<h2 class="mb-2 text-sm font-semibold tracking-widest text-text-muted uppercase">Projects</h2>

	<div class="grid">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
