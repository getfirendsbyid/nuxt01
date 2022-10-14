import Http from '@/utils/http'
 
export const getHeroInfo = (params?: any) => {
    return Http.post('/api/lol/heroInfo', params)
}
 
