<template>
    <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>{{ title }}</span>
          <div class="bottom">
            <time class="time">{{ props.createdAt }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
</template>

<script setup lang="ts" name="BlogListItem">
import { BlogItem } from '@/api/interface'
import { defineProps, withDefaults } from '@vue/runtime-core'

console.log('1243243');

// interface BlogListItemProps extends BlogItem {}

// const props = defineProps<BlogListItemProps>()
// console.log('props', props.content)

// const props = withDefaults(defineProps<BlogListItemProps>(), {
//   test: 'test'
// }) as BlogListItemProps;

const props = defineProps({
    title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  createdAt: {
    type: String,
    default: '',
  },
})
</script>