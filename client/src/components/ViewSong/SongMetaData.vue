<template>
    <panel title="Song Metadata">
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
                    @click="navigateTo({
                        name: 'song-edit',
                        params: {
                            songId: song.id
                        }
                    })"
                >Edit</v-btn>
                <v-btn
                    v-if="isUserLoggedIn && !bookmark"
                    dark
                    class="cyan"
                    @click="setAsBookmark"
                >Set As Bookmark</v-btn>
                <v-btn
                    v-if="isUserLoggedIn && bookmark"
                    dark
                    class="cyan"
                    @click="unsetAsBookmark"
                >Unset Bookmark</v-btn>
            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl" :alt="song.title" />
                <br>{{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
    import { mapState } from 'vuex';
    import BookmarksService from '@/services/BookmarksService';

    export default {
        props: [
            'song'
        ],
        computed: {
            ...mapState([
                'isUserLoggedIn'
            ])
        },
        data () {
            return {
                bookmark: null
            }
        },
        watch: {
            async song () {
                if (this.isUserLoggedIn) {
                    try {
                        const res = await BookmarksService.index({
                            songId: this.song.id,
                            userId: this.$store.state.user.id
                        });

                        if (res) {
                            this.bookmark = res.data;
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route);
            },
            async setAsBookmark () {
                try {
                    const res = await BookmarksService.post({
                        songId: this.song.id,
                        userId: this.$store.state.user.id
                    });

                    if (res) {
                        this.bookmark = res.data;
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            async unsetAsBookmark () {
                try {
                    await BookmarksService.delete(this.bookmark.id);
                    this.bookmark = null;
                } catch (err) {
                    console.log(err);
                }
            }
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