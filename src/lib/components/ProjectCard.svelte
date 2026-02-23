<script>
	/** @type {{ title: string, description: string, slug: string }} */
	let { title, description, slug } = $props();
</script>

<div class="group relative py-5 px-2 rounded-xl hover:bg-accent/[0.03] transition-all duration-300">
	<div class="flex justify-between items-start">
		<div class="flex-1">
			<h3 class="text-base font-semibold text-text-body group-hover:text-accent transition-colors">
				{title}
			</h3>
			<p class="text-text-muted text-sm leading-relaxed mt-0.5 max-w-[450px]">
				{description}
			</p>
		</div>

		<span
			class="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
		>
			↗
		</span>
	</div>

	<a href="/projects/{slug}" class="absolute inset-0" aria-label="View {title}"></a>
</div>
