<template>
    <h1>LOGIN</h1>
    //登录页面
    <el-from ref="loginForm">
        <el-form-item>

        </el-form-item>
    </el-from>
</template>

<script lang="ts" setup>
//登录功能
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { login } from '@/api/user'

type FromInstance = InstanceType<typeof ElForm>
const loginForm = ref<FromInstance>()
</script>