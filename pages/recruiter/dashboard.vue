<template>
  <section class="space-y-6">
    <div class="grid gap-4 md:grid-cols-3">
      <MetricTile label="Open tasks" :value="String(data.tasks.length)" icon="briefcase" />
      <MetricTile label="Commission rows" :value="String(data.commissions.length)" icon="file-invoice" />
      <MetricTile label="Rate" :value="`${data.profile?.commission_rate || 0}%`" icon="chart-line" />
    </div>
    <div class="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <div class="rounded-[32px] border border-line bg-white p-6">
        <h2 class="text-xl font-semibold tracking-[-0.02em]">{{ data.profile?.agency_name || 'Recruiter profile' }}</h2>
        <p class="mt-3 text-sm leading-6 text-gray-600">Submit qualified workers to employer tasks and track commission statements.</p>
        <div class="mt-6 rounded-2xl bg-surface p-4">
          <p class="text-sm text-gray-500">Placement mode</p>
          <p class="mt-1 font-semibold">Managed shortlist</p>
        </div>
      </div>
      <div class="rounded-[32px] border border-line bg-white p-6">
        <h2 class="text-xl font-semibold tracking-[-0.02em]">Open roles accepting recruiter help</h2>
        <div class="mt-5 grid gap-3">
          <div v-for="task in data.tasks" :key="task.id" class="rounded-2xl bg-surface p-4">
            <p class="font-semibold">{{ task.title }}</p>
            <p class="mt-1 text-sm text-gray-600">{{ task.category }} · {{ task.budget }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'recruiter', middleware: 'recruiter' })

const data = reactive({
  profile: { agency_name: 'Northstar Recruiting', commission_rate: 15 } as any,
  tasks: [
    { id: 1, title: 'Five field agents', category: 'Field work', budget: 'NGN 780k' },
    { id: 2, title: 'Remote sales callers', category: 'Sales', budget: 'NGN 520k' },
  ] as any[],
  commissions: [{ id: 1 }, { id: 2 }] as any[],
})
onMounted(async () => {
  try {
    const { data: response } = await useApi().get('/recruiter/dashboard')
    Object.assign(data, response)
  } catch {}
})
</script>
