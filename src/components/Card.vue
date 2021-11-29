<template>
	<div class="card">
		<ul>
			<li class="title" v-if="title.toLowerCase() === originalTitle.toLowerCase()">{{ title }}</li>
			<li class="title" v-else>{{ originalTitle }}</li>
			<li class="language">
				<img v-if="changeFlag" :src="require(`../assets/${this.language}.png`)" :alt="language" />
				<span v-else>{{ language }}</span>
			</li>
			<li>{{ rating }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Card",
	data() {
		return {
			imagePath: "",
		};
	},
	props: {
		title: String,
		originalTitle: String,
		language: String,
		rating: Number,
	},
	computed: {
		changeFlag() {
			let hasFlag = false;
			if (this.language === "it-IT" || this.language === "it") hasFlag = true;
			if (this.language === "en-EN" || this.language === "en") hasFlag = true;
			return hasFlag;
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

		> li {
			margin-left: 1rem;
			font-size: 0.875rem;
			line-height: 1.5rem;

			&.title {
				font-weight: 600;
				font-size: 1.125rem;
			}

			&.language {
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
		}
	}
}
</style>
