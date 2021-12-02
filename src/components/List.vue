<template>
	<div class="container">
		<h3>Original Netflix</h3>
		<div class="container-list">
			<div class="container-slider">
				<template v-if="getArray">
					<template v-for="(item, index) in getArray">
						<Card
							v-show="item.genre_ids.includes(parseInt(selectedGenre)) || selectedGenre == ''"
							:key="`card-movie-${index}`"
							:title="item.title || item.name"
							:language="item.original_language"
							:rating="item.vote_average"
							:originalTitle="item.original_title || item.original_name"
							:imagePath="item.poster_path"
							:overview="item.overview"
							:genre="item.genre_ids"
						/>
					</template>
					<template>
						<span class="info-message">Nessun elemento trovato in questa categoria! Cambia la categoria in alto a destra!</span>
					</template>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import Card from "./Card.vue";

export default {
	name: "List",
	components: { Card },
	data() {
		return {
			array: [],
		};
	},
	props: {
		movies: Array,
		series: Array,
		genres: Array,
		selectedGenre: String,
	},
	computed: {
		getArray() {
			return [].concat(this.movies, this.series);
		},
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.container {
	margin: 0 auto;
	padding: 1rem;
	font-size: 1rem;
	line-height: 1.5rem;

	> h3 {
		color: #f2f2f2;
		padding: 0.125rem;
		letter-spacing: 0.02rem;
	}

	> .container-list {
		display: flex;
		overflow: hidden;
		align-items: center;

		> .container-slider {
			width: 100%;
			display: flex;
			flex-shrink: 0;
			overflow-x: auto;
			scrollbar-width: thin;
		}
	}

	.info-message {
		padding: 1rem 0;
		color: #ffffff;
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
}
</style>
