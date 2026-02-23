<script>
  import "../app.css";
</script>


<div class="max-w-content mx-auto p-5 md:p-10 mt-14 font-sans text-text-body">
  <header class="flex flex-col md:flex-row justify-between items-start md:items-start mb-10">
    <div class="identity">
      <h1 class="text-4xl font-serif font-medium leading-none tracking-none">
        <a href="/" class="hover:text-accent transition-colors">Jack Boakes</a>
      </h1>
      <p class="text-sm text-text-muted">Melbourne, Australia</p>
    </div>
    
    <nav class="flex flex-row md:flex-row gap-6 mt-4 md:mt-3 text-sm text-text-muted">
      <a href="/#projects" class="hover:text-accent">Projects</a>
      <a href="https://github.com/jackboakes" target="_blank" class="hover:text-accent">GitHub↗</a>
      <a href="https://www.linkedin.com/in/jack-boakes-92273b389/" target="_blank" class="hover:text-accent">LinkedIn↗</a>
	  <a href="mailto:hello@jackboakes.com" class="hover:text-accent">Email↗</a>
    </nav>
  </header>
  

  <main>
    <slot />
  </main>

  <footer class="mt-20 pt-8 border-t-1 border-text-muted flex justify-between text-sm text-text-muted pb-10">
    <span>© 2026 Jack Boakes</span>
    <div class="flex gap-4">
      <a href="https://github.com/jackboakes" class="hover:text-accent">GitHub↗</a>
	  <a href="https://www.linkedin.com/in/jack-boakes-92273b389/" target="_blank" class="hover:text-accent">LinkedIn↗</a>
      <a href="mailto:hello@jackboakes.com" class="hover:text-accent">Email↗</a>
    </div>
  </footer>
</div>