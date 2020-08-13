<template>
	<section class="blog__post">
		<div class="blog__post-breadcrumb u-m">
			<p><router-link to="/">Home</router-link> > Posts > {{ id }}</p>
		</div>
		<h2 class="blog__post-title u-m">{{ postDetails.title | capitalize }}</h2>
		<p class="blog__post-meta u-m">
			<span class="">12 August, 2020.</span> &bullet;
			<span class="u-ml"><i class="far fa-comment"></i> {{ comments.length }} </span> &bullet;
			<span class="blog__post-meta-author"> by
				<router-link :class="['blog__post-meta-link none link']" to="/author/simeon">Simeon Udoh</router-link>
				 </span>
		</p>
		<img
			class="blog__post-img"
			loading="lazy"
			src="https://source.unsplash.com/collection/209138/"
			alt="Blog Post image"
		/>
		<p class="blog__post-body u-m">{{ postDetails.body }}</p>
		<p class="blog__post-body u-m">{{ postDetails.body | reverse }}</p>
		<p class="blog__post-body u-m">{{ postDetails.body }}</p>
		<p class="blog__post-body u-m">{{ postDetails.body | reverse }}</p>

		<p class="blog__post-body u-m">{{ postDetails.body }}</p>
		<p class="blog__post-body u-m">{{ postDetails.body | reverse }}</p>

		<p class="blog__post-body u-m">{{ postDetails.body }}</p>
		<p class="blog__post-body u-m">{{ postDetails.body | reverse }}</p>
		<hr />
		<div class="">
			<p class="blog__post-comments u-m bold">{{ comments.length }} Comments</p>
			<div v-for="(comment, index) in comments" :key="index" class="blog__post-comments-box u-m">
				<img
					class="blog__post-comments--img"
					src="https://source.unsplash.com/collection/2079070"
					alt="placeholder image"
				/>
				<div class="u-ml blog__post-comments-box--text">
					<p class="bold"><i class="fas fa-user-circle"></i> {{ comment.name }}</p>
					<p class="u-m bold"><i class="far fa-envelope"></i> {{ comment.email }}</p>
					<p class="u-m">{{ comment.body }}</p>
				</div>
			</div>
			<form action="" class="form">
				<h3 class="form__title">Leave a <span class="colored-text rounded u-m">reply</span></h3>

				<label for="name" class="u-m">Name</label>
				<input
					type="text"
					placeholder="This spot is for your name :)"
					name="name"
					v-model="userComment.name"
					id="name"
					class="rounded"
				/>

				<label for="name" class="u-m">Email</label>
				<input
					type="text"
					v-model="userComment.email"
					class="rounded"
					id="email"
					name="email"
					placeholder="Enter your email here"
				/>

				<label for="message" class="u-m">Your comment</label>
				<textarea
					name="body"
					id="body"
					v-model="userComment.body"
					placeholder="Hey, Simeon. great post! I like the fact that you..."
					rows="8"
					class="rounded"
				></textarea>
				<p v-if="error" class="form__error rounded u-m">Sorry, You have to fill all details to post a comment.</p>
				<p v-if="success" class="form__success rounded u-m">Voila! You comment was submitted successfully.</p>

				<button class="btn u-m rounded" @click.prevent="postComment">Submit Comment</button>
			</form>
		</div>
	</section>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			id: this.$route.params.id,
			postDetails: [],
			comments: [],
			userComment: {
				name: '',
				email: '',
				body: '',
			},
			error: false,
			success: false,
		};
	},
	methods: {
		async getPostDetails() {
			try {
				const response = await axios.get(`posts/${this.id}`);
				const comments = await axios.get(`posts/${this.id}/comments`);
				this.postDetails = response.data;
				this.comments = comments.data;
				// const localComment = localStorage.getItem('comment');
				if (!localStorage.getItem('comment')) {
					return;
				} else {
					const localComment = JSON.parse(localStorage.getItem('comment'));
					this.comments.push(localComment);
					console.log(typeof localComment);
				}

				console.log(this.comments);
			} catch (error) {
				console.log(error);
			}
		},
		postComment() {
			if (!this.userComment.email && !this.userComment.name && !this.userComment.messsage) {
				this.error = !this.error;

				setTimeout(() => {
					this.error = false;
				}, 2000);
				return;
			} else {
				this.success = !this.success;
				setTimeout(() => {
					this.success = false;
				}, 2000);
				this.comments.push(this.userComment);
				localStorage.setItem('comment', JSON.stringify(this.userComment));
				this.userComment = {
					name: '',
					email: '',
					body: '',
				};
			}
		},
	},
	created() {
		this.getPostDetails();
	},
	filters: {
		reverse(value) {
			return value
				.split('')
				.reverse()
				.join('');
		},
		capitalize(value) {
			if (value === '') return;
			value.toString();
			return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
		},
	},
};
</script>

<style lang="scss">
.blog__post {
	max-width: 72rem;
	width: 95%;
	margin: 1rem auto;
	border-top: 2px solid gray;
	&-breadcrumb {
		margin-top: 10rem;
		padding: 1rem;
		background: #e9ecef;
		font-size: 1.5rem;
		font-weight: 300;
	}
	&-title,
	.form__title {
		font-size: 3rem;
	}

	&-img {
		// max-width: 72rem;
		width: 100%;
		height: 20rem;
		object-fit: cover;
		filter: drop-shadow(2px 4px 6px black);
	}

	&-body,
	&-meta,
	.blog__post-comments-box--text,
	label,
	.form__btn,
	.form__error,
	.form__success {
		font-size: 2rem;
	}

	&-body {
		margin-top: 2rem;
		font-weight: 300;
	}

	&-comments-box {
		display: flex;
	}

	&-comments {
		font-size: 3rem;
		margin-top: 2rem;

		&--img {
			width: 4.5rem;
			height: 4.5rem;
			object-fit: cover;
			border-radius: 50%;
		}
	}

	&-meta {
		display: flex;
		padding: 0.2rem;
		flex-flow: row wrap;



		&-link {
			color: var(--color-primary);
			transition: color .2s;

			&:hover {
				color: var(--color-tertiary);
			}
		}
	}
}

.form {
	& > input,
	textarea {
		padding: 1.5rem;
		width: 100%;
		margin: 0 auto;
		border: 2px solid var(--color-primary);
		display: block;
		font-family: inherit;
		font-size: 2rem;

		&:focus {
			border: 2px solid var(--color-blue);
			outline: none;
		}
	}

	& label {
		display: block;
	}


	
	&__error,
	&__success {
		color: #fff;
		padding: 1rem;
	}
	&__error {
		background: rgba(182, 21, 21, 0.637);
	}

	&__success {
		background: var(--color-primary);
	}
}

hr {
	margin-top: 2rem;
}

.pulse {
	-webkit-animation-name: pulse;
	animation-name: pulse;
}

// ANIMATION:

@-webkit-keyframes pulse {
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
/* PULSE */
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

@media only screen and (min-width: 37.5em) {
	.blog__post {
		&-img {
			height: 40rem;
		}

		&-title {
			font-size: 3.5rem;
		}

		&-body {
			font-size: 2rem;
		}

		&-meta-author {
			margin-left: 1.5rem;
		}

		&-comments-box {
			&--text > * {
				margin: 1.5rem;
			}

			&--text:not(first-child) {
				margin: 0 1.5rem;
			}
		}

		&-comments {
			&--img {
				width: 6rem;
				height: 6rem;
			}
		}
	}
}
</style>
