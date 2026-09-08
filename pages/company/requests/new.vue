<template>
  <section class="max-w-4xl space-y-4">
    <h2 class="text-lg font-semibold">New Talent Request</h2>
    <div class="grid gap-4 border border-line bg-white p-4 md:grid-cols-2">
      <input placeholder="Job title" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Role category" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Required skills" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Seniority level" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Company budget" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Currency" class="rounded-md border border-line px-3 py-2" />
      <textarea placeholder="Description" class="rounded-md border border-line px-3 py-2 md:col-span-2" />
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })
</script>
