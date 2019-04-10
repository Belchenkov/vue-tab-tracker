<template>
    <v-toolbar fixed class="cyan lighten-1" dark>
        <img src="https://img.icons8.com/plasticine/50/000000/musical-notes.png" />
        <v-toolbar-title class="mr-4">
            <span
                @click="navigateTo({name: 'root'})"
                class="home"
            >TabTracker</span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo({name: 'login'})">
                <v-icon dark right class="mr-1">lock_outline</v-icon>
                Login
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo({name: 'register'})">
                <v-icon dark right class="mr-1">person_add</v-icon>
                Sign Up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            navigateTo (route) {
                this.$router.push(route);
            }
        }
    }
</script>

<style scoped>
    .home {
        cursor: pointer;
    }
    
    .home:hover {
        color: #6fc930;
    }
</style>