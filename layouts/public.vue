<template>
  <div class="min-h-screen overflow-x-hidden bg-white">
    <header class="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <NuxtLink to="/" class="flex items-center gap-2 text-xl font-semibold text-ink">
          <span class="grid h-10 w-10 place-items-center rounded-2xl bg-brand text-sm font-bold text-white">O</span>
          Outsource
        </NuxtLink>
        <nav class="hidden items-center gap-7 text-sm font-semibold text-gray-600 md:flex">
          <a href="#companies" class="hover:text-brand">For companies</a>
          <a href="#talents" class="hover:text-brand">For workers</a>
          <a href="#operations" class="hover:text-brand">Operations</a>
          <a href="#privacy" class="hover:text-brand">Privacy</a>
        </nav>
        <nav class="flex items-center gap-3 text-sm">
          <NuxtLink to="/login" class="font-medium text-ink hover:text-brand">Log in</NuxtLink>
          <NuxtLink to="/register" class="rounded-full bg-brand px-4 py-2.5 font-semibold text-white">Post work</NuxtLink>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>
