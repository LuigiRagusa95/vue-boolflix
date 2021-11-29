<template>
	<div class="card">
		<ul>
			<li>{{ title }}</li>
			<li>{{ originalTitle }}</li>
			<li>{{ language }}</li>
			<li>{{ rating }}</li>
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
	},
	methods: {},
};
</script>

<style lang="scss" scoped></style>
