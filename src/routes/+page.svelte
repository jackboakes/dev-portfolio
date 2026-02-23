<script>
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { projects } from '$lib/data/projects.js';
</script>

<section class="mt-10 mb-14 max-w-content">
    <p class="text-base leading-relaxed mb-6">
        Hey, I'm <span class="font-semibold text-text-body">Jack Boakes</span>, a final year Bachelor of
        Computer Science student. I'm interested in gameplay programming, graphics, tools and engine
        development. 
    </p>
    <p class="text-base leading-relaxed mb-6">
        Lately I've been working in C++ with raylib.
    </p>

</section>

<section id="projects">
	<h2 class="text-sm font-semibold uppercase tracking-widest text-text-muted mb-2">Projects</h2>

	<div class="grid">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>