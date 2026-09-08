<template>
  <PageTableShell title="Experience" description="Manage work history for admin review and matching." :columns="['Company', 'Role', 'Dates', 'Current', 'Actions']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'talent', middleware: 'talent' })
</script>
