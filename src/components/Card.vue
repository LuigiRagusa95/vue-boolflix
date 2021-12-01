<template>
	<div class="card">
		<ul>
			<li class="content">
				<div class="cover">
					<div>
						<img :src="`https://image.tmdb.org/t/p/w342${imagePath}`" alt="cover_image" />
					</div>
				</div>
				<div class="info">
					<li class="title" v-if="title && originalTitle">{{ title }}</li>
					<li class="title" v-else>{{ originalTitle }}</li>

					<li class="language">
						<img v-if="changeFlag" :src="require(`../assets/${this.language}.png`)" :alt="language" />
						<span v-else>{{ language }}</span>
					</li>
					<li class="stars">
						<img v-for="(star, index) in changeStar" :key="`image-star-filled-${index}`" class="filled" :src="require('../assets/star.svg')" alt="star-image" />
						<img v-for="(star, index) in 5 - changeStar" :key="`image-star-empty-${index}`" class="empty" :src="require('../assets/star.svg')" alt="star-image" />
					</li>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Card",
	data() {
		return {};
	},
	props: {
		title: String,
		originalTitle: String,
		language: String,
		rating: Number,
		imagePath: String,
	},
	computed: {
		changeFlag() {
			let hasFlag = false;
			if (this.language === "it-IT" || this.language === "it") hasFlag = true;
			if (this.language === "en-EN" || this.language === "en") hasFlag = true;
			return hasFlag;
		},
		changeStar() {
			return Math.ceil(this.rating / 2);
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	padding: 1rem;
	margin-top: 1rem;
	flex-direction: column;
	border: 2px solid #ebebeb;

	> ul {
		list-style: none;

		> .content {
			display: flex;
			align-items: center;

			.cover {
				width: 160px;
				height: 240px;
				overflow: hidden;
				position: relative;

				> div:first-of-type {
					padding-bottom: calc(100% * 1);
					> img {
						top: 0;
						width: 100%;
						position: absolute;
						object-fit: contain;
					}
				}
			}

			.info {
				margin-left: 1rem;
				font-size: 0.875rem;
				line-height: 1.5rem;

				.title {
					font-weight: 600;
					font-size: 1.125rem;
					margin-bottom: 1rem;
				}
				.language {
					width: 24px;
					height: 24px;
					overflow: hidden;
					display: flex;
					align-items: center;
					justify-content: center;

					> img {
						width: 100%;
						object-fit: cover;
					}
				}

				.stars {
					display: flex;
					align-items: center;

					> img {
						width: 16px;
						height: 16px;
						object-fit: cover;

						&.empty {
							filter: invert(94%) sepia(9%) saturate(64%) hue-rotate(176deg) brightness(102%) contrast(89%);
						}

						&.filled {
							filter: invert(64%) sepia(94%) saturate(2163%) hue-rotate(1deg) brightness(105%) contrast(104%);
						}
					}
				}
			}
		}
	}
}
</style>
