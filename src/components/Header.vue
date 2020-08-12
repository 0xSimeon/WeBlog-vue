<template>
	<div>
		<header class="header">
			<img alt="Wejapa logo" class="header__logo" src="../assets/wejapa.png" />
			<h1 class="header__title">WeBlog</h1>
		</header>
		<h2>Trending Blog Posts: </h2>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>


.header {
	display: flex;
	align-items: center;
	padding: 2rem;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	&__logo {
		width: 60px;
		height: 60px;
		padding: 1rem;
	}
	&__title {
		font-size: 4rem;
		background: linear-gradient(var(--color-primary), var(--color-secondary));
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
}

h2 {
	font-size: 3rem;
	text-align: center;
	padding: 2.5rem;
	margin-top: 2rem; 
}
</style>
