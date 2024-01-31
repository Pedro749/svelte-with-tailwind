<script>
	import ProjectCard from './ProjectCard.svelte';

	let projects = [
		{ name: 'Keyboard Cat' },
		{ name: 'Maru' },
		{ name: 'Maru' },
		{ name: 'Henri The Existential Cat' },
		{ name: 'Henri The Existential Cat' },
		{ name: 'Henri The Existential Cat' },
	];
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="My projects" />
</svelte:head>

<section class="bg-gray-900 text-white">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
		<div class="mx-auto max-w-lg text-center">
			<h2
				class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"
			>
				Kickstart your marketing
			</h2>

			<p class="mt-4 text-gray-300">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
				nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
			</p>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as { name }}
				<ProjectCard {name}></ProjectCard>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<a
				href="/"
				class="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
			>
				Get Started Today
			</a>
		</div>
	</div>
</section>
