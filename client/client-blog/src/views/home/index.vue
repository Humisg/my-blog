<template>
    <div class="Home">
        <h1>HOME<br />Well</h1>
        <div class="background"><span>Blog</span></div>
        <h2>
            In winter, it is covered with snow and snow. When you climb to Jinding, you can see far and wide, and the
        scenery is very magnificent; West overlooking Aiai snow peak, Gongga Mountain and Wawu mountain, the mountains
        connect the sky; Looking south at the top of Ten Thousand Buddhas, the clouds are rolling and the momentum is
        magnificent; A panoramic view of the Pingchuan River in the north is as beautiful as a shop, with a panoramic
        view of the Dadu River and Qingyi River
        </h2>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
    const background: HTMLElement | null = document.querySelector(".background")
    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY
        if (scrollY !== 0) {
            background!.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
        }else{
            background!.style.backgroundPosition = ''
        }
    })
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>