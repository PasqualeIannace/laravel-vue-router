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
            store,
            evento: [],
        }
    },

    mounted() {
        axios.get(`${this.store.apiUrl + this.store.apiEvent + this.id}`).then((response) => {
            console.log("axios di:", response);
            if (response.data.success) {
                this.evento = response.data.payload;
            } else {
                // redirect alla pagina 404
                this.$router.push({ name: 'not-found' })
            }
        });
    },
}
</script>

<template>
    <div v-if="!this.evento">Caricamento...</div>
    <div v-else>
        <h1>Dettagli evento {{ id }}</h1>
        <div>
            <img :src="this.evento?.image" alt="">
        </div>
        <div>
            <h5><strong> {{ evento.name }} </strong></h5>
            <p>{{ evento.location }}</p>
            <p><strong>Data evento</strong> {{ evento.date }}</p>
            <p v-if="evento.user?.name">Creato da {{ evento.user.name }}</p>
        </div>
    </div>
</template>

<style scoped></style>