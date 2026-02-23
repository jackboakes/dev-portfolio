<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const project = $derived(data.project);
</script>

<article class="max-w-content">
	{#if project.image}
		<img
			src={project.image}
			alt={project.title}
			class="w-full rounded-lg mb-8 object-cover max-h-[400px]"
		/>
	{/if}

	<h1 class="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">{project.title}</h1>

	{#if project.liveUrl || project.githubUrl}
		<div class="flex gap-4 text-sm text-text-muted mb-8">
			{#if project.liveUrl}
				<a href={project.liveUrl} target="_blank" class="hover:text-accent transition-colors">
					Live Demo↗
				</a>
			{/if}
			{#if project.githubUrl}
				<a href={project.githubUrl} target="_blank" class="hover:text-accent transition-colors">
					GitHub↗
				</a>
			{/if}
		</div>
	{/if}

	<div class="space-y-4">
		{#each project.content as paragraph}
			<p class="text-base leading-relaxed">{paragraph}</p>
		{/each}
	</div>

	<a
		href="/"
		class="inline-block mt-12 text-sm text-text-muted hover:text-accent transition-colors"
	>
		← Back to projects
	</a>
</article>
