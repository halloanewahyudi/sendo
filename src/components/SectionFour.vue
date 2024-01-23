<script setup>
import { ref } from "vue";
import { content } from "../content";
const section = ref(content.sectionFour)
</script>
<template>
    <div class="max-w-screen-lg mx-auto px-6 pt-20 pb-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        <div v-for="item in section.items" :key="item">
            <div v-motion-slide-visible-bottom class="rounded-lg my-gradient p-6 lg:p-10 border-t-4 border-brand-3 flex flex-col gap-4 h-full">
                <h4 class="font-bold text-xl text-brand-1">{{ item.title }}</h4>
                <p>{{ item.content }}</p>
            </div>
        </div>
    </div>
    </div>

</template>