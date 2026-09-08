<template>
  <DashboardShell title="Recruiter Workspace" :nav-items="navItems" user-name="Northstar Recruiting" user-email="recruiter@outsource.com">
    <slot />
  </DashboardShell>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', to: '/recruiter/dashboard', icon: 'chart-line' },
  { label: 'Tasks', to: '/recruiter/tasks', icon: 'briefcase' },
  { label: 'Commissions', to: '/recruiter/commissions', icon: 'file-invoice' },
]
</script>
