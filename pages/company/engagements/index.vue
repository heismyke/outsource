<template>
  <PageTableShell title="Engagements" description="Company-visible engagement records with client rate only." :columns="['Talent', 'Request', 'Start', 'Status', 'Client rate']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'company', middleware: 'company' })
</script>
