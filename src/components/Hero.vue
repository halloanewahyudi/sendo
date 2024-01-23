<script setup>
import ButtonVue from './Button.vue';
import { content } from '../content'
</script>
<template>
    <div class="w-full my-gradient">
        <div class="flex flex-col lg:flex-row min-h-screen w-full max-w-screen-xl mx-auto">
            <div class="lg:order-last shrink-0 max-w-[550px] ">
                <img :src="content.hero.image" alt="" class="w-full">
            </div>
            <div class=" flex flex-col  justify-center w-full pb-20 lg:pb-0 px-6">
                <div class="max-w-lg flex flex-col gap-4">
                    <p class="text-lg font-semibold">{{ content.hero.subtitle }} </p>
                    <h1 v-motion-slide-bottom :duration="300" class="text-4xl  lg:text-6xl font-extrabold text-brand-3 ">{{
                        content.hero.title }}</h1>
                    <h2 v-motion-slide-bottom :delay="500" :duration="300"
                        class="text-3xl lg:text-5xl font-bold text-brand-1"> {{ content.hero.titleTwo }}</h2>
                    <p class="text-lg"> {{ content.hero.descripttion }}</p>
                    <div class="flex flex-wrap gap-4 items-center">
                        <a :href="content.hero.buttonLeft.link" target="_blank"
                        class="w-max py-2 px-4 rounded-lg bg-brand-1 text-white hover:scale-105 hover:shadow-lg duration-200">
                        {{ content.hero.buttonLeft.text }}
                    </a>
                    <a :href="content.hero.buttonRight.link" target="_blank"
                        class="w-max py-2 px-4 rounded-lg border-brand-1 border-2 text-brand-1 hover:scale-105 hover:shadow-lg duration-200">
                        {{ content.hero.buttonRight.text }}
                    </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>