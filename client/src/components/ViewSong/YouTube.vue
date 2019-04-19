<template>
    <panel title="YouTube Video">
        <youtube
            :video-id="youtubeId"
            :player-width="800"
            :player-height="300"
        />
    </panel>
</template>

<script>
    export default {
        props: [
            'youtubeId'
        ]
    }
</script>

<style scoped>

</style>