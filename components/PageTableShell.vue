<script setup lang="ts">
defineProps<{
  title: string
  description: string
  columns: string[]
}>()
</script>

<template>
  <section class="space-y-4">
    <div class="flex flex-col justify-between gap-3 md:flex-row md:items-center">
      <div>
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <p class="text-sm text-gray-600">{{ description }}</p>
      </div>
      <div class="flex gap-2">
        <button class="rounded-md border border-line px-3 py-2 text-sm">
          <FontAwesomeIcon icon="filter" class="mr-2 h-4 w-4" />Filter
        </button>
        <button class="rounded-md border border-line px-3 py-2 text-sm">
          <FontAwesomeIcon icon="search" class="mr-2 h-4 w-4" />Search
        </button>
      </div>
    </div>
    <div class="overflow-hidden border border-line bg-white">
      <table class="min-w-full divide-y divide-line text-sm">
        <thead class="bg-surface text-left text-gray-600">
          <tr>
            <th v-for="column in columns" :key="column" class="px-4 py-3 font-medium">{{ column }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td :colspan="columns.length" class="px-4 py-10 text-center text-gray-600">No records found.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
