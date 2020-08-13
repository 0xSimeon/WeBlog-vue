<template>
	<footer class="footer">
		<p class="footer__text u-m">Copyright &copy; {{ getYear }}.</p>
		<p class="footer__text u-m">
			Made with <i class="footer__coffee fas fa-coffee"></i> and <i class="fas fa-heart footer__heart pulse"></i> <br>by
			<router-link :class="['footer__link link']" to="/author/simeon">Simeon Udoh.</router-link>
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
	background: var(--color-black);
	color: var(--color-tertiary);
	padding: 1rem;

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


}

.pulse {
	-webkit-animation-name: pulse;
	animation-name: pulse;
	animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
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
