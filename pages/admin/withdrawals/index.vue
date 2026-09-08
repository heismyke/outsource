<template>
  <section class="space-y-5">
    <div>
      <h2 class="text-lg font-semibold">Worker withdrawals</h2>
      <p class="text-sm text-gray-600">Manual payout queue for worker withdrawal requests.</p>
    </div>
    <div class="overflow-hidden border border-line bg-white">
      <table class="min-w-full divide-y divide-line text-sm">
        <thead class="bg-surface text-left text-gray-600">
          <tr>
            <th class="px-5 py-3 font-medium">Worker</th>
            <th class="px-5 py-3 font-medium">Amount</th>
            <th class="px-5 py-3 font-medium">Reference</th>
            <th class="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="withdrawal in withdrawals" :key="withdrawal.id" class="border-t border-line">
            <td class="px-5 py-4 font-semibold">{{ withdrawal.worker_id.slice(0, 8) }}</td>
            <td class="px-5 py-4">{{ withdrawal.currency }} {{ withdrawal.amount.toLocaleString() }}</td>
            <td class="px-5 py-4 text-gray-600">{{ withdrawal.reference || 'Not paid yet' }}</td>
            <td class="px-5 py-4"><StatusBadge :value="withdrawal.status" /></td>
          </tr>
          <tr v-if="!withdrawals.length">
            <td colspan="4" class="px-5 py-10 text-center text-gray-600">No withdrawal requests yet.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const withdrawals = ref<any[]>([])
onMounted(async () => {
  const { data } = await useApi().get('/admin/withdrawals')
  withdrawals.value = data
})
</script>
