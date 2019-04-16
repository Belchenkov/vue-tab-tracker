<template>
    <Panel title="YouTube Video">
        <youtube
            :video-id="youtubeId"
            :player-width="800"
            :player-height="300"
        />
    </Panel>
</template>

<script>
    import Panel from '@/components/Panel';

    export default {
        props: [
            'youtubeId'
        ],
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>