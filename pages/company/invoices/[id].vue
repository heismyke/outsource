<template>
  <section class="grid gap-6 xl:grid-cols-[1fr_420px]">
    <div class="space-y-6">
      <div class="rounded-2xl border border-line bg-white p-6">
        <div class="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <p class="text-sm font-semibold text-brand">Invoice</p>
            <h2 class="mt-2 text-3xl font-semibold text-[#172033]">INV-2026-000001</h2>
            <p class="mt-2 text-sm text-gray-600">Senior Go Engineer engagement for September billing cycle.</p>
          </div>
          <StatusBadge value="PENDING" />
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl bg-surface p-4">
            <p class="text-xs text-gray-500">Amount due</p>
            <p class="mt-2 text-2xl font-semibold">NGN 2,400,000</p>
          </div>
          <div class="rounded-2xl bg-surface p-4">
            <p class="text-xs text-gray-500">Due date</p>
            <p class="mt-2 text-2xl font-semibold">20 Sep</p>
          </div>
          <div class="rounded-2xl bg-surface p-4">
            <p class="text-xs text-gray-500">Payment method</p>
            <p class="mt-2 text-2xl font-semibold">Bank transfer</p>
          </div>
        </div>
      </div>

      <div class="rounded-2xl border border-line bg-white p-6">
        <h3 class="text-xl font-semibold">Submit payment details</h3>
        <p class="mt-1 text-sm text-gray-600">Use this after your finance team transfers funds to Outsorce.</p>
        <form class="mt-5 grid gap-4 md:grid-cols-2" @submit.prevent="submitted = true">
          <label class="text-sm font-medium">
            Bank transaction reference
            <input v-model="form.reference" class="mt-1 w-full rounded-xl border border-line px-4 py-3 focus-ring" placeholder="e.g. GTB-TRF-925183" />
          </label>
          <label class="text-sm font-medium">
            Amount paid
            <input v-model="form.amount" class="mt-1 w-full rounded-xl border border-line px-4 py-3 focus-ring" placeholder="2400000" />
          </label>
          <label class="text-sm font-medium">
            Payment date
            <input v-model="form.date" type="date" class="mt-1 w-full rounded-xl border border-line px-4 py-3 focus-ring" />
          </label>
          <label class="text-sm font-medium">
            Paying bank
            <input v-model="form.bank" class="mt-1 w-full rounded-xl border border-line px-4 py-3 focus-ring" placeholder="Your company bank" />
          </label>
          <label class="text-sm font-medium md:col-span-2">
            Notes for Outsorce finance
            <textarea v-model="form.notes" class="mt-1 w-full rounded-xl border border-line px-4 py-3 focus-ring" rows="4" placeholder="Optional payment details"></textarea>
          </label>
          <button class="rounded-xl bg-[#3989f7] px-5 py-3 text-sm font-semibold text-white md:w-max">Submit for verification</button>
        </form>
        <p v-if="submitted" class="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          Payment details submitted. Outsorce finance will verify the transfer and update this invoice.
        </p>
      </div>
    </div>

    <aside class="space-y-6">
      <div class="rounded-2xl bg-[#071126] p-6 text-white">
        <FontAwesomeIcon icon="building" class="h-6 w-6 text-[#39d6f5]" />
        <h3 class="mt-4 text-xl font-semibold">Pay Outsorce</h3>
        <p class="mt-2 text-sm leading-6 text-white/65">Send the invoice amount to the receiving account below. The invoice number must be used as the transfer reference.</p>
        <dl class="mt-6 space-y-4 text-sm">
          <div class="rounded-2xl bg-white/10 p-4">
            <dt class="text-white/50">Account name</dt>
            <dd class="mt-1 font-semibold">Outsorce Technologies Ltd</dd>
          </div>
          <div class="rounded-2xl bg-white/10 p-4">
            <dt class="text-white/50">Bank</dt>
            <dd class="mt-1 font-semibold">Providus Bank</dd>
          </div>
          <div class="rounded-2xl bg-white/10 p-4">
            <dt class="text-white/50">Account number</dt>
            <dd class="mt-1 font-semibold tracking-wide">1234567890</dd>
          </div>
          <div class="rounded-2xl bg-white/10 p-4">
            <dt class="text-white/50">Transfer reference</dt>
            <dd class="mt-1 font-semibold">INV-2026-000001</dd>
          </div>
        </dl>
      </div>

      <div class="rounded-2xl border border-line bg-white p-6">
        <h3 class="text-lg font-semibold">Payment status</h3>
        <div class="mt-5 space-y-4">
          <div class="flex gap-3">
            <span class="mt-1 h-3 w-3 rounded-full bg-[#3989f7]"></span>
            <div><p class="font-semibold">Invoice issued</p><p class="text-sm text-gray-600">Outsorce sent payment instructions.</p></div>
          </div>
          <div class="flex gap-3">
            <span class="mt-1 h-3 w-3 rounded-full bg-amber-400"></span>
            <div><p class="font-semibold">Awaiting confirmation</p><p class="text-sm text-gray-600">Submit your transfer reference after payment.</p></div>
          </div>
          <div class="flex gap-3 opacity-50">
            <span class="mt-1 h-3 w-3 rounded-full bg-gray-300"></span>
            <div><p class="font-semibold">Marked paid</p><p class="text-sm text-gray-600">Admin confirms receipt in the ledger.</p></div>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })

const submitted = ref(false)
const form = reactive({
  reference: '',
  amount: '',
  date: '',
  bank: '',
  notes: '',
})
</script>
