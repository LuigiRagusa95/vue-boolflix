<template>
	<header>
		<div class="left">
			<div class="logo">
				<div>
					<img src="../assets/logo.png" alt="logo-brand" />
				</div>
			</div>

			<nav class="navigation">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Serie Tv</a></li>
					<li><a href="#">Film</a></li>
					<li><a href="#">Nuovi arrivi</a></li>
					<li><a href="#">La mia lista</a></li>
				</ul>
			</nav>
		</div>
		<div class="right">
			<!-- // build a component ↓ -->
			<div class="search-form" v-clickoutside="handleClickOutside">
				<input ref="inputField" :class="{ visible: isInputVisible }" autocomplete="off" type="text" name="input-search" v-model="searchString" @keyup.enter="sendAndClear" />
				<div @click.prevent="sendAndClear" class="button-icon">
					<ion-icon name="search"></ion-icon>
				</div>
			</div>
			<!-- // build a component ↓ -->
			<div class="button-icon notified" data-notified="1">
				<ion-icon name="notifications"></ion-icon>
			</div>
			<!-- // build a component ↓ -->
			<div class="avatar">
				<a href="#">
					<div>
						<img src="../assets/netflix-avatar.png" alt="avatar-image" />
					</div>
				</a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			searchString: "",
			isInputVisible: false,
		};
	},
	props: {},
	methods: {
		sendAndClear() {
			this.showInput();
			if (this.searchString !== "" && !this.isInputVisible) this.$emit("getInputValue", this.searchString);
			this.searchString = "";
		},
		showInput() {
			if (this.searchString === "" && this.isInputVisible === false) {
				this.isInputVisible = true;
				this.$refs.inputField.parentElement.style.backgroundColor = `#282828`;
			} else {
				this.isInputVisible = false;
				this.$refs.inputField.parentElement.style.backgroundColor = `transparent`;
			}

			setTimeout(() => this.$refs.inputField.focus(), 50);
		},
		handleClickOutside() {
			if (this.searchString === "") {
				this.searchString = "";
				this.isInputVisible = false;
				this.$refs.inputField.parentElement.style.backgroundColor = `transparent`;
			}
		},
	},
	computed: {},
};
</script>

<style lang="scss" scoped>
header {
	display: flex;
	padding: 5px 15px;
	align-items: center;
	justify-content: space-between;

	> .left {
		display: flex;
		align-items: center;

		.logo {
			width: 96px;
			display: flex;
			overflow: hidden;
			position: relative;

			> div:first-child {
				padding-bottom: calc(100% * (9 / 16));

				> img {
					top: 50%;
					max-width: 100%;
					position: absolute;
					object-fit: contain;
					transform: translateY(-50%);
				}
			}
		}

		.navigation {
			> ul {
				display: flex;
				list-style: none;
				margin-left: 24px;

				li {
					transition: color 0.1s ease;

					> a {
						padding: 8px;
						font-size: 1rem;
						color: #757575;
						line-height: 1.5rem;
						text-decoration: none;
					}

					&.selected,
					&:hover {
						a {
							color: #ffffff;
						}
					}
				}
			}
		}
	}

	> .right {
		display: flex;
		align-items: center;

		.search-form {
			display: flex;
			margin-right: 1rem;
			align-items: center;

			&:hover {
				background-color: #282828;
			}

			> input {
				border: none;
				display: none;
				outline: none;
				color: #f2f2f2;
				padding: 0.25rem;
				appearance: none;
				font-size: 0.875rem;
				line-height: 1.25rem;
				background-color: transparent;

				&.visible {
					display: block;
				}
			}

			> .button-icon {
				margin-left: 0.125rem;
				margin-right: 0.125rem;
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
			font-size: 1.125rem;
			align-items: center;
			justify-content: center;

			&.notified::before {
				top: 0;
				right: 0;
				z-index: 10;
				display: flex;
				flex-shrink: 0;
				width: 0.875rem;
				height: 0.875rem;
				font-size: 0.75rem;
				position: absolute;
				align-items: center;
				border-radius: 99999px;
				justify-content: center;
				background-color: #cc1b24;
				content: attr(data-notified);
			}
		}

		.avatar {
			width: 2rem;
			height: 2rem;
			display: flex;
			flex-shrink: 0;
			cursor: pointer;
			margin: 0 0.5rem;
			position: relative;
			align-items: center;

			> a > div:first-of-type {
				padding-bottom: calc(100% * 1);
				> img {
					top: 0;
					max-width: 100%;
					object-fit: cover;
					position: absolute;
				}
			}
		}
	}
}
</style>
