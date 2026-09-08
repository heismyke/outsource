<template>
  <PageTableShell title="Invoices" description="Create invoices and track payment status." :columns="['Number', 'Company', 'Amount', 'Due date', 'Status']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
