<template>
	<header>
		<form action="POST">
			<input autocomplete="off" type="text" name="input-search" v-model="searchString" />
			<button @click.prevent="$emit('getInputValue', searchString)">Cerca</button>
		</form>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			searchString: "",
		};
	},
	props: {},
	methods: {},
	computed: {},
};
</script>

<style lang="scss" scoped>
header {
	padding: 10px;
}

form > * {
	margin-right: 5px;
}
</style>
