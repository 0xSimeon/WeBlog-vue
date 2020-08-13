<template>
	<section>
		<h2>Trending <span class="rounded colored-text">Posts</span></h2>
		<div class="container">
			<div class="container__post" v-for="(post, index) in posts" :key="index">
				<h3 class="container__post-title rounded">
					<p>
						<router-link :class="['none']" :to="{ name: 'BlogPost', params: { id: post.id } }">
							<i class="far fa-newspaper"></i> {{ post.title }}</router-link
						> <br>
						&mdash; By <router-link :class="['none container__post-link']" to="/author/simeon">Simeon Udoh</router-link>
					</p>
				</h3>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			posts: [],
		};
	},
	async created() {
		try {
			const response = await axios.get('/posts');
			this.posts = response.data.splice(0, this.limit);
		} catch (error) {
			console.log(error);
		}
	},
	props: {
		limit: {
			type: Number,
			default: 15,
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	width: 95%;
	max-width: 70rem;
	margin: 1rem auto;
	padding: 1.5rem;

	&__post {
		font-size: 2rem;
		&-title {
			padding: 1rem;
			margin-bottom: 2rem;
			border: 2px dashed var(--color-primary);
		}

		&-link {
			font-size: 1.7rem;
			color: var(--color-primary);
			transition: all .2s;

			&:hover {
			color: 	var(--color-secondary);
			}
		}
	}
}

br {
	display: none;
}


h2 {
	font-size: 3rem;
	text-align: center;
	padding: 2.5rem;
	margin-top: 10rem;
}
</style>
