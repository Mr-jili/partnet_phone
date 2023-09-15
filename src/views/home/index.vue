<template>
    <div class="home">
        <div class="home-l">
            <div class="home-l-h">
                <h4>订单信息</h4>
                <el-select v-model="state.value" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <el-input v-model="state.input2" placeholder="请输入">
                <template #append>
                    <el-button type="primary">搜索</el-button>
                </template>
            </el-input>
        </div>
        <div class="home-c"></div>
        <div class="home-r"></div>
    </div>
</template>
<script lang="ts" setup>
import { options } from './params';
import { reactive } from 'vue';

const state = reactive({
    value: '',
    input2: ''
})

</script>

<style lang="scss">
@import "./index.module.scss";
</style>