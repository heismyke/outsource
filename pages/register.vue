<template>
  <main class="min-h-screen bg-white px-4 py-10 text-ink">
    <div class="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <section>
        <NuxtLink to="/" class="inline-flex items-center">
          <img src="~/assets/images/outsorce-logo.png" alt="Outsorce" class="h-10 w-auto" />
        </NuxtLink>

        <div class="mt-14">
          <p class="text-sm font-semibold text-brand">Create access</p>
          <h1 class="mt-4 text-5xl font-semibold leading-[1.03] tracking-[-0.045em] md:text-6xl">
            Register for the right workspace.
          </h1>
          <p class="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Outsorce separates companies, workers, and recruiters because each role has different verification and approval steps.
          </p>
        </div>

        <div class="mt-10 grid gap-3">
          <button
            v-for="option in roleOptions"
            :key="option.value"
            type="button"
            class="rounded-[26px] border p-5 text-left transition"
            :class="role === option.value ? 'border-brand bg-[#f0faf8]' : 'border-line bg-white hover:border-slate-300'"
            @click="role = option.value"
          >
            <span class="block font-semibold">{{ option.label }}</span>
            <span class="mt-1 block text-sm leading-6 text-slate-600">{{ option.copy }}</span>
          </button>
        </div>
      </section>

      <section class="rounded-[36px] border border-line bg-surface p-5 md:p-7">
        <form v-if="!submitted" class="rounded-[28px] bg-white p-5 md:p-7" @submit.prevent="register">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-semibold text-brand">{{ selectedRole.label }}</p>
              <h2 class="mt-2 text-3xl font-semibold tracking-[-0.035em]">Registration details</h2>
            </div>
            <FontAwesomeIcon :icon="selectedRole.icon" class="mt-2 h-5 w-5 text-brand" />
          </div>

          <div class="mt-7 grid gap-4">
            <label class="block text-sm font-semibold">
              Email
              <input v-model="form.email" type="email" required autocomplete="email" class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
            </label>
            <label class="block text-sm font-semibold">
              Password
              <input v-model="form.password" type="password" required minlength="8" autocomplete="new-password" class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
            </label>

            <div v-if="role === 'EMPLOYER'" class="grid gap-4 md:grid-cols-2">
              <label class="block text-sm font-semibold">
                Company name
                <input v-model="form.company" required class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
              </label>
              <label class="block text-sm font-semibold">
                Hiring need
                <input v-model="form.need" :placeholder="prefillCategory || 'Operations support'" class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
              </label>
            </div>

            <div v-if="role === 'WORKER'" class="grid gap-4 md:grid-cols-2">
              <label class="block text-sm font-semibold">
                Full name
                <input v-model="form.fullName" required class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
              </label>
              <label class="block text-sm font-semibold">
                Primary skill
                <input v-model="form.skill" required placeholder="Customer support, design, field research" class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
              </label>
            </div>

            <div v-if="role === 'RECRUITER'" class="grid gap-4 md:grid-cols-2">
              <label class="block text-sm font-semibold">
                Agency or name
                <input v-model="form.agency" required class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
              </label>
              <label class="block text-sm font-semibold">
                Talent category
                <input v-model="form.category" required placeholder="Operations, field teams, digital roles" class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
              </label>
            </div>

            <label class="block text-sm font-semibold">
              Location
              <input v-model="form.location" placeholder="Lagos, Abuja, Remote" class="mt-2 w-full rounded-2xl border border-line px-4 py-3 focus-ring" />
            </label>
          </div>

          <div v-if="error" class="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {{ error }}
          </div>

          <button
            class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Submitting...' : 'Submit registration' }}
            <FontAwesomeIcon icon="arrow-right" />
          </button>

          <p class="mt-5 text-center text-sm text-slate-600">
            Already approved?
            <NuxtLink to="/login" class="font-semibold text-brand">Log in</NuxtLink>
          </p>
        </form>

        <div v-else class="rounded-[28px] bg-white p-7">
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-[#f0faf8] text-brand">
            <FontAwesomeIcon icon="circle-check" />
          </span>
          <h2 class="mt-6 text-3xl font-semibold tracking-[-0.035em]">Registration received.</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">
            Your {{ selectedRole.label.toLowerCase() }} workspace request has been submitted. Admin approval and profile verification come before full marketplace access.
          </p>
          <div class="mt-6 grid gap-3 text-sm text-slate-600">
            <div v-for="step in selectedRole.steps" :key="step" class="rounded-2xl bg-surface px-4 py-3">{{ step }}</div>
          </div>
          <NuxtLink to="/login" class="mt-7 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-brand">
            Go to login
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { UserRole } from '~/types/auth'

definePageMeta({ layout: 'auth' })

const route = useRoute()
const role = ref<Extract<UserRole, 'EMPLOYER' | 'WORKER' | 'RECRUITER'>>(
  route.query.role === 'WORKER' || route.query.role === 'RECRUITER' ? route.query.role : 'EMPLOYER',
)
const isSubmitting = ref(false)
const submitted = ref(false)
const error = ref('')

const prefillCategory = computed(() => (typeof route.query.category === 'string' ? route.query.category : ''))

const form = reactive({
  email: '',
  password: '',
  company: '',
  need: prefillCategory.value,
  fullName: '',
  skill: '',
  agency: '',
  category: '',
  location: '',
})

const roleOptions = [
  {
    value: 'EMPLOYER' as const,
    label: 'Employer',
    icon: 'building',
    copy: 'For companies creating tasks, deposits, shortlists, and contracts.',
    steps: ['Company profile review', 'Task posting access', 'Deposit and contract setup'],
  },
  {
    value: 'WORKER' as const,
    label: 'Worker',
    icon: 'users',
    copy: 'For people applying to tasks, delivering work, and receiving payouts.',
    steps: ['Identity and skills review', 'Task feed access', 'Wallet setup before withdrawal'],
  },
  {
    value: 'RECRUITER' as const,
    label: 'Recruiter',
    icon: 'user-tie',
    copy: 'For recruiters submitting worker shortlists and tracking commission.',
    steps: ['Recruiter profile review', 'Shortlist permissions', 'Commission tracking access'],
  },
]

const selectedRole = computed(() => roleOptions.find((option) => option.value === role.value) || roleOptions[0])

const register = async () => {
  error.value = ''
  isSubmitting.value = true
  try {
    await useApi().post(`/auth/register?role=${role.value}`, {
      role: role.value,
      email: form.email,
      password: form.password,
      profile: {
        company: form.company,
        need: form.need,
        full_name: form.fullName,
        skill: form.skill,
        agency: form.agency,
        category: form.category,
        location: form.location,
      },
    })
    if (import.meta.client) {
      const registrations = JSON.parse(localStorage.getItem('outsorce_registrations') || '{}')
      registrations[form.email.toLowerCase()] = role.value
      localStorage.setItem('outsorce_registrations', JSON.stringify(registrations))
    }
    submitted.value = true
  } catch {
    error.value = 'Could not submit registration. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
