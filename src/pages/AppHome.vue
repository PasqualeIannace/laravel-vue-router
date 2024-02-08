<script>
import { store } from "../store.js" //state management

export default {
    components: {
        name: "AppHome"
    },

    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <h1>Tutti gli eventi</h1>

    <div>
        <div v-for="evento in store.events">
            {{ evento.name }}
        </div>
    </div>
</template>

<style scoped></style>