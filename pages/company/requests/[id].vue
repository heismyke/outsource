<template>
  <PageTableShell title="Talent Request Detail" description="Request status, shortlist decisions, and admin updates." :columns="['Item', 'Value']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })
</script>
