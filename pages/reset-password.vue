<template>
  <form class="space-y-4">
    <h1 class="text-2xl font-semibold">Reset password</h1>
    <input placeholder="Reset token" class="w-full rounded-md border border-line px-3 py-2 focus-ring" />
    <input placeholder="New password" type="password" class="w-full rounded-md border border-line px-3 py-2 focus-ring" />
    <button class="w-full rounded-md bg-brand px-4 py-2 font-medium text-white">Reset password</button>
  </form>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>
