<script>
	/** @type {{ title: string, description: string, slug: string }} */
	let { title, description, slug, thumbnail } = $props();
</script>

<div
	class="group relative rounded-xl px-2 py-5 pr-4 transition-all duration-300 hover:bg-accent/[0.03] active:bg-accent/[0.08]"
>
<div class="flex items-start gap-4">
	
	<div class="flex items-center gap-4 flex-1">
		<img
			src={thumbnail}
			alt={title}
			class="h-10 w-10 rounded-md object-cover"
		/>
		
		<div class="flex-1">
			<h3
				class="text-base font-semibold text-text-body transition-colors group-hover:text-accent group-active:text-accent"
			>
				{title}
			</h3>
			<p class="mt-0.5 max-w-[450px] text-sm leading-relaxed text-text-muted">
				{description}
			</p>
		</div>
	</div>

	<span
		class="text-text-muted transition-all duration-200
		group-hover:translate-x-0.5 group-hover:-translate-y-0.5
		group-hover:text-accent group-active:text-accent"
	>
		↗
	</span>
</div>

	<a href="/projects/{slug}" class="absolute inset-0" aria-label="View {title}"></a>
</div>
