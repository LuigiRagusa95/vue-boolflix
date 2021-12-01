<template>
	<div class="card">
		<ul>
			<li class="content">
				<div class="cover">
					<div>
						<img v-if="imagePath" :src="`https://image.tmdb.org/t/p/w342${imagePath}`" alt="cover_image" />
						<img v-else :src="require('../assets/cover.jpg')" alt="cover_image" />
					</div>
				</div>
				<div class="info">
					<div class="info-overlay">
						<div class="title"><strong>Titolo:</strong> {{ title }}</div>
						<div class="title"><strong>Titolo Originale:</strong> {{ originalTitle }}</div>
						<div v-show="false" class="language">
							<img v-if="changeFlag" :src="require(`../assets/${this.language}.png`)" :alt="language" />
							<span v-else>{{ language }}</span>
						</div>
						<div class="stars">
							<img v-for="(star, index) in changeStar" :key="`image-star-filled-${index}`" class="filled" :src="require('../assets/star.svg')" alt="star-image" />
							<img v-for="(star, index) in 5 - changeStar" :key="`image-star-empty-${index}`" class="empty" :src="require('../assets/star.svg')" alt="star-image" />
						</div>
						<div class="overview">
							<p>{{ overview }}</p>
						</div>
					</div>
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
		overview: String,
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
	flex-shrink: 0;
	padding: 0.5rem;
	cursor: pointer;
	margin-top: 1rem;
	width: calc(100% / 6);
	flex-direction: column;

	> ul {
		list-style: none;
		position: relative;

		> .content {
			width: 100%;
			display: flex;
			align-items: center;

			.cover {
				width: 100%;
				height: 345px;
				overflow: hidden;
				position: relative;

				> div:first-of-type {
					padding-bottom: calc(100% * 1);

					> img {
						top: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
						position: absolute;
					}
				}
			}

			&:hover {
				.info {
					visibility: visible;
				}
			}

			.info {
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				color: #ffffff;
				position: absolute;
				visibility: hidden;
				font-size: 0.875rem;
				line-height: 1.5rem;
				flex-direction: column;
				justify-content: center;
				background-color: rgba(0, 0, 0, 0.8);

				> .info-overlay {
					padding: 0.25rem;

					> * {
						margin-bottom: 0.125rem;
					}

					.title {
						font-size: 0.875rem;
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

					.overview {
						line-clamp: 5;
						overflow: hidden;
						max-width: 100%;
						padding: 0.25rem;
						display: -webkit-box;
						-webkit-line-clamp: 5;
						text-overflow: ellipsis;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
}
</style>
