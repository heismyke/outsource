<template>
  <PageTableShell title="Companies" description="Approve, suspend, and inspect full company records." :columns="['Company', 'Industry', 'Status', 'Contact', 'Actions']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
