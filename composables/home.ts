import Http from '@/utils/http'

/**
 * 获取标签
 */
export const useGetTags = (params?: { size?: number, page?: number }) => {
  return Http.get('/app/v1/tags', params)
}

export const getHomeList = (params?: any) => {
    console.log(params)
    return Http.post('/api/games/homeList', params)
}
 
export const get1 = (params?:any) => {
    return Http.get('接口地址', params)
}