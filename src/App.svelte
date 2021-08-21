<script>
	export let name;
	export let tel;
</script>

<section class="top">
	<h1>やあ、 こんにちは {name}よ!</h1>
	<p>電話番号は{tel}ですよね。</p>
</section>

<style>
	.top {
		text-align: center;
		padding: 1em;
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		.top {
			max-width: none;
		}
	}
</style>
