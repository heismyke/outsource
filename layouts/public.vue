<template>
  <div class="min-h-screen overflow-x-hidden bg-white">
    <header
      class="fixed left-0 right-0 top-0 z-30 border-b shadow-sm backdrop-blur-xl transition-colors duration-300"
      :class="
        isSolid
          ? 'border-slate-200/80 bg-white/92'
          : 'border-white/15 bg-[#07110d]/62'
      "
    >
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <NuxtLink to="/" class="flex items-center">
          <img
            src="~/assets/images/outsorce-logo.png"
            alt="Outsorce"
            class="h-10 w-auto transition duration-300"
            :class="isSolid ? '' : 'brightness-0 invert'"
          />
        </NuxtLink>
        <nav
          class="hidden items-center gap-7 text-sm font-semibold transition-colors duration-300 md:flex"
          :class="isSolid ? 'text-slate-700' : 'text-white'"
        >
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="transition"
            :class="isSolid ? 'hover:text-teal-700' : 'hover:text-white/75'"
          >
            {{ item.label }}
          </a>
        </nav>
        <nav class="flex items-center gap-3 text-sm">
          <NuxtLink
            to="/login"
            class="font-semibold transition"
            :class="isSolid ? 'text-slate-700 hover:text-teal-700' : 'text-white hover:text-white/78'"
          >
            Log in
          </NuxtLink>
          <NuxtLink
            to="/post-work"
            class="rounded-full px-4 py-2.5 font-semibold transition"
            :class="
              isSolid
                ? 'bg-ink text-white hover:bg-teal-700'
                : 'bg-white text-ink hover:bg-brand hover:text-white'
            "
          >
            Post a task
          </NuxtLink>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const route = useRoute()
const isSolid = computed(() => isScrolled.value || route.path !== '/')
const navItems = [
  { href: '#companies', label: 'For companies' },
  { href: '#talents', label: 'For workers' },
  { href: '#operations', label: 'Operations' },
  { href: '#privacy', label: 'Privacy' },
]

const updateHeader = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHeader)
})
</script>
