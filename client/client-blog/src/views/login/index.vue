<template>
    <div class="flex-center" style="height: 100%;">
        <div class="loginForm">
            <h1 class="loginForm-title">登录</h1>
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入用户名admin"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" password placeholder="请输入密码123456"></el-input>
            </el-form-item>
            </el-form>
            <div>
                <el-button type="primary" @click="resetForm(loginFormRef)">重置</el-button>
                <el-button type="primary" @click="login(loginFormRef)">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//登录功能
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { ElNotification } from 'element-plus'
import { GlobalStore } from '@/stores/index'
import { loginApi } from '@/api/modules/login'
import { HOME_URL } from '@/config/config';
import router from '@/routers/index'

const globalStore = GlobalStore()
type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
    username: '',
    password: ''
})
const loginFormRules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
})
const login = (elForm: FormInstance | undefined) => {
    if (!elForm) return
    elForm.validate(async (valid: boolean) => {
        if (!valid) return
        try {
            //登录
            const token = await loginApi({...loginForm})
            globalStore.setToken(token)
            globalStore.setUserInfo({username: loginForm.username})
            // router.push(HOME_URL)
            router.push({path: '/layout'})
            ElNotification({
                title: '登录成功',
                type: 'success',
                message: "欢迎登录",
                duration: 2000
            })
            
        } catch (error) {
            console.log(error)
        }
    })
}
const resetForm = (elForm: FormInstance | undefined) => {
    if (!elForm) return
    elForm.resetFields()
}
</script>
<style scoped lang="scss" >
@import './index.scss'
</style>