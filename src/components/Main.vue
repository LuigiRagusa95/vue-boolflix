<template>
	<main>
		<template v-if="canRead">
			<List :movies="moviesData" :series="seriesData" :genres="genres" :selectedGenre="genreSelected" />
		</template>
	</main>
</template>

<script>
import List from "./List.vue";
export default {
	components: { List },
	name: "Main",
	props: {
		moviesData: Array,
		seriesData: Array,
		genres: Array,
		genreSelected: String,
	},
	computed: {
		canRead() {
			return typeof this.moviesData != undefined && this.moviesData != null && typeof this.seriesData != undefined && this.seriesData != null;
		},
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
