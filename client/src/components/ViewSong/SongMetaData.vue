<template>
    <Panel title="Song Metadata">
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
            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl" :alt="song.title" />
                <br>{{song.album}}
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
    import Panel from '@/components/Panel';

    export default {
        props: [
            'song'
        ],
        data () {
            return {

            }
        },
        components: {
            Panel
        },
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
        width: 70%;
        margin: 0 auto;
    }
</style>