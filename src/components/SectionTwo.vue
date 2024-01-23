<script setup>
import { content } from '../content';
import { PlayCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
const video = ref()
const { playing, currentTime, duration, volume } = useMediaControls(video, {
    src: content.sectionTwo.video,
})

const buka = ref(false)
const play = () => {
    if (buka.value = true) {
        setTimeout(() => {
            playing.value = true
        }, 300);
    }
    buka.value = true
}
const stop = () => {
    if (buka.value = false) {
        setTimeout(() => {
            playing.value = false
        }, 300);
    }
    buka.value = false
}

onMounted(() => {
    volume.value = 0.5
    currentTime.value = 60
})
</script>
<template>
    <div class="max-w-screen-lg mx-auto py-10 lg:py-20 px-6">
        <div class="flex flex-col justify-center items-center">
            <div v-if="buka" class="fixed top-0 left-0 w-full min-h-screen z-50 bg-brand-1 bg-opacity-80 flex flex-col justify-center items-center">
            <div  class="rounded-lg overflow-hidden relative shadow-xl" v-motion-pop :duration="400" >
                <button @click="stop" class="absolute top-2 right-2 z-40"><XMarkIcon class="h-10 w-10 text-white" /></button>
                <video ref="video" />
            </div>
            </div>
            <div v-else class="relative max-w-max mx-auto" >
                <img :src="content.sectionTwo.image" alt="">
                <button @click="play" class="inline-flex justify-center items-center absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <PlayCircleIcon class="h-16 w-16 text-white  animate-pulse"/>
                </button>
            </div>
        </div>
    </div>
</template>