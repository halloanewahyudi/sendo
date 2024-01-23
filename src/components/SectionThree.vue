<script setup>
import { ref } from "vue";
import { content } from "../content";
const section = ref(content.sectionThree)
</script>
<template>
    <div class="py-10 lg:py-20 bg-brand-9 ">
        <div class="max-w-screen-lg mx-auto px-6  flex flex-col justify-center gap-5">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="relative z-20">
                    <img :src="section.image" alt="" srcset="" class="shadow-2xl">
                </div>
                <div class="relative ">
                    <div class="lg:ml-10">

                        <div class="rounded-lg bg-brand-4  p-6 max-w-[200px] mx-auto lg:ml-5 flex gap-2 items-end justify-center -mb-6 z-30 relative shadow-2xl"
                            v-motion :initial="{
                                opacity: 0,
                                y: 100,
                            }" :visible="{
    opacity: 1,
    y: 0,
    transiton: {
        delay: 200,
        duration: 1000
    }
}">
                            <div>
                                <p>{{ section.jam.title }}</p>
                                <h1 class="text-3xl lg:text-6xl font-bold text-brand-3">{{ section.jam.angka }}</h1>
                            </div>

                            <h4 class="text-2xl">{{ section.jam.sufix }}</h4>
                        </div>
                    </div>

                    <div
                        class="rounded-lg p-6 lg:p-10 my-gradient border shadow flex flex-col gap-5 max-w-[600px]  lg:pl-20 lg:-ml-10 relative">
                        <p>{{ section.card.content }}</p>
                        <h4 class="font-semibold text-2xl">{{ section.card.subContent }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>