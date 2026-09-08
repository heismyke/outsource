export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore()
  if (!auth.accessToken) return navigateTo('/login')
  if (auth.role !== 'EMPLOYER' && auth.role !== 'COMPANY') return navigateTo('/')
})
