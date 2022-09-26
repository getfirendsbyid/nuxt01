import Http from '@/utils/http'

/**
 * 获取首页列表
 */
export const getHomeList = (params?: any) => {
    console.log(params)
    return Http.post('/api/games/homeList', params)
}
 
export const get1 = (params?:any) => {
    return Http.get('接口地址', params)
}