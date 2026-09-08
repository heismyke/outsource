<template>
  <DashboardShell title="Marketplace Control" :nav-items="navItems" user-name="Admin Operator" user-email="admin@outsource.com">
    <slot />
  </DashboardShell>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: 'chart-line' },
  { label: 'Employers', to: '/admin/companies', icon: 'building' },
  { label: 'Workers', to: '/admin/talents', icon: 'users' },
  { label: 'Tasks', to: '/admin/tasks', icon: 'briefcase' },
  { label: 'Contracts', to: '/admin/engagements', icon: 'circle-check' },
  { label: 'Payments', to: '/admin/payments', icon: 'money-bill-transfer' },
  { label: 'Withdrawals', to: '/admin/withdrawals', icon: 'user-tie' },
]
</script>
