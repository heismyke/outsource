<template>
  <PageTableShell title="Opportunity Detail" description="Role, project, compensation, and accept or reject decision." :columns="['Field', 'Value']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'talent', middleware: 'talent' })
</script>
