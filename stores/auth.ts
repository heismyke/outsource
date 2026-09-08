import { defineStore } from 'pinia'
import type { TokenPair, UserRole } from '~/types/auth'

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  role: UserRole | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: null,
    refreshToken: null,
    role: null,
  }),
  actions: {
    setSession(tokens: TokenPair, role: UserRole) {
      this.accessToken = tokens.access_token
      this.refreshToken = tokens.refresh_token
      this.role = role
    },
    logout() {
      this.accessToken = null
      this.refreshToken = null
      this.role = null
      navigateTo('/login')
    },
  },
  persist: false,
})
