<template>
	<header>
		<form action="POST">
			<input autocomplete="off" type="text" name="input-search" v-model="searchString" />
			<button @click.prevent="sendValues">Cerca</button>
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
	methods: {
		sendValues() {
			this.$emit("getInputValue", this.searchString);
			this.searchString = "";
		},
	},
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
