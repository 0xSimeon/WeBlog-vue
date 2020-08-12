<template>
	<div class="home">
    <app-header></app-header>
		<app-blog-container :limit="20"></app-blog-container>

	</div>
</template>

<script>

import Header from '@/components/Header.vue'
import BlogContainer from '@/components/BlogContainer.vue'

export default {
	name: 'Home',
	data() {
		return {

    };
	},
	components: {
		appHeader: Header,
		appBlogContainer: BlogContainer
  },

};
</script>

<style lang="scss">

</style>
