<template>
  <section class="space-y-8">
    <div class="relative overflow-hidden rounded-[24px] bg-[#111819]">
      <img
        src="https://images.pexels.com/photos/3862127/pexels-photo-3862127.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Professional team discussing project delivery"
        class="h-64 w-full object-cover opacity-45"
      />
      <div class="absolute inset-0 flex flex-col justify-center px-8 text-white">
        <p class="text-sm font-medium text-white/75">Curated opportunities</p>
        <h2 class="mt-3 max-w-2xl text-4xl font-semibold leading-tight">Review matched contract roles selected by Outsource.</h2>
      </div>
    </div>
    <div class="grid gap-5 md:grid-cols-4">
      <MetricTile label="Profile completion" value="82%" icon="circle-check" />
      <MetricTile label="Opportunities" value="4" icon="search" />
      <MetricTile label="Active engagements" value="1" icon="briefcase" />
      <MetricTile label="Payout history" value="USD 9.5K" icon="money-bill-transfer" />
    </div>
    <div class="rounded-2xl border border-line bg-white p-5">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Current Opportunities</h2>
        <NuxtLink to="/talent/opportunities" class="text-sm font-semibold text-[#3989f7]">View all</NuxtLink>
      </div>
      <div class="mt-5 grid gap-4 md:grid-cols-2">
        <article v-for="item in opportunities" :key="item.title" class="rounded-2xl bg-surface p-5">
          <StatusBadge :value="item.status" />
          <h3 class="mt-4 text-lg font-semibold">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">{{ item.summary }}</p>
          <div class="mt-5 flex items-center justify-between text-sm font-medium">
            <span>{{ item.rate }}</span>
            <NuxtLink to="/talent/opportunities/1" class="rounded-xl bg-[#3989f7] px-4 py-2 text-white">Review</NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'talent', middleware: 'talent' })

const opportunities = [
  { title: 'Senior Go Engineer', summary: 'Remote backend role for a European fintech company.', rate: 'USD 4,500/month', status: 'NEW' },
  { title: 'Platform Reliability Lead', summary: 'Six-month infrastructure engagement for a SaaS operations team.', rate: 'USD 5,200/month', status: 'PENDING' },
]
</script>
