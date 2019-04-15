<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <div v-for="song in songs" :key="song.id">
                    {{song.title}} -
                    {{song.artist}} -
                    {{song.album}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
    import Panel from '@/components/Panel';
    import SongService from '@/services/SongsService';

    export default {
        components: {
            Panel,
            SongService
        },
        data () {
            return {
                songs: []
            };
        },
        async mounted () {
            // request to the backend for all the songs
            const res = await SongService.index();

            if (res) {
                this.songs = res.data;
            }
        }
    }
</script>

<style scoped>

</style>