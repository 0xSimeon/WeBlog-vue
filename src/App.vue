<template>
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
	components: {
		appHeader: Header,
	},
	created() {
		document.cookie = 'cookie2=value2; SameSite=None; Secure';
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
	--color-black: rgba(0, 0, 0, 1);
}

*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 56.25%;
	box-sizing: border-box;
}

body {
	font-family: 'Raleway', sans-serif;
}

h1,
h2,
h3,
h4 {
	font-family: 'Merriweather', serif;
}
// utility classes
.u-ml {
	margin-left: 1.5rem;
}
.u-m {
	margin: 2rem auto;
}

.bold {
	font-weight: 600;
}

.rounded {
	border-radius: 3px;
}

.colored-text {
	background: var(--color-primary);
	color: #fff;
	padding: 1rem;
}

@media only screen and (min-width: 37.5em) {
	html {
		font-size: 62.5%;
	}
}
</style>
