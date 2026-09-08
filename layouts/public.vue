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
          <div
            class="group"
            @mouseenter="isMegaOpen = true"
            @mouseleave="isMegaOpen = false"
            @focusin="isMegaOpen = true"
            @focusout="isMegaOpen = false"
          >
            <button
              type="button"
              class="inline-flex items-center gap-2 transition"
              :class="isSolid ? 'hover:text-teal-700' : 'hover:text-white/75'"
              aria-haspopup="true"
              :aria-expanded="isMegaOpen"
            >
              Hire
              <span class="text-[10px] leading-none transition group-hover:rotate-180">v</span>
            </button>

            <div
              class="absolute left-1/2 top-full w-[min(1040px,calc(100vw-32px))] -translate-x-1/2 pt-4 transition duration-200"
              :class="isMegaOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'"
            >
              <div class="overflow-hidden rounded-[30px] border border-line bg-white text-ink shadow-[0_30px_90px_rgba(15,26,21,0.18)]">
                <div class="grid lg:grid-cols-[290px_1fr]">
                  <aside class="bg-surface p-5">
                    <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Outsorce lanes</p>
                    <div class="mt-4 space-y-2">
                      <a
                        v-for="lane in workLanes"
                        :key="lane.title"
                        :href="lane.href"
                        class="block rounded-2xl px-4 py-3 transition hover:bg-white"
                      >
                        <span class="block font-semibold">{{ lane.title }}</span>
                        <span class="mt-1 block text-xs leading-5 text-slate-500">{{ lane.copy }}</span>
                      </a>
                    </div>
                    <NuxtLink to="/post-work" class="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand">
                      Build a brief
                      <FontAwesomeIcon icon="arrow-right" class="h-3 w-3" />
                    </NuxtLink>
                  </aside>

                  <div class="grid gap-8 p-6 lg:grid-cols-[1fr_0.8fr]">
                    <section>
                      <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Hire by outcome</p>
                      <div class="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                        <NuxtLink
                          v-for="item in hireOutcomes"
                          :key="item.title"
                          :to="item.to"
                          class="group/item rounded-2xl p-3 transition hover:bg-surface"
                        >
                          <span class="flex items-center justify-between gap-3">
                            <span class="font-semibold">{{ item.title }}</span>
                            <FontAwesomeIcon icon="arrow-right" class="h-3 w-3 text-slate-300 transition group-hover/item:translate-x-1 group-hover/item:text-brand" />
                          </span>
                          <span class="mt-1 block text-xs leading-5 text-slate-500">{{ item.copy }}</span>
                        </NuxtLink>
                      </div>
                    </section>

                    <section class="rounded-[26px] bg-ink p-5 text-white">
                      <p class="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">Marketplace control</p>
                      <div class="mt-4 space-y-3">
                        <div v-for="item in controlItems" :key="item" class="rounded-2xl bg-white/8 px-4 py-3 text-sm text-white/78">
                          {{ item }}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
const isMegaOpen = ref(false)
const route = useRoute()
const isSolid = computed(() => isScrolled.value || route.path !== '/')
const navItems = [
  { href: '#talents', label: 'For workers' },
  { href: '#operations', label: 'Operations' },
  { href: '#privacy', label: 'Privacy' },
]
const workLanes = [
  { title: 'Operations support', copy: 'Support, admin, sales ops, and recurring work.', href: '/post-work?category=Operations%20support' },
  { title: 'On-site execution', copy: 'Field teams, audits, activations, and surveys.', href: '/post-work?category=On-site%20execution' },
  { title: 'Digital delivery', copy: 'Content, design, data, marketing, and web tasks.', href: '/post-work?category=Digital%20delivery' },
  { title: 'Recruiter-led shortlist', copy: 'Let recruiters submit vetted workers first.', href: '/post-work?category=Recruiter-led%20shortlist' },
]
const hireOutcomes = [
  { title: 'Customer support teams', copy: 'Agents for inbound, outbound, and admin queues.', to: '/post-work?category=Operations%20support' },
  { title: 'Field research crews', copy: 'Location-based workers with proof of completion.', to: '/post-work?category=On-site%20execution' },
  { title: 'Data and admin tasks', copy: 'Structured back-office work with milestones.', to: '/post-work?category=Operations%20support' },
  { title: 'Design and content', copy: 'Project delivery with review and approval.', to: '/post-work?category=Digital%20delivery' },
  { title: 'Sales operations', copy: 'Lead research, CRM cleanup, and outreach support.', to: '/post-work?category=Operations%20support' },
  { title: 'Recruiter-managed hiring', copy: 'Shortlisted workers before contract setup.', to: '/post-work?category=Recruiter-led%20shortlist' },
]
const controlItems = [
  'Deposits visible before work starts',
  'Contracts created after worker selection',
  'Admin review for disputes and payouts',
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
