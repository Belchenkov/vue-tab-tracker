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
    import YouTube from './YouTube';
    import Panel from '@/components/Panel';
    import SongMetaData from './SongMetaData';
    import Lyrics from './Lyrics';
    import Tab from './Tab';

    export default {
        data () {
          return {
              song: ''
          }
        },
        components: {
            Panel,
            SongMetaData,
            YouTube,
            Lyrics,
            Tab
        },
        async mounted () {
            const songId = this.$store.state.route.params.songId;
            const res = await SongsService.show(songId);

            if (res) {
                this.song = res.data;
            }
            console.log(this.song);
        }
    }
</script>

<style scoped>

</style>