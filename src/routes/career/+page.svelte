<script>
	import CareerCards from "./CareerCards.svelte";
</script>

<svelte:head>
	<title>Career</title>
	<meta name="description" content="About my career" />
</svelte:head>

<section class="bg-gray-900 text-white mx-auto">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
	  <div class="mx-auto max-w-lg text-center">
		<h2 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">What makes us special</h2>
	  </div>
  
	  <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">

		<CareerCards></CareerCards>
		<CareerCards></CareerCards>
		<CareerCards></CareerCards>
		<CareerCards></CareerCards>
		<CareerCards></CareerCards>
		<CareerCards></CareerCards>
	  </div>
	</div>
  </section>
  