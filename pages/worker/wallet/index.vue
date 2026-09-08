<template>
  <section class="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
    <div class="space-y-4">
      <div class="grid gap-4 md:grid-cols-4">
        <MetricTile label="Escrowed" :value="money(wallet?.escrowed)" icon="lock" />
        <MetricTile label="Due" :value="money(wallet?.due)" icon="file-invoice" />
        <MetricTile label="Pending" :value="money(wallet?.pending)" icon="clock" />
        <MetricTile label="Available" :value="money(wallet?.available)" icon="money-bill-transfer" />
      </div>
      <div class="border border-line bg-white p-6">
        <h2 class="text-lg font-semibold">Withdrawal history</h2>
        <p class="mt-1 text-sm text-gray-600">Admin records and confirms actual payouts in this MVP.</p>
      </div>
    </div>
    <form class="border border-line bg-white p-6" @submit.prevent="withdraw">
      <h2 class="text-lg font-semibold">Request withdrawal</h2>
      <p class="mt-1 text-sm text-gray-600">NIN and bank verification will be enforced before real withdrawals in the repository-backed phase.</p>
      <input v-model.number="amount" class="mt-5 w-full rounded-md border border-line px-3 py-2" placeholder="Amount" />
      <button class="mt-4 w-full rounded-md bg-brand px-4 py-3 font-semibold text-white">Submit request</button>
      <p v-if="message" class="mt-3 text-sm text-brand">{{ message }}</p>
    </form>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'worker', middleware: 'worker' })

const wallet = ref<any>(null)
const amount = ref(500000)
const message = ref('')
const money = (value = 0) => `NGN ${Number(value).toLocaleString()}`

const load = async () => {
  const { data } = await useApi().get('/worker/wallet')
  wallet.value = data
}

const withdraw = async () => {
  await useApi().post('/worker/withdrawals', { amount: amount.value })
  message.value = 'Withdrawal request submitted for admin review.'
  await load()
}

onMounted(load)
</script>
