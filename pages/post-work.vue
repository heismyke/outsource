<template>
  <main class="min-h-screen bg-white pt-28 text-ink">
    <section class="mx-auto max-w-5xl px-4 pb-20 pt-10">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold text-brand">Step 1 of 3</p>
        <h1 class="mt-4 text-5xl font-semibold leading-[1.03] tracking-[-0.045em] md:text-7xl">
          What do you need done?
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Choose the work type first. Outsorce uses this to shape the task brief, deposit, shortlist, and contract flow.
        </p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div class="space-y-3">
          <button
            v-for="category in categories"
            :key="category.title"
            type="button"
            class="group flex w-full items-center gap-5 rounded-[28px] border bg-white p-5 text-left transition"
            :class="
              selected.title === category.title
                ? 'border-brand shadow-[0_20px_55px_rgba(15,118,110,0.13)]'
                : 'border-line hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,26,21,0.08)]'
            "
            @click="selected = category"
          >
            <span class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-surface text-brand">
              <FontAwesomeIcon :icon="category.icon" class="h-5 w-5" />
            </span>
            <span class="min-w-0 flex-1">
              <span class="block text-lg font-semibold">{{ category.title }}</span>
              <span class="mt-1 block text-sm leading-6 text-slate-600">{{ category.copy }}</span>
            </span>
            <FontAwesomeIcon icon="arrow-right" class="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand" />
          </button>
        </div>

        <aside class="h-fit rounded-[32px] border border-line bg-surface p-6">
          <p class="text-sm font-semibold text-slate-500">Selected brief</p>
          <h2 class="mt-3 text-2xl font-semibold tracking-[-0.03em]">{{ selected.title }}</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ selected.summary }}</p>

          <div class="mt-6 space-y-5">
            <label class="block">
              <span class="text-sm font-semibold">Work mode</span>
              <select v-model="workMode" class="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm focus-ring">
                <option>Remote</option>
                <option>On-site</option>
                <option>Hybrid</option>
              </select>
            </label>

            <label class="block">
              <span class="text-sm font-semibold">Budget band</span>
              <select v-model="budget" class="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm focus-ring">
                <option>Under NGN 100k</option>
                <option>NGN 100k - 500k</option>
                <option>NGN 500k - 2m</option>
                <option>Above NGN 2m</option>
              </select>
            </label>
          </div>

          <div class="mt-7 rounded-3xl bg-white p-5">
            <div v-for="item in nextSteps" :key="item" class="flex gap-3 py-2 text-sm text-slate-600">
              <FontAwesomeIcon icon="circle-check" class="mt-0.5 h-4 w-4 text-brand" />
              <span>{{ item }}</span>
            </div>
          </div>

          <NuxtLink
            :to="`/employer/tasks?category=${encodeURIComponent(selected.title)}&mode=${encodeURIComponent(workMode)}&budget=${encodeURIComponent(budget)}`"
            class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-brand"
          >
            Continue
            <FontAwesomeIcon icon="arrow-right" />
          </NuxtLink>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })

const categories = [
  {
    icon: 'briefcase',
    title: 'Business operations',
    copy: 'Support, sales, admin, research, field teams, and recurring operational work.',
    summary: 'Best for companies hiring reliable workers for measurable day-to-day tasks.',
  },
  {
    icon: 'users',
    title: 'Field and local work',
    copy: 'Location-based assignments, inspections, activations, delivery coordination, and surveys.',
    summary: 'Best when the worker needs to be in a specific city or site and proof of completion matters.',
  },
  {
    icon: 'chart-line',
    title: 'Digital project',
    copy: 'Design, content, marketing, data entry, web work, and project-based delivery.',
    summary: 'Best for scoped digital deliverables with milestones, review, approval, and payout.',
  },
  {
    icon: 'user-tie',
    title: 'Recruiter shortlist',
    copy: 'Let vetted recruiters submit candidates before you choose who to contract.',
    summary: 'Best when you want a shortlist instead of opening the task directly to all workers.',
  },
]

const selected = ref(categories[0])
const workMode = ref('Remote')
const budget = ref('NGN 100k - 500k')

const nextSteps = [
  'Create the task brief',
  'Review workers or recruiter shortlists',
  'Fund deposit only when ready to contract',
]
</script>
