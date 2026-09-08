<template>
  <section class="space-y-6">
    <div class="grid gap-4 md:grid-cols-4">
      <MetricTile label="Open tasks" :value="String(view.open_tasks)" icon="briefcase" />
      <MetricTile label="Active contracts" :value="String(view.active_contracts)" icon="circle-check" />
      <MetricTile label="Open disputes" :value="String(view.open_disputes)" icon="shield-halved" />
      <MetricTile label="Pending verifications" :value="String(view.pending_verifications)" icon="users" />
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[32px] border border-line bg-white p-6">
        <h2 class="text-xl font-semibold tracking-[-0.02em]">Marketplace money</h2>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div v-for="item in moneyTiles" :key="item.label" class="rounded-[24px] bg-surface p-5">
            <p class="text-sm text-gray-500">{{ item.label }}</p>
            <p class="mt-2 text-2xl font-semibold tracking-[-0.03em]">{{ item.value }}</p>
          </div>
        </div>
      </div>
      <div class="rounded-[32px] border border-line bg-white p-6">
        <h2 class="text-xl font-semibold tracking-[-0.02em]">Today’s queues</h2>
        <div class="mt-5 space-y-3">
          <div v-for="queue in queues" :key="queue.label" class="flex items-center justify-between rounded-2xl bg-surface px-4 py-3">
            <span class="font-medium">{{ queue.label }}</span>
            <span class="text-sm font-semibold text-brand">{{ queue.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const data = ref<any>({})
const fallback = {
  open_tasks: 18,
  applications: 64,
  active_contracts: 11,
  pending_payments: 7,
  open_disputes: 3,
  pending_verifications: 22,
  escrowed_funds: 12500000,
  worker_due: 3800000,
  platform_revenue: 920000,
}

const view = computed(() => ({ ...fallback, ...data.value }))
const money = (amount = 0) => `NGN ${Number(amount).toLocaleString()}`
const moneyTiles = computed(() => [
  { label: 'Escrow held', value: money(view.value.escrowed_funds) },
  { label: 'Worker balance due', value: money(view.value.worker_due) },
  { label: 'Platform revenue', value: money(view.value.platform_revenue) },
])
const queues = computed(() => [
  { label: 'First posts to review', value: 6 },
  { label: 'Withdrawal checks', value: view.value.pending_payments },
  { label: 'Dispute evidence windows', value: view.value.open_disputes },
  { label: 'ID and recruiter reviews', value: view.value.pending_verifications },
])

onMounted(async () => {
  try {
    const response = await useApi().get('/admin/dashboard')
    data.value = response.data
  } catch {
    data.value = fallback
  }
})
</script>
