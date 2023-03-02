<template>
    <div class="blog-list">
        <div class="blog-item" v-for="(item, index) in blogList" :key="item._id" :style="{'flex-direction': index % 2 ? 'row' : 'row-reverse' }">
            <BlogListItem
            :title="item.title"
            :content="item.content"
            :createdAt="item.createdAt"
            >
            </BlogListItem>
        </div>
    </div>
</template>

<script setup lang="ts" name="BlogList">
import BlogListItem from '../BlogListItem.vue'
import { getBlogListApi } from '@/api/modules/blog'
import { ref, onMounted } from 'vue'
import { BlogList } from '@/api/interface'

let blogList = ref<BlogList>([])

const fecthBlogList = async() => {
    const res = await getBlogListApi({ username: 'admin' } )
    blogList.value = res.blogs
}

onMounted(fecthBlogList)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>