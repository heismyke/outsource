<template>
  <section class="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
    <div class="space-y-4">
      <div>
        <h2 class="text-lg font-semibold">Pay Outsource</h2>
        <p class="text-sm text-gray-600">Transfer the contract deposit to Outsource and submit the bank reference for admin confirmation.</p>
      </div>
      <div v-for="contract in contracts" :key="contract.id" class="border border-line bg-white p-5">
        <div class="flex items-start justify-between">
          <div>
            <p class="font-semibold">Contract {{ contract.id.slice(0, 8) }}</p>
            <p class="mt-1 text-sm text-gray-600">Required deposit: {{ contract.currency }} {{ contract.deposit_amount.toLocaleString() }}</p>
          </div>
          <StatusBadge :value="contract.payment_status" />
        </div>
        <form class="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]" @submit.prevent="submitNotice(contract.id)">
          <input v-model="payment.reference" class="rounded-md border border-line px-3 py-2" placeholder="Transfer reference" />
          <input v-model="payment.bank" class="rounded-md border border-line px-3 py-2" placeholder="Sending bank" />
          <button class="rounded-md bg-brand px-4 py-2 font-semibold text-white">Submit</button>
        </form>
      </div>
    </div>

    <aside class="bg-[#07112d] p-6 text-white">
      <p class="text-sm uppercase tracking-[0.18em] text-white/45">Receiving account</p>
      <h3 class="mt-4 text-2xl font-semibold">Outsource Technologies Ltd</h3>
      <dl class="mt-6 space-y-4 text-sm">
        <div><dt class="text-white/50">Bank</dt><dd class="mt-1 font-semibold">Providus Bank</dd></div>
        <div><dt class="text-white/50">Account number</dt><dd class="mt-1 font-semibold">1234567890</dd></div>
        <div><dt class="text-white/50">Payment method</dt><dd class="mt-1 font-semibold">Manual bank transfer</dd></div>
      </dl>
      <p class="mt-6 text-sm leading-6 text-white/65">Use the contract ID or invoice reference in your transfer narration. Admin confirms the deposit before work starts.</p>
      <p v-if="message" class="mt-4 rounded-md bg-white/10 p-3 text-sm">{{ message }}</p>
    </aside>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'employer', middleware: 'employer' })

const contracts = ref<any[]>([])
const message = ref('')
const payment = reactive({ reference: '', bank: '' })

const load = async () => {
  const { data } = await useApi().get('/employer/contracts')
  contracts.value = data
}

const submitNotice = async (contractId: string) => {
  await useApi().post(`/employer/contracts/${contractId}/payment-notices`, {
    transaction_reference: payment.reference,
    bank_name: payment.bank,
  })
  payment.reference = ''
  payment.bank = ''
  message.value = 'Payment reference submitted for admin confirmation.'
}

onMounted(load)
</script>
