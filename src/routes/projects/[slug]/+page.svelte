<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const project = $derived(data.project);
</script>

<article class="max-w-content">
	{#if project.image}
		<enhanced:img
			src={project.image}
			alt={project.title}
			class="mb-8 max-h-[400px] w-full rounded-lg object-cover"
		/>
	{/if}

	<h2 class="mb-4 text-sm font-semibold tracking-widest text-text-muted uppercase">
		{project.title}
	</h2>

	{#if project.liveUrl || project.githubUrl}
		<div class="mb-8 flex gap-4 text-sm text-text-muted">
			{#if project.liveUrl}
				<a
					href={project.liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-accent active:text-accent"
				>
					Live Demo↗
				</a>
			{/if}
			{#if project.githubUrl}
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-accent active:text-accent"
				>
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
		class="mt-12 inline-block text-sm text-text-muted transition-colors hover:text-accent active:text-accent"
	>
		← Back to projects
	</a>
</article>
