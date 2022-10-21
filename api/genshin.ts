import Http from '@/utils/http'
export const getGenshinList = (params?:any)=>{
    return Http.post('/api/genShin/getHeroList',params)
}