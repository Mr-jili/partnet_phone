<template>
    <div class="flex flex-row justify-between overflow-hidden">
        <!-- <div class="flex-none w-60 border-r h-screen">
            <div class="flex flex-row justify-between p-2 items-center">
                <div class="text-base font-semibold">订单信息</div>
                <el-select v-model="state.value" style="width: 100px">
                    <el-option v-for="item in OrderSearchOptions" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </div>
            <div class="m-2">
                <el-input v-model="state.input2" placeholder="请输入条件">
                    <template #append>
                        <el-button-group class="flex flex-row">
                            <el-button size="small" type="primary">查询</el-button>
                            <el-button size="small" type="primary" :icon="Collection" />
                            <el-popover placement="right-start" title="筛选条件" :width="400" :visible="visible" trigger="click"
                                content="this is content, this is content, this is content">
                                <template #reference>
                                    <el-button size="small" type="primary" :icon="Filter" />
                                </template>
                                <template #default>
                                    <el-form :model="form" label-width="70px">
                                        <el-form-item label="预约时间">
                                            <el-date-picker v-model="form.date" type="date" placeholder="请选择日期" />
                                        </el-form-item>
                                        <el-form-item label="运营商">
                                            <el-radio-group v-model="form.serviceProvider">
                                                <el-radio v-for="item in ServiceProviderOption" :key="item.value"
                                                    :label="item.label" />
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="是否虚商">
                                            <el-radio-group v-model="form.isQuotient">
                                                <el-radio v-for="item in QuotientOption" :key="item.value"
                                                    :label="item.label" />
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="订单状态">
                                            <el-select v-model="form.status">
                                                <el-option v-for="item in OrderStatusOption" :key="item.value"
                                                    :label="item.label" :value="item.value" />
                                            </el-select>
                                        </el-form-item>
                                    </el-form>
                                </template>
                            </el-popover>
                        </el-button-group>
                    </template>
                </el-input>
            </div>
            <div class="home-l-c overflow-y-auto" style="max-height: calc(100vh - 100px);">
                <div class="m-2 p-2 bg-zinc-200 rounded">
                    <div class="flex flex-row justify-between items-center">
                        <div class="text-base">
                            <span>195</span>
                            <span>-</span>
                            <span class="text-red-500 text-base">2427</span>
                            <span>-</span>
                            <span>1213</span>
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
        </div> -->
        <OrderList></OrderList>
        <div class="flex-auto p-4">
            <div class="border-b mb-2">
                <div class="flex flex-row items-center justify-between">
                    <span class="text-base font-semibold">用户信息</span>
                    <div class="border border-dashed rounded px-2 py-1 text-sm flex items-center cursor-pointer">
                        <el-icon class="text-zinc-400">
                            <Search />
                        </el-icon>
                        <span class="pl-1 text-zinc-400">查号码</span>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-between bg-slate-50 rounded mt-4 mb-4 p-4">
                    <div class="flex flex-col">
                        <div class="">
                            <span class="text-base">宋欢</span>
                            <span class="text-sm pl-2">189823938933</span>
                        </div>
                        <div class="text-slate-500 text-sm pt-1">
                            江苏南京鼓楼区江苏南京楼区越洋国际1320室
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div>默认分销</div>
                        <div class="text-slate-500 text-sm pt-1">
                            下单时间: 2023-09-07 12:02:04
                        </div>

                    </div>
                    <div class="flex flex-col">
                        <div class="">
                            <span>跟单员：</span>
                            <span>宋欢</span>
                        </div>
                        <div class="text-slate-500 text-sm pt-1">
                            访客IP: 222.190.47.100
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-c-b pt-5">
                <el-timeline>
                    <el-timeline-item v-for="(activity, index) in activities" :key="index" :type="activity.type"
                        :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
        <div class="right flex-none w-60 border-l">
            <div class="right-title border-b py-2">跟进记录</div>
            <div class="border-b pb-2">
                <el-button class="w-full ml-1 mt-2">
                    <el-icon class="mr-2">
                        <Plus />
                    </el-icon>
                    添加备注
                </el-button>
            </div>
            <div class="overflow-y-auto" style="max-height: calc(100vh - 154px);">
                <div class="p-4 border-b text-sm">
                    <div class="text-sm">号码支架成功，运营商未成功。</div>
                    <div class="flex flex-row justify-between mt-2">
                        <div class="text-lime-600">
                            系统
                        </div>
                        <div>
                            2023-09-08 17:18:19
                        </div>
                    </div>
                </div>

                <div class="p-4 border-b text-sm">
                    <div class="text-sm">号码支架成功，运营商未成功。</div>
                    <div class="flex flex-row justify-between mt-2">
                        <div class="text-lime-600">
                            系统
                        </div>
                        <div>
                            2023-09-08 17:18:19
                        </div>
                    </div>
                </div>

                <div class="p-4 border-b text-sm">
                    <div class="text-sm">号码支架成功，运营商未成功。</div>
                    <div class="flex flex-row justify-between mt-2">
                        <div class="text-lime-600">
                            系统
                        </div>
                        <div>
                            2023-09-08 17:18:19
                        </div>
                    </div>
                </div>
            </div>
            <el-pagination class="flex justify-center py-4" prev-text="上一页" next-text="下一页" background layout="prev, next"
                :total="1000" />
        </div>
    </div>
</template>
<script lang="ts">
import { onMounted, reactive, defineComponent, defineAsyncComponent, toRefs } from 'vue';
// import { getSearchOrderListApi } from '@/api/index'

export default defineComponent({
    name: 'Order',
    components: {
        OrderList: defineAsyncComponent(() => import('./components/orderList.vue'))
    },
    setup() {
        const state = reactive({
            activities: [
                {
                    content: '号码信息',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    type: 'primary'
                },
                {
                    content: '支付信息',
                    timestamp: '2018-04-03 20:46',
                    color: '#0bbd87',
                },
                {
                    content: '生产状态',
                    timestamp: '2018-04-03 20:46',
                    size: 'large',
                }
            ]
        })

        onMounted(() => {

        })

        return {
            ...toRefs(state)
        }
    }
})
</script>

<style lang="scss" scoped>
@import "./index.module.scss";
</style>