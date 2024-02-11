<script>
import { store } from "../store.js" //state management

import axios from 'axios'; //importo Axios


export default {
    props: ["id"],

    components: {
        name: "EventDetail",
    },

    data() {
        return {
            store
        }
    },

    mounted() {
        axios.get(`${this.store.apiUrl + this.store.apiEvent + this.id}`).then((response) => {
            console.log("axios di:", response);
            if (response.data.success) {
                this.post = response.data.post;
            } else {
                // redirect alla pagina 404
                this.$router.push({ name: 'not-found' })
            }
        });
    },
}
</script>

<template>
    <h1>Dettagli evento {{ id }}</h1>
</template>

<style scoped></style>