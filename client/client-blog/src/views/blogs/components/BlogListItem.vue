<template>
    <a class="img-link" href="">
      <img :src="imgUrl" alt="">
    </a>
    <div class="blog-info float-right">
      <div class="flex-center time grey-font">
        <el-icon><Clock /></el-icon>
        <time class="ml5">{{ createdAt }}</time>
      </div>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <!-- <div class="float-right">
        <el-button text class="button">。。。</el-button>
      </div> -->
    </div>
</template>

<script setup lang="ts" name="BlogListItem">
// import { BlogItem } from '@/api/interface'

interface BlogListItemProps {
  title: string,
  content: string,
  createdAt: string,
  imgUrl?: string,
  test?: string
}

const props = withDefaults(defineProps<BlogListItemProps>(), {
  test: 'test',
  imgUrl: 'https://edge.yancey.app/beg/cdkoytwl-1653502181867.jpg'
})
</script>