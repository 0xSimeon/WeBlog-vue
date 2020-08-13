<template>
	<div class="home">
		<app-blog-container :limit="20"></app-blog-container>
	</div>
</template>

<script>
import BlogContainer from '@/components/BlogContainer.vue';

export default {
	name: 'Home',
	title() {
		return `Home | WeBlog`;
	},
	data() {
		return {};
	},
	components: {
		appBlogContainer: BlogContainer,
	},
};
</script>

<style lang="scss"></style>
