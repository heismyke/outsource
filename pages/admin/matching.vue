<template>
  <section class="space-y-4">
    <div>
      <h2 class="text-lg font-semibold">Manual Matching</h2>
      <p class="text-sm text-gray-600">Filter talents, select candidates, and attach them to requests.</p>
    </div>
    <div class="grid gap-4 border border-line bg-white p-4 md:grid-cols-6">
      <input placeholder="Skills" class="rounded-md border border-line px-3 py-2 md:col-span-2" />
      <input placeholder="Country" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Experience" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Availability" class="rounded-md border border-line px-3 py-2" />
      <button class="rounded-md bg-brand px-3 py-2 text-white">Search</button>
    </div>
    <PageTableShell title="Search Results" description="No talents returned yet." :columns="['Select', 'Title', 'Skills', 'Rate', 'Decision']" />
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
