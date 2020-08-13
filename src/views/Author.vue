<template>
	<div class="author">
		<h2 class="author__name">About Author: {{ name }}</h2>
		<div class="author__bio">
			<img class="author__bio-img u-m" src="../assets/simeon.png" alt="Simeon Udoh" />
			<p class="author__bio-text">
				Hey, I am <strong> Simeon Udoh.</strong> I created this blog in my spare time while learning about <strong> Vue and how to build SPA
				(Single Page Applications)</strong> with it.
			</p>
			<p class="author__bio-text u-m">
				When I'm not coding / programming, I'm either trading the Bitcoin & Crypto markets or I'm playing video games
				with my brothers. I also cook and read books as well. Movies? I'm a big fan of series. My all time favs:
				<strong>Originals, Vampire Diaries, Teen wolf, Empire, Prison break, Money heist. etc</strong>
			</p>
			<h3 class="author__bio-heading u-m">Reach out... I'm available.</h3>
      <div class="author__bio-text">
			<p>
				Whether you want me to contribute to your paid / free project or you just want to get acquinted and be friends,
				feel free to reach out. I'd appreciate!
			</p>
			<p>
				<a href="https://simicodev2.netlify.app" target="_blank" rel="noreferrer" class="author__bio-link none"
					>Personal Website</a
				>
			</p>
			<p>
				<a href="https://twitter.com/TechviberNG" class=" author__bio-link none" target="_blank" rel="noreferrer">Twitter</a> |
				<a href="https://wa.me/2347063123702" class=" author__bio-link none">Whatsapp</a> |
				<a href="https://github.com/simeon4real" class=" author__bio-link none" target="_blank" rel="noreferrer">Github</a>
			</p>
      </div>
		</div>

    <router-link :class="['u-m btn none']" to="/">Go back to homepage</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: 'Simeon Udoh',
		};
  },

};
</script>

<style lang="scss" scoped>
.author {
	padding: 1rem;
	max-width: 70rem;
	width: 100%;
	margin: 10rem auto;

	&__name {
		font-size: 3.5rem;
		text-align: center;

	}

  &__name, &__bio-heading, &__bio-link {
    color: var(--color-primary);
  }

	&__bio {
		&-img {
			border-radius: 50%;
			-o-object-fit: cover;
			object-fit: cover;
			width: 232px;
			display: block;
			height: 260px;
		}

		&-text {
			font-size: 2rem;

      & > * {
        margin-top: 1.5rem;
      }
		}


    &-heading {
      font-size: 3rem;
      color: var(--color-primary);
    }

    &-link {
      color: var(--color-primary);
      font-weight: 600;
      transition: all .2s;
      border-bottom: 3px dashed var(--color-blue);

      &:hover {
        color: var(--color-black);
      }
    }
	}
}
</style>
