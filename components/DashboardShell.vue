<script setup lang="ts">
defineProps<{
  title: string
  navItems: Array<{ label: string; to: string; icon: string }>
  userName?: string
  userEmail?: string
}>()
</script>

<template>
  <div class="min-h-screen bg-white text-ink">
    <aside class="fixed inset-y-0 left-0 z-20 hidden w-72 border-r border-line bg-white p-6 lg:block">
      <NuxtLink to="/" class="flex items-center gap-3 text-xl font-semibold">
        <span class="grid h-10 w-10 place-items-center rounded-2xl bg-brand text-sm font-bold text-white">O</span>
        Outsorce
      </NuxtLink>

      <nav class="mt-10 space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-surface hover:text-ink"
          active-class="bg-[#e8f5f2] text-brand"
        >
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-surface text-gray-500">
            <FontAwesomeIcon :icon="item.icon" class="h-4 w-4" />
          </span>
          <span>{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <div class="absolute bottom-6 left-6 right-6 border-t border-line pt-5">
        <p class="text-sm font-semibold text-ink">{{ userName || 'Outsorce User' }}</p>
        <p class="mt-1 text-xs text-gray-500">{{ userEmail || 'workspace@outsorce.com' }}</p>
      </div>
    </aside>

    <div class="lg:pl-72">
      <header class="sticky top-0 z-10 border-b border-line bg-white/95 px-4 py-4 backdrop-blur lg:px-10">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">{{ title }}</h1>
            <p class="mt-1 text-sm text-gray-500">Tasks, contracts, money, and trust operations.</p>
          </div>
          <div class="flex items-center gap-3">
            <button class="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-gray-600">
              <FontAwesomeIcon icon="bell" class="h-4 w-4" />
            </button>
            <div class="flex items-center gap-3">
              <div class="grid h-11 w-11 place-items-center rounded-full bg-ink font-semibold text-white">
                {{ (userName || 'O').slice(0, 1) }}
              </div>
              <div class="hidden md:block">
                <p class="text-sm font-semibold text-ink">{{ userName || 'Outsorce User' }}</p>
                <p class="text-xs text-gray-500">{{ userEmail || 'workspace@outsorce.com' }}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main class="p-4 lg:p-10">
        <slot />
      </main>
    </div>
  </div>
</template>
