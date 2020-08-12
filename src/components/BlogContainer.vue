<template>
	<section class="container">
		<div class="container__post" v-for="(post, index) in posts" :key="index">
			<h3 class="container__post-title">
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>


        </h3>
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
			console.log(this.posts);
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
	box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.9);
	margin: 1rem auto;
	padding: 1.5rem;

	&__post {
		font-size: 2rem;
    &-title {
      padding: 1rem;
      margin-bottom: 2rem;
      border: 2px dashed var(--color-primary);
      border-radius: 4px;

    }
	}
}
</style>
