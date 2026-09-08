<template>
  <PageTableShell title="Company Detail" description="Admin-only complete company profile including private contact fields." :columns="['Field', 'Value']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
