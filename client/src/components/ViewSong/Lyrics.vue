<template>
    <panel title="Lyrics">
        <textarea
                readonly
                v-model="song.lyrics"
        ></textarea>
    </panel>
</template>

<script>
    export default {
        props: [
            'song'
        ]
    }
</script>

<style scoped>
    textarea {
        width: 100%;
        font-family: monospace;
        height: 600px;
        border: none transparent;
        overflow: auto;
        padding: 20px;
    }
</style>