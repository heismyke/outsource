<template>
  <section class="space-y-6">
    <div class="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h2 class="text-2xl font-semibold text-[#172033]">Invoices</h2>
        <p class="mt-1 text-sm text-gray-600">Pay Outsource by bank transfer using the invoice reference, then submit the transaction details for verification.</p>
      </div>
      <div class="rounded-2xl bg-[#071126] px-5 py-4 text-white">
        <p class="text-xs text-white/55">Outstanding balance</p>
        <p class="mt-1 text-2xl font-semibold">NGN 2.4M</p>
      </div>
    </div>

    <div class="grid gap-5 lg:grid-cols-[1fr_360px]">
      <div class="overflow-hidden rounded-2xl border border-line bg-white">
        <table class="min-w-full divide-y divide-line text-sm">
          <thead class="bg-surface text-left text-gray-600">
            <tr>
              <th class="px-5 py-4 font-medium">Invoice</th>
              <th class="px-5 py-4 font-medium">Engagement</th>
              <th class="px-5 py-4 font-medium">Amount</th>
              <th class="px-5 py-4 font-medium">Due date</th>
              <th class="px-5 py-4 font-medium">Status</th>
              <th class="px-5 py-4 font-medium"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-line">
            <tr v-for="invoice in invoices" :key="invoice.number">
              <td class="px-5 py-4 font-semibold">{{ invoice.number }}</td>
              <td class="px-5 py-4 text-gray-600">{{ invoice.engagement }}</td>
              <td class="px-5 py-4 font-medium">{{ invoice.amount }}</td>
              <td class="px-5 py-4 text-gray-600">{{ invoice.dueDate }}</td>
              <td class="px-5 py-4"><StatusBadge :value="invoice.status" /></td>
              <td class="px-5 py-4 text-right">
                <NuxtLink :to="`/company/invoices/${invoice.id}`" class="rounded-xl bg-[#3989f7] px-4 py-2 text-sm font-semibold text-white">Pay invoice</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <aside class="rounded-2xl border border-line bg-white p-5">
        <FontAwesomeIcon icon="money-bill-transfer" class="h-6 w-6 text-brand" />
        <h3 class="mt-4 text-lg font-semibold">How payment works</h3>
        <ol class="mt-4 space-y-3 text-sm leading-6 text-gray-600">
          <li>1. Open the invoice and copy the Outsource bank account details.</li>
          <li>2. Transfer the invoice amount using the invoice number as reference.</li>
          <li>3. Submit the bank reference and payment date in Outsource.</li>
          <li>4. Admin verifies receipt and marks the invoice as paid.</li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })

const invoices = [
  { id: '1', number: 'INV-2026-000001', engagement: 'Senior Go Engineer', amount: 'NGN 2,400,000', dueDate: '20 Sep 2026', status: 'PENDING' },
  { id: '2', number: 'INV-2026-000002', engagement: 'Product Designer', amount: 'USD 4,800', dueDate: '28 Sep 2026', status: 'SENT' },
]
</script>
