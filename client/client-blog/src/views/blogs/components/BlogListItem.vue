<template>
    <a class="img-link" href="">
      <img :src="imgUrl" alt="">
    </a>
    <div class="blog-info">
      <time class="time grey-font float-right">{{ createdAt }}</time>
      <h2 class="float-right">{{ title }}</h2>
      <p class="float-right">{{ content }}</p>
      <div class="float-right">
        <el-button text class="button">。。。</el-button>
      </div>
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