<template>
  <PageTableShell title="Opportunities" description="Review admin-selected opportunities without private recruiter contact information." :columns="['Role', 'Company', 'Duration', 'Compensation', 'Decision']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'talent', middleware: 'talent' })
</script>
