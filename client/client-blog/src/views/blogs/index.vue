<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <img src="https://edge.yancey.app/beg/blog_page_header.jpg" alt="Blank">
      </el-header>
      <el-main>
        <BlogList></BlogList>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import BlogList from './components/BlogList/index.vue'
</script>

<style lang="scss" scoped>
.el-container {
  .el-header {
    height: 30rem;
    padding: 0;
    background-color: #b3c0d1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    span{
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, BlinkMacSystemFont, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
  }
} 
</style>