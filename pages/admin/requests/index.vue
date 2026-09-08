<template>
  <PageTableShell title="Talent Requests" description="Review submitted requests and move them through matching." :columns="['Company', 'Role', 'Status', 'Budget', 'Needed']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
