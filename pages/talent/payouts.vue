<template>
  <PageTableShell title="Payouts" description="Your payout history and payment status." :columns="['Engagement', 'Amount', 'Reference', 'Status', 'Paid at']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'talent', middleware: 'talent' })
</script>
