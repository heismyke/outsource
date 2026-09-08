export type UserRole = 'ADMIN' | 'EMPLOYER' | 'RECRUITER' | 'WORKER' | 'COMPANY' | 'TALENT'

export interface AuthUser {
  id: string
  email: string
  role: UserRole
  status: 'PENDING' | 'APPROVED' | 'SUSPENDED'
  email_verified: boolean
}

export interface TokenPair {
  access_token: string
  refresh_token: string
  expires_in: number
}
