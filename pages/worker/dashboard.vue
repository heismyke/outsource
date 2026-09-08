<template>
  <section class="space-y-6">
    <div class="grid gap-4 md:grid-cols-4">
      <MetricTile label="Available tasks" :value="String(data.tasks.length)" icon="search" />
      <MetricTile label="Contracts" :value="String(data.contracts.length)" icon="circle-check" />
      <MetricTile label="Due earnings" :value="money(data.wallet?.due)" icon="money-bill-transfer" />
      <MetricTile label="Pending withdrawal" :value="money(data.wallet?.pending)" icon="clock" />
    </div>
    <div class="rounded-[32px] border border-line bg-white p-6">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-xl font-semibold tracking-[-0.02em]">Matched work</h2>
        <NuxtLink to="/worker/tasks" class="rounded-full border border-line px-4 py-2 text-sm font-semibold">View feed</NuxtLink>
      </div>
      <div class="mt-5 grid gap-4 lg:grid-cols-2">
        <div v-for="task in data.tasks" :key="task.id" class="rounded-[24px] bg-surface p-5">
          <p class="font-semibold">{{ task.title }}</p>
          <p class="mt-1 text-sm text-gray-600">{{ task.employer_snapshot }} · {{ task.location }}</p>
          <p class="mt-3 text-sm font-medium">{{ task.currency }} {{ task.budget.toLocaleString() }} · {{ task.deposit_percent }}% deposit</p>
          <p class="mt-2 text-sm text-gray-500">Employer payment score visible before applying.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'worker', middleware: 'worker' })

const data = reactive({
  tasks: [
    { id: 1, title: 'Product data cleanup', employer_snapshot: 'RetailCo', location: 'Remote', currency: 'NGN', budget: 180000, deposit_percent: 50 },
    { id: 2, title: 'Field verification visits', employer_snapshot: 'SurveyWorks', location: 'Lagos', currency: 'NGN', budget: 320000, deposit_percent: 40 },
  ] as any[],
  contracts: [{ id: 1 }] as any[],
  wallet: { due: 90000, pending: 45000, available: 120000 } as any,
})
const money = (amount = 0) => `NGN ${Number(amount).toLocaleString()}`

onMounted(async () => {
  try {
    const { data: response } = await useApi().get('/worker/dashboard')
    Object.assign(data, response)
  } catch {}
})
</script>
