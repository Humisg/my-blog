<template>
    <div class="common-layout">
      <el-container>
        <el-header>
            <img src="https://edge.yancey.app/beg/blog_page_header.jpg" alt="Blank">
        </el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>
                <BlogList></BlogList>
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </template>

<script setup lang="ts">
import BlogList from './components/BlogList.vue'
</script>