import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

Vue.directive("clickoutside", {
	bind(element, binding, vnode) {
		element.clickOutsideEvent = function (event) {
			if (!(element === event.target || element.contains(event.target))) {
				vnode.context[binding.expression](event);
			}
		};
		document.body.addEventListener("click", element.clickOutsideEvent);
	},
	unbind(element) {
		document.body.removeEventListener("click", element.clickOutsideEvent);
	},
});

new Vue({
	render: (h) => h(App),
}).$mount("#app");
