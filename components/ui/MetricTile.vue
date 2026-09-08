<script setup lang="ts">
defineProps<{
  label: string
  value: string
  icon: string
}>()
</script>

<template>
  <div class="rounded-[28px] border border-line bg-white p-5">
    <div class="flex items-center justify-between">
      <p class="text-sm font-medium text-gray-600">{{ label }}</p>
      <span class="grid h-10 w-10 place-items-center rounded-full bg-[#e8f5f2] text-brand">
        <FontAwesomeIcon :icon="icon" class="h-4 w-4" />
      </span>
    </div>
    <p class="mt-4 text-2xl font-semibold tracking-[-0.025em]">{{ value }}</p>
  </div>
</template>
