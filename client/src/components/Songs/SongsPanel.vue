<template>
    <panel title="Songs">
        <v-btn
            fab
            slot="action"
            class="cyan accent-3"
            @click="navigateTo({name: 'songs-create'})"
            medium
            light
            absolute
            right
            middle
        >
            <v-icon>add</v-icon>
        </v-btn>
        <div
            v-for="song in songs"
            :key="song.id"
            class="song"
        >
            <v-layout>
                <v-flex xs6>
                    <div class="song-title">
                        {{song.title}}
                    </div>
                    <div class="song-artist">
                        {{song.artist}}
                    </div>
                    <div class="song-genre">
                        {{song.genre}}
                    </div>
                    <v-btn
                            dark
                            class="cyan"
                            @click="navigateTo({name: 'song', params: {songId: song.id}})"
                    >View</v-btn>
                </v-flex>
                <v-flex xs6>
                    <img class="album-image" :src="song.albumImageUrl" :alt="song.title" />
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
    import SongService from '@/services/SongsService';

    export default {
        components: {
            SongService
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
        watch: {
            '$route.query.search': {
                immediate: true,
                async handler (value) {
                    const res = await SongService.index(value);

                    if (res) {
                        this.songs = res.data;
                    }
                }
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