<script>
import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
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
            error: false
        }
    },

    mounted() {
        axios.get(`${this.store.apiUrl + this.store.apiEvent + this.id}`).then((response) => {
            console.log("axios di:", response);
            if (response.data.success) {
                this.evento = response.data.payload;
            } else {
                this.error = true;
                // redirect alla pagina 404
                this.$router.push({ name: 'not-found' })
            }
        });
    },
}
</script>

<template>
    <div v-if="!this.evento">Caricamento...</div>
    <div v-if="this.evento && !this.error">
        <h1>Dettagli evento {{ id }}</h1>
        <div>
            <img :src="this.evento?.image" alt="">
        </div>
        <div>
            <h5><strong> {{ evento.name }} </strong></h5>
            <p>{{ evento.location }}</p>
            <p><strong>Data evento</strong> {{ evento.date }}</p>
            <p v-if="evento.user?.name">Creato da {{ evento.user.name }}</p>
            <h5 v-if="evento.tags?.length > 0">Ringraziamo gli sponsor</h5>
            <h5 v-else>Questo evento non ha sponsor</h5>
            <div v-for="tag in evento.tags">
                <p>{{ tag.sponsor }}</p>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Errore! Evento non trovato :(</h1>
    </div>
</template>

<style scoped></style>