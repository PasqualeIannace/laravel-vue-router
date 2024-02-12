<script>
import AppNav from "./components/AppNav.vue"

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppNav
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEventi();
	},
	methods: {
		getEventi() {
			axios.get(this.store.apiUrl + this.store.apiEvent).then(risultato => {
				console.log(risultato);
				if (risultato.data.success) {
					this.store.events = risultato.data.results;
				}
			}).catch(errore => {
				console.error(errore);
			});
		}
	}
}
</script>

<template>
	<main>
		<AppNav />
		<router-view></router-view>
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {}
</style>