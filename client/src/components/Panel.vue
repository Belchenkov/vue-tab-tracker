<template>
    <v-layout column>
        <v-flex>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan lighten-1" dark>
                    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <slot>
                        No slot content defined
                    </slot>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Panel",
        props: [
            'title'
        ],
        data () {
            return {

            };
        }
    }
</script>

<style scoped>

</style>