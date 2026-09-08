<template>
  <PageTableShell title="Talent Requests" description="Create and track requests submitted for admin review." :columns="['Role', 'Status', 'Needed', 'Budget', 'Updated']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })
</script>
