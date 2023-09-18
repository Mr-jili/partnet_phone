import request from '../utils/request';


// 客服工作台设置
export const setWorkApi = (params: any) => {
    return request({
        url: 'agent.kefu.setting/doSave',
        method: 'post',
        params: params
    });
};

// 查看客服订单列表
export const getSearchOrderListApi = (params: any) => {
    return request({
        url: 'agent.kefu.order/index',
        method: 'get',
        params: { params }
    });
};

// 查看客服订单详情
export const getSearchOrderDetailApi = (params: any) => {
    return request({
        url: 'agent.kefu.order/view',
        method: 'get',
        params: { params }
    });
};

// 订单备注添加
export const addOrderRemarkApi = (params: any) => {
    return request({
        url: 'agent.kefu.note/add',
        method: 'post',
        params: params
    });
};

// 订单备注列表
export const getOrderRemarkListApi = (params: any) => {
    return request({
        url: 'agent.kefu.note/index',
        method: 'post',
        params: params
    });
};

// 订单备注完结
export const getOrderRemarkFinishApi = (params: any) => {
    return request({
        url: 'agent.kefu.order/finish',
        method: 'post',
        params: params
    });
};
