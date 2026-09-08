<template>
  <section class="space-y-5">
    <div>
      <h2 class="text-lg font-semibold">Contracts</h2>
      <p class="text-sm text-gray-600">Worker view shows what you earn, not what the employer pays Outsorce as platform margin.</p>
    </div>
    <div v-for="contract in contracts" :key="contract.id" class="border border-line bg-white p-5">
      <div class="flex items-center justify-between">
        <div>
          <p class="font-semibold">Contract {{ contract.id.slice(0, 8) }}</p>
          <p class="mt-1 text-sm text-gray-600">Worker amount: {{ contract.currency }} {{ contract.worker_amount.toLocaleString() }}</p>
        </div>
        <StatusBadge :value="contract.status" />
      </div>
    </div>
    <p v-if="!contracts.length" class="border border-line bg-white p-8 text-center text-sm text-gray-600">No active worker contracts yet.</p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'worker', middleware: 'worker' })

const contracts = ref<any[]>([])
onMounted(async () => {
  const { data } = await useApi().get('/worker/contracts')
  contracts.value = data
})
</script>
