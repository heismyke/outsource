<template>
  <PageTableShell title="Talent Detail" description="Admin-only complete talent profile including private contact fields." :columns="['Field', 'Value']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
