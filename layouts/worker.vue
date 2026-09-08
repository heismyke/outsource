<template>
  <DashboardShell title="Worker Workspace" :nav-items="navItems" user-name="David Okafor" user-email="worker@outsource.com">
    <slot />
  </DashboardShell>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', to: '/worker/dashboard', icon: 'chart-line' },
  { label: 'Available Tasks', to: '/worker/tasks', icon: 'search' },
  { label: 'Contracts', to: '/worker/contracts', icon: 'circle-check' },
  { label: 'Wallet', to: '/worker/wallet', icon: 'money-bill-transfer' },
]
</script>
