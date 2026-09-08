<template>
  <section class="space-y-6">
    <div class="grid gap-5 md:grid-cols-3">
      <MetricTile label="Awaiting verification" :value="String(pendingCount)" icon="clock" />
      <MetricTile label="Confirmed notices" :value="String(confirmedCount)" icon="money-bill-transfer" />
      <MetricTile label="Manual bank transfer" value="Enabled" icon="file-invoice" />
    </div>

    <div class="grid gap-6 xl:grid-cols-[1fr_420px]">
      <div class="overflow-hidden border border-line bg-white">
        <div class="border-b border-line p-5">
          <h2 class="text-xl font-semibold">Incoming employer deposits</h2>
          <p class="mt-1 text-sm text-gray-600">Confirm transfers into the Outsource operating account before work starts.</p>
        </div>
        <table class="min-w-full divide-y divide-line text-sm">
          <thead class="bg-surface text-left text-gray-600">
            <tr>
              <th class="px-5 py-4 font-medium">Contract</th>
              <th class="px-5 py-4 font-medium">Amount</th>
              <th class="px-5 py-4 font-medium">Reference</th>
              <th class="px-5 py-4 font-medium">Bank</th>
              <th class="px-5 py-4 font-medium">Status</th>
              <th class="px-5 py-4 font-medium"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-line">
            <tr v-for="payment in payments" :key="payment.id">
              <td class="px-5 py-4 font-semibold">{{ payment.contract_id.slice(0, 8) }}</td>
              <td class="px-5 py-4 font-medium">{{ payment.currency }} {{ payment.amount.toLocaleString() }}</td>
              <td class="px-5 py-4 text-gray-600">{{ payment.transaction_reference }}</td>
              <td class="px-5 py-4 text-gray-600">{{ payment.bank_name }}</td>
              <td class="px-5 py-4"><StatusBadge :value="payment.status" /></td>
              <td class="px-5 py-4 text-right">
                <button class="rounded-md bg-[#3989f7] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50" :disabled="payment.status === 'CONFIRMED'" @click="confirm(payment.id)">Confirm receipt</button>
              </td>
            </tr>
            <tr v-if="!payments.length">
              <td colspan="6" class="px-5 py-10 text-center text-gray-600">No employer payment notices submitted yet.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <aside class="bg-[#071126] p-6 text-white">
        <h3 class="text-xl font-semibold">Outsource receiving account</h3>
        <p class="mt-2 text-sm leading-6 text-white/65">These details are shown to employer users for contract deposits.</p>
        <dl class="mt-6 space-y-4 text-sm">
          <div><dt class="text-white/50">Account name</dt><dd class="mt-1 font-semibold">Outsource Technologies Ltd</dd></div>
          <div><dt class="text-white/50">Bank</dt><dd class="mt-1 font-semibold">Providus Bank</dd></div>
          <div><dt class="text-white/50">Account number</dt><dd class="mt-1 font-semibold">1234567890</dd></div>
          <div><dt class="text-white/50">Reconciliation rule</dt><dd class="mt-1 font-semibold">Match bank reference to contract deposit notice</dd></div>
        </dl>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const payments = ref<any[]>([])
const pendingCount = computed(() => payments.value.filter((payment) => payment.status === 'PENDING').length)
const confirmedCount = computed(() => payments.value.filter((payment) => payment.status === 'CONFIRMED').length)

const load = async () => {
  const { data } = await useApi().get('/admin/payments')
  payments.value = data
}

const confirm = async (id: string) => {
  await useApi().post(`/admin/payments/${id}/confirm`)
  await load()
}

onMounted(load)
</script>
