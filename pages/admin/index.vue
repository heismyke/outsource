<template>
  <main class="min-h-screen bg-[#f5f6f4] text-ink">
    <div class="grid min-h-screen lg:grid-cols-[0.78fr_1.22fr]">
      <section class="hidden border-r border-line bg-white p-10 lg:flex lg:flex-col lg:justify-between">
        <NuxtLink to="/" class="inline-flex w-fit items-center">
          <img src="~/assets/images/outsorce-logo.png" alt="Outsorce" class="h-10 w-auto" />
        </NuxtLink>

        <div>
          <p class="text-sm font-semibold text-brand">Internal operations</p>
          <h1 class="mt-4 max-w-lg text-6xl font-semibold leading-[1.03] tracking-[-0.055em]">
            Admin access for marketplace control.
          </h1>
          <p class="mt-5 max-w-md text-sm leading-6 text-slate-600">
            Review tasks, payments, worker payouts, disputes, verification queues, and platform risk from the admin dashboard.
          </p>
        </div>

        <div class="grid gap-3">
          <div v-for="item in adminQueues" :key="item" class="rounded-[22px] border border-line bg-surface px-4 py-3 text-sm font-semibold text-slate-700">
            {{ item }}
          </div>
        </div>
      </section>

      <section class="flex items-center justify-center px-4 py-10">
        <div class="w-full max-w-[460px] rounded-[34px] border border-line bg-white p-6 shadow-[0_30px_90px_rgba(15,26,21,0.08)] md:p-8">
          <NuxtLink to="/" class="inline-flex items-center lg:hidden">
            <img src="~/assets/images/outsorce-logo.png" alt="Outsorce" class="h-9 w-auto" />
          </NuxtLink>

          <div class="mt-8 lg:mt-0">
            <p class="text-sm font-semibold text-brand">Admin sign in</p>
            <h2 class="mt-3 text-4xl font-semibold tracking-[-0.04em]">Operations console.</h2>
            <p class="mt-3 text-sm leading-6 text-slate-600">
              This route is for internal Outsorce operators only.
            </p>
          </div>

          <form class="mt-8 space-y-4" @submit.prevent="login">
            <label class="block text-sm font-semibold">
              Admin email
              <input
                v-model="email"
                type="email"
                autocomplete="email"
                placeholder="admin@outsorce.com"
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
              {{ isSubmitting ? 'Signing in...' : 'Open admin dashboard' }}
              <FontAwesomeIcon icon="arrow-right" />
            </button>
          </form>

          <div class="mt-6 flex items-center justify-between text-sm">
            <NuxtLink to="/login" class="font-semibold text-slate-600 transition hover:text-brand">User login</NuxtLink>
            <NuxtLink to="/" class="font-semibold text-slate-600 transition hover:text-brand">Back to site</NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const email = ref('')
const password = ref('')
const error = ref('')
const isSubmitting = ref(false)
const auth = useAuthStore()

const adminQueues = [
  'Task moderation',
  'Deposit and payment checks',
  'Withdrawal review',
  'Dispute handling',
]

const login = async () => {
  error.value = ''
  isSubmitting.value = true
  try {
    const { data } = await useApi().post('/auth/login?role=ADMIN', { email: email.value, password: password.value })
    auth.setSession(data, 'ADMIN')
    await navigateTo('/admin/dashboard')
  } catch {
    error.value = 'Could not open admin access. Check credentials and try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
