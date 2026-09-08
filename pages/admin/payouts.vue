<template>
  <PageTableShell title="Talent Payouts" description="Record talent payout ledger entries and payout status." :columns="['Talent', 'Engagement', 'Amount', 'Reference', 'Status']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
</script>
