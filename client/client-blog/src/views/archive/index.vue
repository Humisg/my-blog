<template>
    <div style="display: flex">
        <el-input v-model="title" placeholder="请输入文章标题"></el-input>
        <el-button @click="submitPost">发布</el-button>
    </div>
    <el-upload
    ref="upload"
    v-model:file-list="fileList"
    action="/api/upload/upload"
    list-type="picture-card"
    :limit="1"
    :on-exceed="handleExceed"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        mode="default"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        mode="default"
        @onCreated="handleCreated"
      />
    </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { createNewBlogApi } from '@/api/modules/blog'
import { GlobalStore } from '@/stores/index'
import { uploadApi } from '@/api/modules/upload'
import { IEditorConfig } from '@wangeditor/editor'
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/routers'
import { genFileId } from 'element-plus'
import type { UploadProps, UploadUserFile, UploadInstance, UploadRawFile } from 'element-plus'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 文章标题
const title = ref('')
// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    // setTimeout(() => {
    //     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    // }, 1500)
})

const toolbarConfig = {}

type InsertFnTypeImg =(url: string, alt?: string, href?: string) => void
const editorConfig: Partial<IEditorConfig> = {
  placeholder: '请输入内容...',
  MENU_CONF: {}
 }
 editorConfig.MENU_CONF!['uploadImage'] = {
  // server: '/api/upload/upload'
  async customUpload(file: File, InsertFn: InsertFnTypeImg) {
    let formData = new FormData()
    formData.append('file', file)
    try {
      const data = await uploadApi(formData)
      console.log(data, 'data');
      InsertFn(data.data.url)
    } catch (error) {
      console.log(error);
    }
  }
 }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const globalStore = GlobalStore()
const username = globalStore.userInfo.username

// 封面图片
let imgurl = ''

const submitPost = async() => {
  if (!title.value) {
    ElMessage.error('请输入文章标题')
    return
  }
  if (!valueHtml.value) {
    ElMessage.error('请输入文章内容')
    return
  }
  if  (fileList.value.length === 0) {
    ElMessage.error('请上传文章封面')
    return
  }
  await ElMessageBox.confirm('确定发布文章吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  const data = {
    title: title.value,
    content: valueHtml.value,
    username,
    imgurl
  }
  const res = await createNewBlogApi(data)
  ElMessage.success('发布成功')
  router.push('/blogs')
}

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const fileList = ref<UploadUserFile[]>([])
const upload = ref<UploadInstance>()
  const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}
const handleSuccess: UploadProps['onSuccess'] = (res, file) => {
  console.log(res, file)
  imgurl = res.data.url
}
</script>   