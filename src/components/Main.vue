<template>
	<main>
		<template v-if="data">
			<template v-for="(item, index) in data">
				<Card :key="`card-${index}`" :title="item.title" :language="item.original_language" :rating="item.vote_count" :originalTitle="item.original_title" />
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
		data: Array,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
