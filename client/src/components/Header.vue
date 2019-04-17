<template>
    <v-toolbar fixed class="cyan lighten-1" dark>
        <img src="https://img.icons8.com/plasticine/50/000000/musical-notes.png" />
        <v-toolbar-title class="mr-4">
            <span
                @click="navigateTo({name: 'songs'})"
                class="home"
            >TabTracker</span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn
                    flat
                    dark
                    @click="navigateTo({name: 'songs'})"
            >
                <v-icon dark right class="mr-1">library_music</v-icon>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                    flat
                    dark @click="navigateTo({name: 'login'})"
                    v-if="!$store.state.isUserLoggedIn"
            >
                <v-icon dark right class="mr-1">lock_outline</v-icon>
                Login
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
                    flat
                    dark
                    @click="navigateTo({name: 'register'})"
                    v-if="!$store.state.isUserLoggedIn"
            >
                <v-icon dark right class="mr-1">person_add</v-icon>
                Sign Up
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
                    flat
                    dark
                    @click="logout"
                    v-if="$store.state.isUserLoggedIn"
            >
                <v-icon dark right class="mr-1">exit_to_app</v-icon>
                Log Out
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
            },
            logout () {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null);
                this.$router.push({name: 'songs'});
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