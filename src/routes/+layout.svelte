<script>
	import '../app.css';
</script>

<div class="mx-auto mt-14 max-w-content p-5 font-sans text-text-body md:p-10">
	<header class="mb-10 flex flex-col items-start justify-between md:flex-row md:items-start">
		<div class="identity">
			<h1 class="tracking-none font-serif text-4xl leading-none font-medium">
				<a href="/" class="transition-colors hover:text-accent">Jack Boakes</a>
			</h1>
			<p class="text-sm text-text-muted">Melbourne, Australia</p>
		</div>

		<nav class="mt-4 flex flex-row gap-6 text-sm text-text-muted md:mt-3 md:flex-row">
			<a href="/#projects" class="hover:text-accent">Projects</a>
			<a href="https://github.com/jackboakes" target="_blank" class="hover:text-accent">GitHub↗</a>
			<a
				href="https://www.linkedin.com/in/jack-boakes-92273b389/"
				target="_blank"
				class="hover:text-accent">LinkedIn↗</a
			>
			<a href="mailto:hello@jackboakes.com" class="hover:text-accent">Email↗</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer
		class="mt-20 flex justify-between border-t-1 border-text-muted pt-8 pb-10 text-sm text-text-muted"
	>
		<span>© 2026 Jack Boakes</span>
		<div class="flex gap-4">
			<a href="https://github.com/jackboakes" class="hover:text-accent">GitHub↗</a>
			<a
				href="https://www.linkedin.com/in/jack-boakes-92273b389/"
				target="_blank"
				class="hover:text-accent">LinkedIn↗</a
			>
			<a href="mailto:hello@jackboakes.com" class="hover:text-accent">Email↗</a>
		</div>
	</footer>
</div>
