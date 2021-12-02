<template>
	<div id="app">
		<Header @getInputValue="getSearchValue" />
		<Main :moviesData="movieDatabase" :seriesData="seriesDatabase" />
	</div>
</template>

<script>
import Axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
	name: "App",
	components: { Header, Main },
	data() {
		return {
			valueToSearch: "",
			database: [],
			movieDatabase: null,
			seriesDatabase: null,
			genreDatabase: [],
		};
	},
	created() {
		Axios.get("https://api.themoviedb.org/3/genre/movie/list", {
			params: {
				api_key: "bb45bf1814ccb1539123af8793f93346",
				language: "it-IT",
			},
		}).then((result) => {
			this.genreDatabase = result.data.genres;
		});
	},
	methods: {
		getSearchValue(data) {
			this.valueToSearch = data;
			this.getAPIValues();
		},
		getAPIValues() {
			Axios.get("https://api.themoviedb.org/3/search/movie", {
				params: {
					api_key: "bb45bf1814ccb1539123af8793f93346",
					query: this.valueToSearch,
				},
			})
				.then((result) => {
					this.movieDatabase = result.data.results;
				})
				.catch((error) => console.log(error));

			Axios.get("https://api.themoviedb.org/3/search/tv", {
				params: {
					api_key: "bb45bf1814ccb1539123af8793f93346",
					query: this.valueToSearch,
				},
			}).then((result) => {
				this.seriesDatabase = result.data.results;
			});
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
	font-size: 1rem;
	line-height: 1.5rem;
	background: #1b1b1b;
	font-family: sans-serif;
}
</style>
