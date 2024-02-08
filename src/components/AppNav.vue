<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppNav",
    data() {
        return {
            store,
            menuItems: [
                {
                    routeName: "home",
                    label: "home"
                },
                {
                    routeName: "sponsor",
                    label: "partners"
                }
            ]
        }
    },
    methods: {
        doThings() {
            console.log("Nav collegata");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <nav>
        <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="{ name: item.routeName }" class="nav-link">
                {{ item.label }}
            </router-link>
        </li>
    </nav>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
nav {
    display: flex;

    li {
        list-style: none;
        padding: 1em;
    }
}
</style>