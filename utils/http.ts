import { _AsyncData } from 'nuxt3/dist/app/composables/asyncData'
import { hash } from 'ohash'

const fetch = (url: string, options?: any): Promise<any> => {
  const { $config  } = useNuxtApp()
  const reqUrl =  'http://127.0.0.1' + url // 你的接口地址
  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
   const key = hash(JSON.stringify(options) + '_' + url) 
  // 如果需要统一加参数可以options.params.token = 'xxx'
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, { ...options, key }).then(({ data, error }: _AsyncData<any>) => {
     console.log(options,12312)
			if (error.value) {
        reject(error.value)
        return
      }
      const value = data.value
      if (!value) {
        // 这里处理错你自定义的错误，例如code !== 1
        throw createError({
          statusCode: 500,
          statusMessage: reqUrl,
          message: '自己后端接口的报错信息',
        })
      } else {
        resolve(value)
      }
    }).catch((err: any) => {
      console.log(err)
      reject(err)
    })
  })
}

export default new class Http {

  get(url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'get', params })
  }

  post(url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'post', params })
  }

  put(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'put', body })
  }

  delete(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'delete', body })
  }
}