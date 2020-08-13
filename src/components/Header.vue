<template>
	<div>
		<header class="header">
			<router-link to="/" :class="['header__box']">
				<img alt="Wejapa logo" class="header__logo" src="../assets/wejapa.png" />
				<h1 class="header__title">WeBlog</h1>
			</router-link>
		</header>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	background: linear-gradient(var(--color-black), var(--color-black));
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 10;

	&__box {
		display: flex;
		align-items: center;
		padding: 1rem;
		opacity: 0.8;
		transition: all 0.2s;
		cursor: pointer;
		text-decoration: none;

		&:hover {
			opacity: 1;
		}
	}

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
</style>
