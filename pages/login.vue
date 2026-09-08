<template>
  <main class="grid min-h-screen bg-white text-ink lg:grid-cols-[0.92fr_1.08fr]">
    <section class="relative hidden overflow-hidden bg-ink p-10 text-white lg:flex lg:flex-col lg:justify-between">
      <img
        src="~/assets/images/pexels-a-darmel-8133991.jpg"
        alt="Outsorce workspace"
        class="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-[#0f1a15]/95 via-[#0f1a15]/78 to-[#0f1a15]/38" />

      <NuxtLink to="/" class="relative inline-flex w-fit items-center">
        <img src="~/assets/images/outsorce-logo.png" alt="Outsorce" class="h-11 w-auto brightness-0 invert" />
      </NuxtLink>

      <div class="relative max-w-xl">
        <p class="text-sm font-semibold text-white/64">One login. Role-specific workspace.</p>
        <h1 class="mt-5 text-6xl font-semibold leading-[1.03] tracking-[-0.055em]">
          Manage tasks, deposits, contracts, and payouts.
        </h1>
        <div class="mt-8 grid grid-cols-3 gap-3">
          <div v-for="item in trustItems" :key="item.label" class="rounded-[24px] border border-white/14 bg-white/10 p-4 backdrop-blur">
            <p class="text-xs text-white/58">{{ item.label }}</p>
            <p class="mt-1 font-semibold">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="flex min-h-screen items-center justify-center px-4 py-10">
      <div class="w-full max-w-[520px]">
        <NuxtLink to="/" class="inline-flex items-center lg:hidden">
          <img src="~/assets/images/outsorce-logo.png" alt="Outsorce" class="h-10 w-auto" />
        </NuxtLink>

        <div class="mt-10 lg:mt-0">
          <p class="text-sm font-semibold text-brand">Sign in</p>
          <h2 class="mt-3 text-4xl font-semibold tracking-[-0.04em]">Choose your workspace.</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">
            Log in only after your workspace has been created and approved.
          </p>
        </div>

        <div class="mt-8 grid gap-2 sm:grid-cols-2">
          <button
            v-for="option in roleOptions"
            :key="option.value"
            type="button"
            class="rounded-[22px] border p-4 text-left transition"
            :class="
              role === option.value
                ? 'border-brand bg-[#f0faf8] shadow-[0_16px_40px_rgba(15,118,110,0.1)]'
                : 'border-line bg-white hover:border-slate-300'
            "
            @click="role = option.value"
          >
            <span class="grid h-10 w-10 place-items-center rounded-2xl bg-surface text-brand">
              <FontAwesomeIcon :icon="option.icon" class="h-4 w-4" />
            </span>
            <span class="mt-4 block font-semibold">{{ option.label }}</span>
            <span class="mt-1 block text-xs leading-5 text-slate-500">{{ option.copy }}</span>
          </button>
        </div>

        <form class="mt-8 space-y-4" @submit.prevent="login">
          <label class="block text-sm font-semibold">
            Email
            <input
              v-model="email"
              type="email"
              autocomplete="email"
              placeholder="name@company.com"
              class="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-4 text-base focus-ring"
            />
          </label>
          <label class="block text-sm font-semibold">
            Password
            <input
              v-model="password"
              type="password"
              autocomplete="current-password"
              placeholder="Enter password"
              class="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-4 text-base focus-ring"
            />
          </label>

          <div v-if="error" class="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {{ error }}
          </div>

          <button
            class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Signing in...' : `Continue as ${currentRoleLabel}` }}
            <FontAwesomeIcon icon="arrow-right" />
          </button>
        </form>

        <div class="mt-6 flex items-center justify-between text-sm">
          <NuxtLink to="/forgot-password" class="font-semibold text-slate-600 transition hover:text-brand">Forgot password?</NuxtLink>
          <NuxtLink to="/register" class="font-semibold text-slate-600 transition hover:text-brand">Create access</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { UserRole } from '~/types/auth'

definePageMeta({ layout: 'auth' })

const email = ref('')
const password = ref('')
const role = ref<UserRole>('EMPLOYER')
const error = ref('')
const isSubmitting = ref(false)
const auth = useAuthStore()

const roleOptions: Array<{ value: UserRole; label: string; copy: string; icon: string }> = [
  { value: 'EMPLOYER', label: 'Employer', copy: 'Post tasks and fund deposits.', icon: 'building' },
  { value: 'WORKER', label: 'Worker', copy: 'Apply, deliver, and withdraw.', icon: 'users' },
  { value: 'RECRUITER', label: 'Recruiter', copy: 'Submit shortlists and track commission.', icon: 'user-tie' },
  { value: 'ADMIN', label: 'Admin', copy: 'Review marketplace operations.', icon: 'shield-halved' },
]

const trustItems = [
  { label: 'Deposit', value: 'Escrow-led' },
  { label: 'Payouts', value: '<48h target' },
  { label: 'Access', value: 'Role-based' },
]

const currentRoleLabel = computed(() => roleOptions.find((option) => option.value === role.value)?.label || 'workspace')

const login = async () => {
  error.value = ''
  isSubmitting.value = true
  try {
    if (role.value !== 'ADMIN' && import.meta.client) {
      const registrations = JSON.parse(localStorage.getItem('outsorce_registrations') || '{}')
      if (registrations[email.value.toLowerCase()] !== role.value) {
        error.value = `Create ${currentRoleLabel.value.toLowerCase()} access before logging in.`
        return
      }
    }
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
    error.value = 'Could not sign in. Check your connection and try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
