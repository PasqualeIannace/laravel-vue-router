<script>
import { store } from "../store.js" //state management

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
        // axios.get(`${this.store.apiUrl}/api/events/${this.$route.params.id}`).then((response) => {
        //     console.log("axios di:");
        //     if (response.data.success) {
        //         this.post = response.data.post;
        //     } else {
        //         // redirect alla pagina 404
        //         this.$router.push({ name: 'not-found' })
        //     }
        // });
    },
}
</script>

<template>
    <h1>Dettagli evento {{ id }}</h1>
</template>

<style scoped></style>