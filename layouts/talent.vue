<template>
  <DashboardShell title="Hello, David" :nav-items="navItems" user-name="David Okafor" user-email="david@talent.com">
    <slot />
  </DashboardShell>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', to: '/talent/dashboard', icon: 'chart-line' },
  { label: 'Profile', to: '/talent/profile', icon: 'user-tie' },
  { label: 'Skills', to: '/talent/skills', icon: 'filter' },
  { label: 'Experience', to: '/talent/experience', icon: 'briefcase' },
  { label: 'Opportunities', to: '/talent/opportunities', icon: 'search' },
  { label: 'Engagements', to: '/talent/engagements', icon: 'circle-check' },
  { label: 'Payouts', to: '/talent/payouts', icon: 'money-bill-transfer' },
]
</script>
