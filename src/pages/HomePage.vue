<script>
import { store } from "../store.js" //state management

export default {
    components: {
        name: "HomePage"
    },

    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <h1 class="px-5 mt-5">Tutti gli eventi</h1>

    <div class="row p-5">
        <div v-for="evento in  store.events " class="col-4">
            <div class="card mb-3">
                <img :src="evento.image" class="card-img-top " alt="...">
                <div class="card-body">
                    <h5 class="card-title"><strong> {{ evento.name }} </strong></h5>
                    <p class="card-text">{{ evento.location }}</p>
                    <p class="card-text"><strong>Data evento</strong> {{ evento.date }}</p>
                    <span class="d-flex gap-2 ">
                        <router-link :to="{ name: 'evento', params: { id: evento.id } }" class="btn btn-primary">
                            Dettagli Evento
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>