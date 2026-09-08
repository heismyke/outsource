<template>
  <main class="min-h-screen bg-white pt-28 text-ink">
    <section class="mx-auto max-w-7xl px-4 pb-20 pt-12">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div class="lg:sticky lg:top-32">
          <p class="text-sm font-semibold text-brand">Build a work brief</p>
          <h1 class="mt-4 text-5xl font-semibold leading-[1.03] tracking-[-0.045em] md:text-7xl">
            Start with the outcome.
          </h1>
          <p class="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Tell Outsorce what needs to happen. The workspace turns it into a task, deposit, shortlist, and contract trail.
          </p>

          <div class="mt-10 rounded-[32px] border border-line bg-surface p-6">
            <p class="text-sm font-semibold text-slate-500">Brief preview</p>
            <h2 class="mt-3 text-2xl font-semibold tracking-[-0.03em]">{{ selectedCategory.title }}</h2>
            <div class="mt-5 grid gap-3 text-sm text-slate-600">
              <div class="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                <span>Mode</span>
                <strong class="text-ink">{{ workMode }}</strong>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                <span>Budget</span>
                <strong class="text-ink">{{ budget }}</strong>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                <span>Deposit guide</span>
                <strong class="text-ink">{{ selectedCategory.deposit }}</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-10">
          <section>
            <div class="flex items-end justify-between gap-4">
              <div>
                <p class="text-sm font-semibold text-slate-500">01</p>
                <h2 class="mt-2 text-3xl font-semibold tracking-[-0.035em]">Choose the work lane</h2>
              </div>
              <p class="hidden text-sm text-slate-500 md:block">This sets the task template.</p>
            </div>

            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                v-for="category in categories"
                :key="category.title"
                type="button"
                class="rounded-[28px] border p-5 text-left transition"
                :class="
                  selectedCategory.title === category.title
                    ? 'border-brand bg-[#f0faf8] shadow-[0_18px_45px_rgba(15,118,110,0.1)]'
                    : 'border-line bg-white hover:border-slate-300 hover:bg-surface'
                "
                @click="selectedCategory = category"
              >
                <span class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-brand">
                  <FontAwesomeIcon :icon="category.icon" class="h-4 w-4" />
                </span>
                <span class="mt-5 block text-lg font-semibold">{{ category.title }}</span>
                <span class="mt-2 block text-sm leading-6 text-slate-600">{{ category.copy }}</span>
              </button>
            </div>
          </section>

          <section class="rounded-[34px] border border-line p-6">
            <p class="text-sm font-semibold text-slate-500">02</p>
            <h2 class="mt-2 text-3xl font-semibold tracking-[-0.035em]">Set the operating rules</h2>

            <div class="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p class="text-sm font-semibold">Work mode</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <button
                    v-for="mode in workModes"
                    :key="mode"
                    type="button"
                    class="rounded-full border px-4 py-2 text-sm font-semibold transition"
                    :class="workMode === mode ? 'border-ink bg-ink text-white' : 'border-line bg-white text-slate-600 hover:border-slate-300'"
                    @click="workMode = mode"
                  >
                    {{ mode }}
                  </button>
                </div>
              </div>

              <label class="block">
                <span class="text-sm font-semibold">Budget band</span>
                <select v-model="budget" class="mt-3 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm focus-ring">
                  <option v-for="option in budgetOptions" :key="option">{{ option }}</option>
                </select>
              </label>
            </div>
          </section>

          <section class="rounded-[34px] bg-ink p-6 text-white">
            <p class="text-sm font-semibold text-white/58">03</p>
            <div class="mt-2 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 class="text-3xl font-semibold tracking-[-0.035em]">Open the employer workspace</h2>
                <p class="mt-3 max-w-xl text-sm leading-6 text-white/68">
                  Next you will add deliverables, deadline, required skills, review route, and deposit before publishing.
                </p>
              </div>
              <NuxtLink
                :to="`/register?role=EMPLOYER&category=${encodeURIComponent(selectedCategory.title)}&mode=${encodeURIComponent(workMode)}&budget=${encodeURIComponent(budget)}`"
                class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:bg-brand hover:text-white"
              >
                Create employer access
                <FontAwesomeIcon icon="arrow-right" />
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })

const categories = [
  {
    icon: 'briefcase',
    title: 'Operations support',
    copy: 'Customer support, admin, sales operations, research, and recurring back-office work.',
    deposit: '30-50%',
  },
  {
    icon: 'building',
    title: 'On-site execution',
    copy: 'Field teams, audits, surveys, activations, inspections, and location-based assignments.',
    deposit: '40-50%',
  },
  {
    icon: 'chart-line',
    title: 'Digital delivery',
    copy: 'Content, design, data entry, marketing tasks, web updates, and project milestones.',
    deposit: '25-50%',
  },
  {
    icon: 'user-tie',
    title: 'Recruiter-led shortlist',
    copy: 'Invite recruiters to source qualified workers before a contract is created.',
    deposit: 'After selection',
  },
]

const workModes = ['Remote', 'On-site', 'Hybrid']
const budgetOptions = ['Under NGN 100k', 'NGN 100k - 500k', 'NGN 500k - 2m', 'Above NGN 2m']

const selectedCategory = ref(categories[0])
const workMode = ref(workModes[0])
const budget = ref(budgetOptions[1])
</script>
