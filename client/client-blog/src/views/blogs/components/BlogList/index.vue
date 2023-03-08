<template>
    <div class="blog-list">
        <div class="blog-item" v-for="(item, index) in blogList" :key="item._id" :style="{'flex-direction': index % 2 ? 'row' : 'row-reverse' }">
            <BlogListItem
            :id="item._id"
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
import { GlobalStore } from '@/stores'

let blogList = ref<BlogList>([])

const globalStore = GlobalStore()
const userId = globalStore.userInfo.id

const fecthBlogList = async() => {
    blogList.value = await getBlogListApi({ userId } )
}

onMounted(fecthBlogList)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>