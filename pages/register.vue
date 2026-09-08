<template>
  <main class="grid min-h-screen place-items-center bg-surface px-4">
    <form class="w-full max-w-md space-y-4 rounded-[28px] border border-line bg-white p-6 shadow-sm">
      <h1 class="text-2xl font-semibold">Register</h1>
      <input placeholder="Email" class="w-full rounded-md border border-line px-3 py-2 focus-ring" />
      <input placeholder="Password" type="password" class="w-full rounded-md border border-line px-3 py-2 focus-ring" />
      <select class="w-full rounded-md border border-line px-3 py-2 focus-ring">
        <option>EMPLOYER</option>
        <option>RECRUITER</option>
        <option>WORKER</option>
      </select>
      <button class="w-full rounded-md bg-brand px-4 py-2 font-medium text-white">Create account</button>
    </form>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>
