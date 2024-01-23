<script setup>
import HeroVue from './components/Hero.vue';
import SectionFiveVue from './components/SectionFive.vue';
import SectionFourVue from './components/SectionFour.vue';
import SectionSixVue from './components/SectionSix.vue';
import SectionThreeVue from './components/SectionThree.vue';
import SectionTwoVue from './components/SectionTwo.vue';


import {useHead, useSeoMeta} from '@unhead/vue'
import FooterVue from './components/layout/Footer.vue';

useHead({
  title: 'Sendo Indonesia',
  meta: [
    {
      name: 'Layanan Vending Machine',
      content: 'Layanan Vending Machine',
    },
  ],
})
useSeoMeta({
  title: 'Sendo Indonesia',
  description: 'Layanan Vending Machine',
  ogDescription: 'Layanan Vending Machine',
  ogTitle: 'Sendo Indonesia',
  ogImage: 'img/img-cover-min.png',
 // twitterCard: 'summary_large_image',
})
</script>

<template>
<HeroVue />
<SectionTwoVue />
<SectionThreeVue />
<SectionFourVue />
<SectionFiveVue />
<SectionSixVue />
<FooterVue />
</template>


