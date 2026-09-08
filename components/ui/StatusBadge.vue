<script setup lang="ts">
defineProps<{ value: string }>()
</script>

<template>
  <span class="inline-flex items-center rounded px-2 py-1 text-xs font-medium ring-1 ring-inset ring-line">
    {{ value }}
  </span>
</template>
