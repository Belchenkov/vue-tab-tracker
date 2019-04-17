<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <songs-search-panel></songs-search-panel>
            <songs-panel class="mt-2"></songs-panel>
        </v-flex>
    </v-layout>
</template>

<script>
    import SongsPanel from './SongsPanel';
    import SongsSearchPanel from './SongsSearchPanel';
    import SongService from '@/services/SongsService';

    export default {
        components: {
            SongService,
            SongsPanel,
            SongsSearchPanel
        },
        data () {
            return {
                songs: []
            };
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route);
            }
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
    .song {
        padding: 20px;
        height: 330px;
        overflow: hidden;
    }

    .song-title {
        font-size: 30px;
    }

    .song-artist {
        font-size: 24px;
    }

    .song-genre {
        font-size: 18px;
    }

    .album-image {
        width: 50%;
        margin: 0 auto;
    }
</style>