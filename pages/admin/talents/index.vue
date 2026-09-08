<template>
  <PageTableShell title="Talents" description="Search and filter vetted talent records for manual matching." :columns="['Name', 'Title', 'Country', 'Skills', 'Availability', 'Status']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
