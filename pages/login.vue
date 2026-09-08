<template>
  <form class="space-y-4" @submit.prevent="login">
    <div>
      <h1 class="text-2xl font-semibold">Login</h1>
      <p class="mt-1 text-sm text-gray-600">Use the role selector for the current development API token route.</p>
    </div>
    <label class="block text-sm font-medium">
      Email
      <input v-model="email" type="email" class="mt-1 w-full rounded-md border border-line px-3 py-2 focus-ring" />
    </label>
    <label class="block text-sm font-medium">
      Password
      <input v-model="password" type="password" class="mt-1 w-full rounded-md border border-line px-3 py-2 focus-ring" />
    </label>
    <label class="block text-sm font-medium">
      Role
      <select v-model="role" class="mt-1 w-full rounded-md border border-line px-3 py-2 focus-ring">
        <option>ADMIN</option>
        <option>EMPLOYER</option>
        <option>RECRUITER</option>
        <option>WORKER</option>
      </select>
    </label>
    <button class="w-full rounded-md bg-brand px-4 py-2 font-medium text-white">Login</button>
    <p v-if="error" class="text-sm text-red-700">{{ error }}</p>
  </form>
</template>

<script setup lang="ts">
import type { UserRole } from '~/types/auth'

definePageMeta({ layout: 'auth' })

const email = ref('')
const password = ref('')
const role = ref<UserRole>('ADMIN')
const error = ref('')
const auth = useAuthStore()

const login = async () => {
  error.value = ''
  try {
    const api = useApi()
    const { data } = await api.post(`/auth/login?role=${role.value}`, { email: email.value, password: password.value })
    auth.setSession(data, role.value)
    await navigateTo(
      role.value === 'ADMIN'
        ? '/admin/dashboard'
        : role.value === 'EMPLOYER'
          ? '/employer/dashboard'
          : role.value === 'RECRUITER'
            ? '/recruiter/dashboard'
            : '/worker/dashboard',
    )
  } catch {
    error.value = 'Unable to login.'
  }
}
</script>
