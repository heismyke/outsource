<template>
  <PageTableShell title="Skills" description="Manage skills, proficiency, and years of experience." :columns="['Skill', 'Category', 'Proficiency', 'Years', 'Actions']" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'talent', middleware: 'talent' })
</script>
