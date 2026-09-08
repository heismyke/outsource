<template>
  <PageTableShell title="Engagements" description="Talent-facing engagement records with talent rate only." :columns="['Company', 'Request', 'Start', 'Talent rate', 'Status']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'talent', middleware: 'talent' })
</script>
