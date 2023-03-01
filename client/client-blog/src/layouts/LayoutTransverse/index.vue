<template>
      <el-container>
        <el-header>
            <div class="logo flex-center">
                <img src="" alt="logo">
                <span>OKKKK</span>
            </div>
            <el-menu
                class="custom-el-menu"
                mode="horizontal"
                router
                background-color="#25cce2"
                text-color="#fff"
                active-text-color="#ffd04b"
               >
                <el-menu-item index="home">HOME</el-menu-item>
                <el-menu-item index="blogs">NONONO Center</el-menu-item>
                <el-menu-item index="archive">Archive</el-menu-item>
                <el-menu-item index="about">About</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <Main></Main>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
  </template>

<script setup lang="ts">
import Main from '@/layouts/components/Main.vue'

</script>

<style scoped lang="scss">
@import './index.scss';
</style>