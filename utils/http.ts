import { _AsyncData } from 'nuxt3/dist/app/composables/asyncData'
import { hash } from 'ohash'
import { message } from 'ant-design-vue';

const fetch = (url: string, options?: any): Promise<any> => {
  const config = useRuntimeConfig()

  // Access baseURL universally
  const reqUrl =  config.public.apiBase + url // 你的接口地址
  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
   const key = hash(JSON.stringify(options) + '_' + url) 
  // 如果需要统一加参数可以options.params.token = 'xxx'
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, { ...options, key }).then(({ data, error }: _AsyncData<any>) => {
     console.log(data,12312)
			if (error.value) {
        reject(error.value)
        return
      }
      const code = data.value.code
     
      console.log(code !=200)
      if (code !=200) {
        // 这里处理错你自定义的错误，例如code !== 1
        message.error(data.value.err_msg,3)
      } else {
        resolve(data)
      }
    }).catch((err: any) => {
      message.error('请求错误,请联系管理员或刷新网页')
      console.log(err)
      reject(err)
    })
  })
}

export default new class Http {

  get(url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'get', params })
  }

  post(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'post', body })
  }

  put(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'put', body })
  }

  delete(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'delete', body })
  }
}