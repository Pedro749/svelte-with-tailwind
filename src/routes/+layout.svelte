<script>
	import '../app.pcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

