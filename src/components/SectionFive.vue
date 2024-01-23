<script setup>
import { ref } from "vue";
import { content } from "../content";
const section = ref(content.sectionFive)

</script>
<template>
    <div class="max-w-screen-lg mx-auto px-6 pt-10 pb-20">
        <div class="flex flex-col lg:flex-row justify-center  items-center">
        <img :src="section.rusli.foto" alt="" class="w-48">
        <div class="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-10  items-center justify-between bg-brand-1 text-brand-7 p-6 lg:p-10 rounded-lg lg:rounded-none lg:rounded-r-xl w-full">
            <div class="text-center lg:text-left">
            <h4 class="text-2xl lg:text-3xl font-bold text-brand-3">{{ section.cta.title }}</h4>
            <p class="text-xl">{{ section.cta.descripttion }}</p>
        </div>
        <a :href="section.cta.button.link" target="_blank" class="py-2 px-4 rounded-lg bg-brand-3 text-brand-1 hover:scale-105 hover:shadow-lg duration-200">
            {{ section.cta.button.text }}
        </a>
        </div>
    </div>
    </div>
</template>