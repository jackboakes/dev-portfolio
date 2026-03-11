<script>
	import '../app.css';
</script>

<div class="mx-auto mt-14 max-w-content p-5 font-sans text-text-body md:p-10">
	<header class="mb-10">
		<div class="identity">
			<h1 class="tracking-none font-serif text-4xl leading-none font-medium mb-1">
				<a href="/" class="transition-colors hover:text-accent">Jack Boakes</a>
			</h1>
			<p class="text-sm text-text-muted">Melbourne, Australia</p>
		</div>
	</header>

	<main>
		<slot />
	</main>

	<footer
		class="mt-20 flex justify-between border-t-1 border-text-muted pt-8 pb-10 text-sm text-text-muted"
	>
		<span>© 2026 Jack Boakes</span>
		<div class="flex gap-4">
			<a
				href="https://github.com/jackboakes"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent"><span class="underline underline-offset-4">GitHub</span>↗</a
			>
			<a
				href="https://www.linkedin.com/in/jack-boakes-92273b389/"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent"><span class="underline underline-offset-4">LinkedIn</span>↗</a
			>
			<a
				href="mailto:hello@jackboakes.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent"><span class="underline underline-offset-4">Email</span>↗</a
			>
		</div>
	</footer>
</div>
