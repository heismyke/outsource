<template>
  <PageTableShell title="Engagement Detail" description="Company-facing engagement terms and billing status." :columns="['Field', 'Value']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })
</script>
