<template>
	<div id="app">
		<Header @getInputValue="getSearchValue" />
		<Main :data="database" />
	</div>
</template>

<script>
// import Axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
	name: "App",
	components: { Header, Main },
	data() {
		return {
			valueToSearch: "",
			database: null,
		};
	},
	methods: {
		getSearchValue(data) {
			this.valueToSearch = data;
			console.log(data);
		},
	},
};
</script>

<style lang="scss">
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html,
body {
	width: 100%;
	height: 100%;
	font-family: sans-serif;
}
</style>
