<script setup>
import { ref } from "vue";
import { content } from "../content";

const section = ref(content.sectionSix)
const tabOpen = ref(0)

const tab = (id) => {
    tabOpen.value = id
}

</script>
<template>
    <div>
        <div class="text-center rounded-t-[250px] bg-brand-1 text-brand-6 pb-10">
            <img v-motion-slide-visible-bottom :src="section.imageCenter" alt=""
                class="w-56 h-auto mx-auto -top-20 relative mt-16 -mb-10">
            <h2 class="text-3xl lg:text-5xl font-bold mb-6 ">{{ section.title }}</h2>
            <div class="w-48 h-1.5 bg-brand-3 mx-auto"></div>
            <div class="mt-10">
                <div class="flex flex-wrap justify-center gap-6 lg:gap-10">
                    <button aria-checked="" @click="tab(index)" :class="{ 'text-brand-3': tabOpen === index }"
                        class="text-xl font-bold active:text-brand-3 focus:text-brand-3 hover:text-brand-3"
                        v-for="(item, index) in section.produk" :key="index">
                        {{ item.nama }}
                    </button>
                    <div ref="tabContent" class="tab-content p-6 lg:p-10">
                        <div v-for="img in  section.produk[tabOpen].images" :key="img" class="mb-10">
                            <img :src="img" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-between items-center gap-5 max-w-[940px] px-6 lg:px-0 mx-auto">
                <div>
                    <h4 class="text-2xl lg:text-3xl font-bold text-brand-3">{{ section.cta.title }}</h4>
                    <p class="text-xl">{{ section.cta.description }}</p>
                </div>
                <div class="flex flex-wrap gap-4 items-center justify-center">
                <a :href="section.cta.button.link" class="py-2 px-4 rounded-lg bg-brand-3 text-brand-1 hover:scale-105 hover:shadow-lg duration-200">
                    {{ section.cta.button.text }}
                </a>
                <a :href="section.cta.buttonRight.link" target="_blank" class="py-2 px-4 rounded-lg border-brand-3 border-2 text-brand-3 hover:scale-105 hover:shadow-lg duration-200">
                    {{ section.cta.buttonRight.text }}
                </a>
                </div>
            </div>
        </div>
    </div>
</template>