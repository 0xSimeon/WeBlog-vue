<template>
	<div id="app">
		<app-home></app-home>
	</div>
</template>

<script>
import Home from '@/views/Home.vue';
export default {
	components: {
		appHome: Home,
	},
};
</script>
<style lang="scss">
:root {
	--color-primary: #00a896;
	--color-secondary: #fc0;
	--color-tertiary: #f0f3bd;
	--color-blue: #05668d;
	--color-dave: #f0f3bd;
}

*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 62.5%;
	box-sizing: border-box;
}

body {
	font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4 {
	font-family: 'Merriweather', serif;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
