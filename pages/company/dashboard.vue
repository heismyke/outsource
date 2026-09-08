<template>
  <section class="space-y-8">
    <div class="relative overflow-hidden rounded-[24px] bg-[#111819]">
      <img
        src="https://images.pexels.com/photos/7433865/pexels-photo-7433865.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Company team discussing a talent request"
        class="h-64 w-full object-cover opacity-45"
      />
      <div class="absolute inset-0 flex flex-col justify-center px-8 text-white">
        <p class="text-sm font-medium text-white/75">Managed hiring desk</p>
        <h2 class="mt-3 max-w-2xl text-4xl font-semibold leading-tight">Request vetted talent and let Outsorce manage the match.</h2>
      </div>
      <div class="absolute -bottom-8 left-8 right-8 hidden grid-cols-[1fr_220px_150px] items-center gap-4 rounded-2xl bg-white p-4 shadow-xl md:grid">
        <input class="rounded-xl border border-line px-4 py-3 text-sm text-gray-700" placeholder="Role title, skills, or project need" />
        <select class="rounded-xl border border-line px-4 py-3 text-sm text-gray-700">
          <option>Location: All</option>
          <option>Remote</option>
          <option>Lagos</option>
        </select>
        <NuxtLink to="/company/requests/new" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3989f7] px-4 py-3 text-sm font-semibold text-white">
          <FontAwesomeIcon icon="search" class="h-4 w-4" />
          Search
        </NuxtLink>
      </div>
    </div>

    <div class="grid gap-5 pt-6 md:grid-cols-4">
      <MetricTile label="Active requests" value="12" icon="briefcase" />
      <MetricTile label="Shortlisted talents" value="34" icon="users" />
      <MetricTile label="Active engagements" value="8" icon="circle-check" />
      <MetricTile label="Outstanding invoices" value="NGN 4.2M" icon="file-invoice" />
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
      <div class="rounded-2xl border border-line bg-white p-5">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Recommended Shortlists</h2>
          <NuxtLink to="/company/shortlists" class="text-sm font-semibold text-[#3989f7]">View all</NuxtLink>
        </div>
        <div class="mt-5 space-y-4">
          <article v-for="talent in shortlists" :key="talent.name" class="grid gap-4 rounded-2xl bg-surface p-4 md:grid-cols-[64px_1fr_auto] md:items-center">
            <img :src="talent.image" :alt="talent.name" class="h-16 w-16 rounded-2xl object-cover" />
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="font-semibold">{{ talent.title }}</h3>
                <span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">{{ talent.score }}</span>
              </div>
              <p class="mt-1 text-sm text-gray-600">{{ talent.summary }}</p>
              <p class="mt-3 text-sm font-medium text-gray-700">{{ talent.rate }} | {{ talent.location }}</p>
            </div>
            <div class="flex gap-2">
              <button class="rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold">Details</button>
              <button class="rounded-xl bg-[#3989f7] px-4 py-2 text-sm font-semibold text-white">Accept</button>
            </div>
          </article>
        </div>
      </div>

      <div class="space-y-6">
        <div class="rounded-2xl border border-line bg-white p-5">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">September 2026</h2>
            <FontAwesomeIcon icon="bell" class="h-5 w-5 text-gray-400" />
          </div>
          <div class="mt-5 grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
            <span v-for="day in days" :key="day">{{ day }}</span>
            <span v-for="date in dates" :key="date" class="rounded-xl py-3" :class="date === 15 ? 'bg-surface font-semibold text-[#172033]' : ''">{{ date }}</span>
          </div>
        </div>
        <div class="rounded-2xl border border-line bg-white p-5">
          <h2 class="text-xl font-semibold">Upcoming Reviews</h2>
          <div class="mt-4 space-y-3">
            <div class="rounded-2xl bg-surface p-4">
              <p class="text-sm font-semibold">Senior Go Engineer shortlist</p>
              <p class="mt-1 text-sm text-gray-600">Today, 11:30-12:00</p>
            </div>
            <div class="rounded-2xl bg-surface p-4">
              <p class="text-sm font-semibold">Invoice payment confirmation</p>
              <p class="mt-1 text-sm text-gray-600">Tomorrow, 09:00-09:30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })

const shortlists = [
  {
    name: 'David Okafor',
    title: 'Senior Go Engineer',
    score: 'Curated',
    summary: 'Backend engineer with Go, PostgreSQL, Docker, and distributed systems experience.',
    rate: 'USD 4,500/month',
    location: 'Nigeria, Remote',
    image: 'https://images.pexels.com/photos/19805878/pexels-photo-19805878.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
  {
    name: 'Maya Chen',
    title: 'Product Designer',
    score: 'Available',
    summary: 'Product designer focused on B2B dashboards, design systems, and customer workflows.',
    rate: 'USD 3,800/month',
    location: 'Remote',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
]

const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const dates = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
</script>
