<template>
    <v-layout xs12>
        <v-flex xs4>
            <panel title="Song Metadata">
                <v-text-field
                        label="Title"
                        type="text"
                        v-model="song.title"
                ></v-text-field>
                <v-text-field
                        label="Artist"
                        type="text"
                        v-model="song.artist"
                ></v-text-field>
                <v-text-field
                        label="Genre"
                        type="text"
                        v-model="song.genre"
                ></v-text-field>
                <v-text-field
                        label="Album"
                        type="text"
                        v-model="song.album"
                ></v-text-field>
                <v-text-field
                        label="Album Image Url"
                        type="text"
                        v-model="song.albumImageUrl"
                ></v-text-field>
                <v-text-field
                        label="YouTube ID"
                        type="text"
                        v-model="song.youtubeId"
                ></v-text-field>
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
                <v-text-field
                        label="Tab"
                        type="text"
                        v-model="song.tab"
                        multi-line
                ></v-text-field>
                <v-text-field
                        label="Lyrics"
                        type="text"
                        multi-line
                        v-model="song.lyrics"
                ></v-text-field>
            </panel>
            <v-btn
                dark
                class="cyan"
                @click="create"
            >Create Song</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
    import Panel from '@/components/Panel';
    import SongsService from '@/services/SongsService';

    export default {
        data () {
            return {
                song: {
                    title: '',
                    artist: '',
                    genre: '',
                    album: '',
                    albumImageUrl: '',
                    youtubeId: '',
                    lyrics: '',
                    tab: ''
                }
            }
        },
        components: {
            Panel,
            SongsService
        },
        methods: {
            async create () {
                // call API
                try {
                    await SongsService.post(this.song);
                    this.$router.push({
                        name: 'songs'
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
</script>

<style scoped>

</style>