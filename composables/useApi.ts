import axios from 'axios'
import { useAuthStore } from '~/stores/auth'

export const useApi = () => {
  const config = useRuntimeConfig()
  const auth = useAuthStore()

  const client = axios.create({
    baseURL: config.public.apiBaseUrl,
    timeout: 15000,
  })

  client.interceptors.request.use((request) => {
    if (auth.accessToken) {
      request.headers.Authorization = `Bearer ${auth.accessToken}`
    }
    return request
  })

  return client
}
