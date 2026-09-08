<template>
  <section class="space-y-5">
    <div>
      <h2 class="text-lg font-semibold">Commission statements</h2>
      <p class="text-sm text-gray-600">MVP commissions are calculated from platform fee and paid manually by admin.</p>
    </div>
    <div class="overflow-hidden border border-line bg-white">
      <table class="min-w-full divide-y divide-line text-sm">
        <thead class="bg-surface text-left text-gray-600">
          <tr>
            <th class="px-5 py-3 font-medium">Contract</th>
            <th class="px-5 py-3 font-medium">Base</th>
            <th class="px-5 py-3 font-medium">Rate</th>
            <th class="px-5 py-3 font-medium">Commission</th>
            <th class="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in commissions" :key="item.contract_id" class="border-t border-line">
            <td class="px-5 py-4">{{ item.contract_id.slice(0, 8) }}</td>
            <td class="px-5 py-4">{{ item.currency }} {{ item.base_amount.toLocaleString() }}</td>
            <td class="px-5 py-4">{{ item.commission_rate }}%</td>
            <td class="px-5 py-4 font-semibold">{{ item.currency }} {{ item.commission_amount.toLocaleString() }}</td>
            <td class="px-5 py-4"><StatusBadge :value="item.status" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'recruiter', middleware: 'recruiter' })

const commissions = ref<any[]>([])
onMounted(async () => {
  const { data } = await useApi().get('/recruiter/commissions')
  commissions.value = data
})
</script>
