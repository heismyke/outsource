<template>
  <section class="space-y-5">
    <div>
      <h2 class="text-lg font-semibold">Contracts</h2>
      <p class="text-sm text-gray-600">Admin sees employer amount, worker amount, and platform fee.</p>
    </div>
    <div class="overflow-hidden border border-line bg-white">
      <table class="min-w-full divide-y divide-line text-sm">
        <thead class="bg-surface text-left text-gray-600">
          <tr>
            <th class="px-5 py-3 font-medium">Contract</th>
            <th class="px-5 py-3 font-medium">Employer pays</th>
            <th class="px-5 py-3 font-medium">Worker earns</th>
            <th class="px-5 py-3 font-medium">Platform fee</th>
            <th class="px-5 py-3 font-medium">Payment</th>
            <th class="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contract in contracts" :key="contract.id" class="border-t border-line">
            <td class="px-5 py-4 font-semibold">{{ contract.id.slice(0, 8) }}</td>
            <td class="px-5 py-4">{{ contract.currency }} {{ contract.total_amount.toLocaleString() }}</td>
            <td class="px-5 py-4">{{ contract.currency }} {{ contract.worker_amount.toLocaleString() }}</td>
            <td class="px-5 py-4 font-semibold">{{ contract.currency }} {{ contract.platform_fee.toLocaleString() }}</td>
            <td class="px-5 py-4"><StatusBadge :value="contract.payment_status" /></td>
            <td class="px-5 py-4"><StatusBadge :value="contract.status" /></td>
          </tr>
          <tr v-if="!contracts.length">
            <td colspan="6" class="px-5 py-10 text-center text-gray-600">No contracts yet.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const contracts = ref<any[]>([])
onMounted(async () => {
  const { data } = await useApi().get('/admin/contracts')
  contracts.value = data
})
</script>
