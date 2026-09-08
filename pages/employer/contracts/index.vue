<template>
  <section class="space-y-6">
    <div>
      <h2 class="text-lg font-semibold">Contracts</h2>
      <p class="text-sm text-gray-600">Accepted applications become contracts and wait for deposit confirmation.</p>
    </div>
    <div v-for="contract in contracts" :key="contract.id" class="border border-line bg-white p-5">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="font-semibold">Contract {{ contract.id.slice(0, 8) }}</p>
          <p class="mt-1 text-sm text-gray-600">Deposit due: {{ contract.currency }} {{ contract.deposit_amount.toLocaleString() }}</p>
        </div>
        <div class="flex items-center gap-3">
          <StatusBadge :value="contract.status" />
          <NuxtLink to="/employer/payments" class="rounded-md bg-[#3989f7] px-4 py-2 text-sm font-semibold text-white">Pay deposit</NuxtLink>
        </div>
      </div>
    </div>
    <p v-if="!contracts.length" class="border border-line bg-white p-8 text-center text-sm text-gray-600">No contracts yet. Accept an application first.</p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'employer', middleware: 'employer' })

const contracts = ref<any[]>([])
onMounted(async () => {
  const { data } = await useApi().get('/employer/contracts')
  contracts.value = data
})
</script>
