<template>
    <v-layout xs12>
        <v-flex xs4>
            <panel title="Song Metadata">
                <v-text-field
                        label="Title"
                        type="text"
                        required
                        :rules="[required]"
                        v-model="song.title"
                ></v-text-field>
                <v-text-field
                        label="Artist"
                        type="text"
                        :rules="[required]"
                        v-model="song.artist"
                ></v-text-field>
                <v-text-field
                        label="Genre"
                        type="text"
                        :rules="[required]"
                        v-model="song.genre"
                ></v-text-field>
                <v-text-field
                        label="Album"
                        type="text"
                        :rules="[required]"
                        v-model="song.album"
                ></v-text-field>
                <v-text-field
                        label="Album Image Url"
                        type="text"
                        :rules="[required]"
                        v-model="song.albumImageUrl"
                ></v-text-field>
                <v-text-field
                        label="YouTube ID"
                        type="text"
                        :rules="[required]"
                        v-model="song.youtubeId"
                ></v-text-field>
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
                <v-text-field
                        label="Tab"
                        type="text"
                        :rules="[required]"
                        v-model="song.tab"
                        multi-line
                ></v-text-field>
                <v-text-field
                        label="Lyrics"
                        type="text"
                        multi-line
                        :rules="[required]"
                        v-model="song.lyrics"
                ></v-text-field>
            </panel>
            <div class="danger-alert" v-if="error">
                {{ error }}
            </div>
            <v-btn
                dark
                class="cyan"
                @click="save"
            >Save Song</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
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
                },
                error: '',
                required: value => !!value || 'Required'
            }
        },
        components: {
            SongsService
        },
        async mounted () {
            const songId = this.$store.state.route.params.songId;
            const res = await SongsService.show(songId);

            if (res) {
                this.song = res.data;
            }
        },
        methods: {
            async save () {
                this.error = null;
                const songId = this.$store.state.route.params.songId;

                const areAllFieldsFilledIn = Object
                    .keys(this.song)
                    .every(key => !!this.song[key]);

                if (!areAllFieldsFilledIn) {
                    this.error = 'Please fill in all the required fields!';
                    return;
                }

                try {
                    await SongsService.put(this.song);
                    this.$router.push({
                        name: 'song',
                        params: {
                            songId: songId
                        }
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