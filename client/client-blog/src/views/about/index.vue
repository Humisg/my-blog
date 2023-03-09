<template>
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="/api/upload/upload"
      :headers="headers"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="3"
      :on-exceed="handleExceed"
    >
      <el-button type="primary">Click to upload</el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </el-upload>
    <img src="./public/uploads/file.jpg" alt="图片">
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { toRaw } from 'vue';
  
  import type { UploadProps, UploadUserFile } from 'element-plus'
  import { GlobalStore } from '@/stores';

  const globalStore = GlobalStore()
  console.log('globalStore.token', globalStore.token);
  const token = globalStore.token;
  
//   const headers = { Authorization: `Bearer ${token}` }
const headers = { Authorization: `${token}` }
  
  const fileList = ref<UploadUserFile[]>([
    {
      name: 'element-plus-logo.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg',
    }
  ])
  
  const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
  }
  
  const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
  }
  
  const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
      `The limit is 3, you selected ${files.length} files this time, add up to ${
        files.length + uploadFiles.length
      } totally`
    )
  }
  
  const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
      `Cancel the transfert of ${uploadFile.name} ?`
    ).then(
      () => true,
      () => false
    )
  }
  </script>