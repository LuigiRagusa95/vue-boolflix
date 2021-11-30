<template>
	<main>
		<template>
			<template v-for="(item, index) in moviesData">
				<Card :key="`card-movie-${index}`" :title="item.title" :language="item.original_language" :rating="item.vote_average" :originalTitle="item.original_title" />
			</template>
			<template v-for="(item, index) in seriesData">
				<Card :key="`card-serie-${index}`" :title="item.original_title" :language="item.original_language" :rating="item.vote_average" :originalTitle="item.original_name" />
			</template>
		</template>
	</main>
</template>

<script>
import Card from "./Card.vue";
export default {
	components: { Card },
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
