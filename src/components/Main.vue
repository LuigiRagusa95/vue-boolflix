<template>
	<main>
		<template>
			<List :movies="moviesData" :series="seriesData" />
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
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
