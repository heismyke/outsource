<template>
  <PageTableShell title="Request Review" description="Inspect a request, change status, and attach shortlisted talents." :columns="['Section', 'Value', 'Action']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
