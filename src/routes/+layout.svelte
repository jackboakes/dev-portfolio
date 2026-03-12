<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="mx-auto max-w-content p-5 font-sans text-text-body md:p-10">
	<header class="mt-14 mb-10" style="view-transition-name: site-header">
		<div class="identity">
			<h1 class="tracking-none mb-3 font-serif text-4xl leading-none font-extrabold">
				<a href="/" class="transition-colors hover:text-accent active:text-accent">Jack Boakes</a>
			</h1>
			<p class="text-sm text-text-muted">Melbourne, Australia</p>
		</div>
	</header>
	<div class="page" style="view-transition-name: page">
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
					class="hover:text-accent active:text-accent"
					><span class="underline underline-offset-4">GitHub</span>↗</a
				>
				<a
					href="https://www.linkedin.com/in/jack-boakes-92273b389/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-accent active:text-accent"
					><span class="underline underline-offset-4">LinkedIn</span>↗</a
				>
				<a
					href="mailto:hello@jackboakes.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-accent active:text-accent"
					><span class="underline underline-offset-4">Email</span>↗</a
				>
			</div>
		</footer>
	</div>
</div>
