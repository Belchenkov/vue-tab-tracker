<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <song-meta-data :song="song" />
            </v-flex>
            <v-flex class="ml-2" xs6>
                <you-tube :youtubeId="song.youtubeId" />
            </v-flex>
        </v-layout>
        <v-layout mt-2>
            <v-flex xs6>
                <Tab :song="song" />
            </v-flex>
            <v-flex xs6 class="ml-2">
                <Lyrics :song="song" />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import SongsService from '@/services/SongsService';
    import SongHistoryService from '@/services/SongHistoryService';
    import YouTube from './YouTube';
    import SongMetaData from './SongMetaData';
    import Lyrics from './Lyrics';
    import Tab from './Tab';

    import { mapState } from 'vuex';

    export default {
        data () {
          return {
              song: ''
          }
        },
        components: {
            SongMetaData,
            YouTube,
            Lyrics,
            Tab
        },
        computed: {
            ...mapState([
                'isUserLoggedIn',
                'user'
            ])
        },
        async mounted () {
            const songId = this.$store.state.route.params.songId;
            const res = await SongsService.show(songId);

            if (res) {
                this.song = res.data;
            }

            if (this.isUserLoggedIn) {
                SongHistoryService.post({
                    songId: songId,
                    userId: this.user.id
                });
            }
        }
    }
</script>

<style scoped>

</style>