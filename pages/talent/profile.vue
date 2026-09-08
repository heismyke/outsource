<template>
  <section class="max-w-3xl space-y-4">
    <h2 class="text-lg font-semibold">Talent Profile</h2>
    <div class="grid gap-4 border border-line bg-white p-4 md:grid-cols-2">
      <input placeholder="First name" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Last name" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Professional title" class="rounded-md border border-line px-3 py-2 md:col-span-2" />
      <input placeholder="Country" class="rounded-md border border-line px-3 py-2" />
      <input placeholder="Timezone" class="rounded-md border border-line px-3 py-2" />
      <textarea placeholder="Profile summary" class="rounded-md border border-line px-3 py-2 md:col-span-2" />
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'talent', middleware: 'talent' })
</script>
