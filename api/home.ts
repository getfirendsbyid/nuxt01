import Http from '@/utils/http'
 
export const getHomeList = (params?: any) => {
    return Http.post('/api/home/list', params)
}
 
export const get1 = (params?:any) => {
    return Http.get('接口地址', params)
}