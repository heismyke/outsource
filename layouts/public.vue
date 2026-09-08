<template>
  <div class="min-h-screen overflow-x-hidden bg-white">
    <header class="fixed left-0 right-0 top-0 z-30 border-b border-white/15 bg-[#07110d]/62 shadow-sm backdrop-blur-xl">
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <NuxtLink to="/" class="flex items-center">
          <img src="~/assets/images/outsorce-logo.png" alt="Outsorce" class="h-10 w-auto brightness-0 invert" />
        </NuxtLink>
        <nav class="hidden items-center gap-7 text-sm font-semibold text-white md:flex">
          <a href="#companies" class="transition hover:text-white">For companies</a>
          <a href="#talents" class="transition hover:text-white">For workers</a>
          <a href="#operations" class="transition hover:text-white">Operations</a>
          <a href="#privacy" class="transition hover:text-white">Privacy</a>
        </nav>
        <nav class="flex items-center gap-3 text-sm">
          <NuxtLink to="/login" class="font-semibold text-white transition hover:text-white/78">Log in</NuxtLink>
          <NuxtLink to="/register" class="rounded-full bg-white px-4 py-2.5 font-semibold text-ink transition hover:bg-brand hover:text-white">Post work</NuxtLink>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>
