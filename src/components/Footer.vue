<template>
	<footer class="footer">
		<p class="footer__text u-m">Copyright &copy; {{ getYear }}</p>
		<p class="footer__text u-m">
			Made with <i class="footer__coffee fas fa-coffee"></i> and <i class="fas fa-heart footer__heart pulse"></i> <br>by
			<a class="footer__link" href="https://simicodev2.netlify.app">Simeon Udoh</a>
		</p>
	</footer>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		getYear() {
			const date = new Date();
			const year = date.getFullYear();
			return year;
		},
	},
};
</script>

<style lang="scss" scoped>
.footer {
	margin-top: 4.5rem;

	&__text {
		font-size: 2rem;
		text-align: center;
		transition: all 0.2s;
	}

	&__heart {
		color: red;
	}

	&__coffee {
		color: var(--color-secondary);
	}

	&__heart,
	&__coffee {
		font-size: 2.5rem;
	}

	&__link {
		text-decoration: none;
		color: var(--color-primary);
		position: relative;
		z-index: 1;

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
			background-color: var(----color-secondary);
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
}

.pulse {
	-webkit-animation-name: pulse;
	animation-name: pulse;
}

@keyframes pulse {
	from {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}

	50% {
		-webkit-transform: scale3d(1.05, 1.05, 1.05);
		transform: scale3d(1.05, 1.05, 1.05);
	}

	to {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
}
</style>
