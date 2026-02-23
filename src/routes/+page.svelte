<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects.js';
</script>

<section class="mt-10 mb-14 max-w-content">
	<p class="mb-6 text-base leading-relaxed">
		Hey, I'm <span class="font-semibold text-text-body">Jack Boakes</span>, a final year Bachelor of
		Computer Science student at Deakin University. I'm interested in gameplay programming, graphics,
		tools and engine development.
	</p>
	<p class="mb-6 text-base leading-relaxed">Lately I've been working in C++ with raylib.</p>
</section>

<section id="projects">
	<h2 class="mb-2 text-sm font-semibold tracking-widest text-text-muted uppercase">Projects</h2>

	<div class="grid">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
