<template>
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
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

.none {
	text-decoration: none;
}
.link {
	text-decoration: none;
	color: var(--color-primary);
	position: relative;
	z-index: 1;
	display: inline-block;
	margin-left: 0.3rem;

	&:hover {
		color: #fff;
	}

	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: -0.25em;
		right: -0.25em;
		background-color: var(--color-secondary);
		transform-origin: bottom center;
		transform: scaleY(0.1);
		transition: all 0.1s ease-in-out;
	}

	&:hover::before {
		transform: scaleY(1);
		background-color: var(--color-blue);
		color: #fff;
	}
}
.btn {
	padding: 1rem 1.5rem;
	background: var(--color-primary);
	color: #fff;
	border: none;
	font-size: 2.5rem;
	cursor: pointer;
	transition: all 0.2s;
	display: inline-block;

	&:hover {
		background: var(--color-black);
	}
}

@media only screen and (min-width: 37.5em) {
	html {
		font-size: 62.5%;
	}
}
</style>
