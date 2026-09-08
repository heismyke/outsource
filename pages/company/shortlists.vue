<template>
  <PageTableShell title="Shortlisted Talent" description="Sanitized profiles selected by admin for company review." :columns="['Title', 'Country', 'Experience', 'Rate', 'Decision']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })
</script>
