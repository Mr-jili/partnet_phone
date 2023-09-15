<template>
    <div class="flex flex-row justify-between">
        <div class="home-l flex-none w-60">
            <div class="home-l-h">
                <h4>订单信息</h4>
                <el-select v-model="state.value" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in OrderSearchOptions" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </div>
            <el-input v-model="state.input2" placeholder="请输入">
                <template #append>
                    <el-row>
                        <el-col :span="4">
                            <el-button type="primary">查询</el-button>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary">
                                <el-icon>
                                    <Filter />
                                </el-icon>
                            </el-button>
                        </el-col>
                    </el-row>
                </template>
            </el-input>
            <div class="home-l-c">
                <div class="home-l-c-i">
                    <div class="top">
                        <div class="top-l">
                            <span>195</span>
                            <span class="top-l-h">2427</span>
                            <span>1213</span>
                        </div>
                        <div class="top-r">
                            江苏 南京
                        </div>
                    </div>
                    <el-tag class="center" type="info">订单成功</el-tag>
                    <div class="bottom">
                        <div class="bottom-l">
                            ￥0.00
                        </div>
                        <div class="bottom-r">
                            预约：09-07 12:02
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-auto">
            <div class="home-c-t">
                <span>用户信息</span>
                <span>查号码</span>
            </div>
            <div class="home-c-b">
                <el-timeline>
                    <el-timeline-item v-for="(activity, index) in option.activities" :key="index" :type="activity.type"
                        :color="activity.color" :size="activity.size" :hollow="activity.hollow"
                        :timestamp="activity.timestamp">
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
        <div class="home-r flex-none w-60">
            <div class="home-r-h">跟进记录</div>
            <el-divider />
            <el-button>
                <el-icon>
                    <Plus />
                </el-icon>
                添加备注
            </el-button>
            <el-divider />
            <div class="home-r-i">
                <div class="home-r-i-t">号码支架成功，运营商未成功。</div>
                <div class="home-r-i-b">
                    <div class="home-r-i-b-l">
                        系统
                    </div>
                    <div class="home-r-i-b-r">
                        2023-09-08 17:18:19
                    </div>
                </div>
            </div>
            <el-divider />
            <el-pagination background layout="prev, pager, next" :total="1000" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { OrderSearchOptions } from './params';
import { reactive } from 'vue';

const option = reactive({
    activities: [
        {
            content: 'Custom icon',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary'
        },
        {
            content: 'Custom color',
            timestamp: '2018-04-03 20:46',
            color: '#0bbd87',
        },
        {
            content: 'Custom size',
            timestamp: '2018-04-03 20:46',
            size: 'large',
        },
        {
            content: 'Custom hollow',
            timestamp: '2018-04-03 20:46',
            type: 'primary',
            hollow: true,
        },
        {
            content: 'Default node',
            timestamp: '2018-04-03 20:46',
        },
    ]
})

const state = reactive({
    value: '1',
    input2: ''
})

</script>

<style lang="scss">
@import "./index.module.scss";
</style>