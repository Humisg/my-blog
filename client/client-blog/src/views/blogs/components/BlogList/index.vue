<template>
    <div class="blog-list">
        <div class="blog-list-item" v-for="item in blogList" :key="item._id">
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
    console.log('blogList', blogList);
    
}

onMounted(fecthBlogList)
</script>