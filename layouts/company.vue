<template>
  <DashboardShell title="Hello, Amanda" :nav-items="navItems" user-name="Amanda Doe" user-email="amanda@company.com">
    <slot />
  </DashboardShell>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', to: '/company/dashboard', icon: 'chart-line' },
  { label: 'Profile', to: '/company/profile', icon: 'building' },
  { label: 'Requests', to: '/company/requests', icon: 'briefcase' },
  { label: 'Shortlists', to: '/company/shortlists', icon: 'users' },
  { label: 'Engagements', to: '/company/engagements', icon: 'circle-check' },
  { label: 'Invoices', to: '/company/invoices', icon: 'file-invoice' },
]
</script>
