<script setup>
 const props = defineProps({
    title:{
        type:String,
        default:'Button'
    },
    action:Function
 })
</script>
<template>
    <div>
        <button class="py-3 px-5 rounded-lg bg-brand-1 hover:bg-opacity-80 text-brand-6  hover:bg-brand-3 hover:shadow-lg duration-200" @click="props.action" >{{ props.title }}</button>
    </div>
</template>