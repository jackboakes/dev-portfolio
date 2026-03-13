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
			class="mt-20 flex justify-between border-t border-text-muted/60 pt-8 pb-10 text-sm text-text-muted"
		>
			<span>© 2026 Jack Boakes</span>
			<div class="flex gap-5">
				<a
					href="mailto:hello@jackboakes.com"
					class="transition-colors hover:text-accent active:text-accent"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="md:hidden"
						><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
						></path><polyline points="22,6 12,13 2,6"></polyline></svg
					>
					<span class="hidden underline underline-offset-4 md:inline">Email</span><span
						class="hidden md:inline">↗</span
					>
				</a>
				<a
					href="https://www.linkedin.com/in/jack-boakes-92273b389/"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-accent active:text-accent"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="md:hidden"
						><path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"
						></circle></svg
					>
					<span class="hidden underline underline-offset-4 md:inline">LinkedIn</span><span
						class="hidden md:inline">↗</span
					>
				</a>
				<a
					href="https://github.com/jackboakes"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-accent active:text-accent"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="md:hidden"
						><path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						></path></svg
					>
					<span class="hidden underline underline-offset-4 md:inline">GitHub</span><span
						class="hidden md:inline">↗</span
					>
				</a>
			</div>
		</footer>
	</div>
</div>
