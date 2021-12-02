<template>
	<div class="custom-filter">
		<div class="button-icon" @click.stop="showMenu">
			<ion-icon name="filter"></ion-icon>
		</div>
		<div class="menu" :class="{ show: isVisible }" v-clickoutside="closeMenu">
			<select name="custom-select" v-model="selectedID" @change="$emit('selectedGenres', selectedID)">
				<option value="" :key="`option-select-0`" @click="closeMenu" selected>Tutte</option>
				<option v-for="(genre, index) in genres" :value="genre.id" :key="`option-select-${index + 1}`" @click="closeMenu">{{ genre.name }}</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	name: "FilterMenu",
	data() {
		return {
			isVisible: false,
			selectedID: "",
		};
	},
	props: {
		genres: Array,
	},

	methods: {
		showMenu() {
			this.isVisible ? (this.isVisible = false) : (this.isVisible = true);
		},
		closeMenu() {
			if (this.isVisible) this.isVisible = false;
		},
	},
	computed: {},
};
</script>

<style lang="scss" scoped>
.custom-filter {
	position: relative;

	.menu {
		right: 0;
		top: 100%;
		display: none;
		padding: 0.5rem;
		border-radius: 3px;
		position: absolute;
		align-items: center;
		background-color: #ffffff;

		&.show {
			display: flex;
		}

		> label {
			display: flex;
			align-items: center;
			margin-right: 1rem;

			input[type="checkbox"] {
				margin-right: 0.25rem;
			}

			&:last-of-type {
				margin-right: 0;
			}
		}
	}
}

.button-icon {
	width: 2rem;
	height: 2rem;
	display: flex;
	cursor: pointer;
	color: #f2f2f2;
	margin-right: 1rem;
	position: relative;
	position: relative;
	font-size: 1.125rem;
	align-items: center;
	justify-content: center;
}
</style>
