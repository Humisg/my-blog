<template>
    <div class="blog-list">
        <div class="blog-list-item" v-for="item in blogList" :key="item.id">
            <BlogListItem>

            </BlogListItem>
        </div>
    </div>
</template>

<script steup lang="ts" name="BlogList">
import BlogListItem from './BlogListItem.vue'
import { getBlogListApi } from '@/api/modules/blog'
import { reactive, onMounted } from 'vue'

let blogList = reactive({})

const fecthBlogList = async () => {
    const res = await getBlogListApi({ username: 'admin' } )
}

onMounted( async () => {
   const data = await fecthBlogList()
   console.log(data,'data1111');
   
})
</script>