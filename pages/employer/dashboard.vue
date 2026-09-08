<template>
  <section class="space-y-6">
    <div class="grid gap-4 md:grid-cols-4">
      <MetricTile label="Open tasks" :value="String(summary.tasks)" icon="briefcase" />
      <MetricTile label="Applications" :value="String(summary.applications)" icon="users" />
      <MetricTile label="Contracts" :value="String(summary.contracts)" icon="circle-check" />
      <MetricTile label="Escrowed" :value="money(summary.wallet?.escrowed)" icon="money-bill-transfer" />
    </div>
    <div class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-[32px] border border-line bg-white p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl font-semibold tracking-[-0.02em]">Task pipeline</h2>
          <NuxtLink to="/employer/tasks" class="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white">Post task</NuxtLink>
        </div>
        <div class="mt-5 space-y-3">
          <div v-for="task in data.tasks" :key="task.id" class="flex items-center justify-between rounded-2xl bg-surface p-4">
            <div>
              <p class="font-semibold">{{ task.title }}</p>
              <p class="text-sm text-gray-600">{{ task.category }} · {{ task.currency }} {{ task.budget.toLocaleString() }}</p>
            </div>
            <StatusBadge :value="task.status" />
          </div>
        </div>
      </div>
      <div class="rounded-[32px] border border-line bg-white p-6">
        <p class="text-sm font-semibold text-brand">Funding model</p>
        <h2 class="mt-4 text-2xl font-semibold tracking-[-0.03em]">Fund the deposit. Start the work.</h2>
        <p class="mt-3 text-sm leading-6 text-gray-600">Contracts go active after the deposit lands. The balance remains visible as an upcoming obligation until approval.</p>
        <NuxtLink to="/employer/payments" class="mt-6 inline-flex rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white">View payments</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'employer', middleware: 'employer' })

const data = reactive({
  tasks: [
    { id: 1, title: 'Customer support agents', category: 'Operations', currency: 'NGN', budget: 450000, status: 'open' },
    { id: 2, title: 'Field survey team', category: 'Research', currency: 'NGN', budget: 780000, status: 'in review' },
  ] as any[],
  applications: [{ id: 1 }, { id: 2 }, { id: 3 }] as any[],
  contracts: [{ id: 1 }] as any[],
  wallet: { escrowed: 390000, due: 240000 } as any,
})
const summary = computed(() => ({
  tasks: data.tasks.length,
  applications: data.applications.length,
  contracts: data.contracts.length,
  wallet: data.wallet,
}))

const money = (amount = 0) => `NGN ${Number(amount).toLocaleString()}`

onMounted(async () => {
  try {
    const { data: response } = await useApi().get('/employer/dashboard')
    Object.assign(data, response)
  } catch {}
})
</script>
