<template>
    <div class="flex flex-row justify-between overflow-hidden">
        <div class="flex-none w-60 border-r h-screen">
            <div class="flex flex-row justify-between p-2 items-center">
                <div class="text-base font-semibold">订单信息</div>
                <el-select v-model="orderType" style="width: 100px">
                    <el-option v-for="item in OrderSearchOptions" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </div>
            <div class="m-2">
                <el-input v-model="keyword" placeholder="请输入条件">
                    <template #append>
                        <el-button-group class="flex flex-row">
                            <el-button size="small" type="primary">查询</el-button>
                            <el-button size="small" type="primary" title="清空">
                                <el-icon>
                                    <Collection />
                                </el-icon>
                            </el-button>
                            <el-popover placement="right-start" :width="400" :visible="visible" trigger="click">
                                <template #reference>
                                    <el-button size="small" type="primary" @click="visible = true">
                                        <el-icon>
                                            <Filter />
                                        </el-icon>
                                    </el-button>
                                </template>
                                <template #default>
                                    <div class="flex flex-row justify-between items-center border-b mb-4 pb-4">
                                        <span class="text-base">筛选条件</span>
                                        <el-icon class="cursor-pointer" @click="visible = false">
                                            <CloseBold />
                                        </el-icon>
                                    </div>
                                    <el-form :model="form" label-width="70px" ref="ruleFormRef">
                                        <el-form-item label="预约时间">
                                            <el-date-picker v-model="form.date" type="date" placeholder="请选择日期" />
                                        </el-form-item>
                                        <el-form-item label="运营商">
                                            <el-radio-group v-model="form.serviceProvider">
                                                <el-radio v-for="item in ServiceProviderOption" :key="item.value"
                                                    :label="item.value">{{ item.label }}</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="是否虚商">
                                            <el-radio-group v-model="form.isQuotient">
                                                <el-radio v-for="item in QuotientOption" :key="item.value"
                                                    :label="item.value">{{ item.label }}</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="订单状态">
                                            <el-select v-model="form.status">
                                                <el-option v-for="item in OrderStatusOption" :key="item.value"
                                                    :label="item.label" :value="item.value" />
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="primary" @click="handleSubmit">筛选</el-button>
                                            <el-button @click="handleReset">清空条件</el-button>
                                        </el-form-item>
                                    </el-form>
                                </template>
                            </el-popover>
                        </el-button-group>
                    </template>
                </el-input>
            </div>
            <div class="overflow-y-auto" style="max-height: calc(100vh - 100px);">
                <div class="m-2 p-2 bg-zinc-200 rounded" v-for="item in orderList">
                    <div class="flex flex-row justify-between items-center">
                        <div class="text-base">
                            <span class="text-sm">{{ item.orderopen.open_mobile?.slice(0, 3) }}</span>
                            <span>-</span>
                            <span class="text-red-500 text-base">{{ item.orderopen.open_mobile?.slice(3, 7) }}</span>
                            <span>-</span>
                            <span class="text-sm">{{ item.orderopen.open_mobile?.slice(7, 11) }}</span>
                        </div>
                        <div class="text-xs">
                            江苏 南京
                        </div>
                    </div>
                    <el-tag class="my-2" type="info">订单成功</el-tag>
                    <div class="flex flex-row justify-between items-center">
                        <div class="text-red-600 text-sm">
                            ￥0.00
                        </div>
                        <div class="text-sm">
                            预约：09-07 12:02
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { onMounted, reactive, defineComponent, toRefs, ref } from 'vue';
import { getSearchOrderListApi } from '@/api/index'
import { OrderSearchOptions, ServiceProviderOption, QuotientOption, OrderStatusOption } from '../params';
export default defineComponent({
    setup(props) {
        const ruleFormRef = ref<FormInstance>()
        const state = reactive({
            OrderSearchOptions,
            ServiceProviderOption,
            QuotientOption,
            OrderStatusOption,
            visible: false,
            form: {
                status: '',
                date: '',
                serviceProvider: '',
                isQuotient: ''
            },
            orderType: 1,
            keyword: '',
            orderList: []
        })

        // 订单列表
        async function getSearchOrderList() {
            const { data } = await getSearchOrderListApi({
                // 传参
            })
            state.orderList = data.data.data
        }

        // 筛选-清空条件
        const handleReset = () => {
            state.form = {
                status: '',
                date: '',
                serviceProvider: '',
                isQuotient: ''
            }
        }

        // 筛选-提交
        const handleSubmit = () => {
            console.log(state.form.isQuotient, 7888)
            // if (!ruleFormRef.value) return
            // ruleFormRef.value.validate((valid, fil) => {
            //     if (valid) {
            //         console.log(state, 76777)
            //     } else {
            //         console.log('error submit!')
            //         return false
            //     }
            // })
        }

        onMounted(() => {
            getSearchOrderList()
        })
        return {
            ...toRefs(state),
            ruleFormRef,
            handleReset,
            handleSubmit
        }
    }
})
</script>

<style lang="scss" scoped>
@import "../index.module.scss";
</style>