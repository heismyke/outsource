<template>
  <DashboardShell title="Employer Workspace" :nav-items="navItems" user-name="Amanda Doe" user-email="employer@outsorce.com">
    <slot />
  </DashboardShell>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', to: '/employer/dashboard', icon: 'chart-line' },
  { label: 'Tasks', to: '/employer/tasks', icon: 'briefcase' },
  { label: 'Applications', to: '/employer/applications', icon: 'users' },
  { label: 'Contracts', to: '/employer/contracts', icon: 'circle-check' },
  { label: 'Payments', to: '/employer/payments', icon: 'money-bill-transfer' },
]
</script>
