<template>
  <div class="overflow-x-hidden bg-white">
    <section class="border-b border-line bg-white">
      <div class="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p class="text-sm font-semibold text-brand">Nigeria-first work outsourcing</p>
          <h1 class="mt-5 max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-ink md:text-7xl">
            Post work. Match talent. Pay safely.
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            One marketplace for employers, recruiters, workers, and admins to run task-based work with deposits, milestones, and clear payouts.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/register" class="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-semibold text-white">
              Start hiring
              <FontAwesomeIcon icon="arrow-right" class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink to="/login" class="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-4 text-base font-semibold text-ink">
              Enter workspace
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1100"
            alt="Team reviewing outsourced work"
            class="h-[560px] w-full rounded-[36px] object-cover"
          />
          <div class="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/30 bg-white/86 p-5 backdrop-blur">
            <div class="grid gap-4 sm:grid-cols-3">
              <div v-for="metric in heroMetrics" :key="metric.label">
                <p class="text-sm text-gray-500">{{ metric.label }}</p>
                <p class="mt-1 text-2xl font-semibold tracking-[-0.03em]">{{ metric.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="companies" class="mx-auto max-w-7xl px-4 py-24">
      <div class="max-w-2xl">
        <h2 class="text-4xl font-semibold tracking-[-0.035em] md:text-5xl">Four front doors. One shared system.</h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">Every role works from the same tasks, contracts, wallets, ratings, and audit trail.</p>
      </div>
      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="role in roles" :key="role.title" class="rounded-[30px] border border-line bg-white p-6">
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-[#e8f5f2] text-brand">
            <FontAwesomeIcon :icon="role.icon" />
          </span>
          <h3 class="mt-6 text-xl font-semibold">{{ role.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-gray-600">{{ role.copy }}</p>
        </article>
      </div>
    </section>

    <section id="operations" class="border-y border-line bg-surface py-24">
      <div class="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 class="text-4xl font-semibold tracking-[-0.035em] md:text-5xl">How work moves on Outsorce.</h2>
          <p class="mt-4 max-w-md text-lg leading-8 text-gray-600">A controlled flow for task posting, worker selection, deposits, delivery, and payout review.</p>
        </div>
        <div class="grid gap-4 md:grid-cols-2">
          <article v-for="step in workflow" :key="step.title" class="rounded-[28px] border border-line bg-white p-6">
            <p class="text-sm font-semibold text-brand">{{ step.kicker }}</p>
            <h3 class="mt-3 text-xl font-semibold">{{ step.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-gray-600">{{ step.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="talents" class="mx-auto max-w-7xl px-4 py-24">
      <div class="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div class="rounded-[36px] border border-line bg-white p-6">
          <div class="grid gap-4">
            <div v-for="task in sampleTasks" :key="task.title" class="rounded-[24px] bg-surface p-5">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="font-semibold">{{ task.title }}</p>
                  <p class="mt-1 text-sm text-gray-600">{{ task.category }} · {{ task.location }}</p>
                </div>
                <p class="font-semibold text-brand">{{ task.budget }}</p>
              </div>
              <p class="mt-3 text-sm text-gray-500">{{ task.deposit }} deposit visible before application</p>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-4xl font-semibold tracking-[-0.035em] md:text-5xl">Trust is visible before work starts.</h2>
          <p class="mt-5 text-lg leading-8 text-gray-600">Workers see deposit percentage and employer payment reliability. Employers see completion rate, ratings, and verification level.</p>
        </div>
      </div>
    </section>

    <section id="privacy" class="border-t border-line bg-white py-20">
      <div class="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 md:flex-row md:items-center">
        <div>
          <h2 class="text-4xl font-semibold tracking-[-0.035em]">Launch with trust built in.</h2>
          <p class="mt-4 text-gray-600">Verification, escrow tracking, dispute handling, ledgers, and audit logs from day one.</p>
        </div>
        <NuxtLink to="/register" class="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white">
          Create account
          <FontAwesomeIcon icon="arrow-right" />
        </NuxtLink>
      </div>
    </section>

    <footer class="border-t border-line bg-white">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-2xl bg-brand text-base font-bold text-white">O</span>
            <span class="text-lg font-semibold tracking-[-0.02em] text-ink">Outsorce</span>
          </NuxtLink>
          <p class="mt-4 max-w-sm text-sm leading-6 text-gray-600">
            Nigeria-first marketplace for task-based work, deposits, contracts, and worker payouts.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-ink">Marketplace</h3>
          <div class="mt-4 space-y-3 text-sm text-gray-600">
            <NuxtLink class="block hover:text-brand" to="#companies">Roles</NuxtLink>
            <NuxtLink class="block hover:text-brand" to="#operations">Work flow</NuxtLink>
            <NuxtLink class="block hover:text-brand" to="#talents">Trust layer</NuxtLink>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-ink">Workspaces</h3>
          <div class="mt-4 space-y-3 text-sm text-gray-600">
            <NuxtLink class="block hover:text-brand" to="/employer/dashboard">Employer</NuxtLink>
            <NuxtLink class="block hover:text-brand" to="/worker/dashboard">Worker</NuxtLink>
            <NuxtLink class="block hover:text-brand" to="/recruiter/dashboard">Recruiter</NuxtLink>
            <NuxtLink class="block hover:text-brand" to="/admin/dashboard">Admin</NuxtLink>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-ink">Access</h3>
          <div class="mt-4 space-y-3 text-sm text-gray-600">
            <NuxtLink class="block hover:text-brand" to="/login">Log in</NuxtLink>
            <NuxtLink class="block hover:text-brand" to="/register">Create account</NuxtLink>
            <a class="block hover:text-brand" href="mailto:hello@outsorce.com">hello@outsorce.com</a>
          </div>
        </div>
      </div>
      <div class="border-t border-line">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Outsorce. All rights reserved.</p>
          <p>Escrow-first work operations for Nigerian teams.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })

const heroMetrics = [
  { label: 'Deposit cap', value: '50%' },
  { label: 'Payout target', value: '<48h' },
  { label: 'Year-one goal', value: '10k tasks' },
]

const roles = [
  { icon: 'building', title: 'Employers', copy: 'Post tasks, compare applicants, fund deposits, approve work, and settle balances.' },
  { icon: 'user-tie', title: 'Recruiters', copy: 'Source workers, submit shortlists, manage placements, and earn transparent commission.' },
  { icon: 'users', title: 'Workers', copy: 'Find work, apply, deliver milestones, track due money, and withdraw safely.' },
  { icon: 'shield-halved', title: 'Admin', copy: 'Verify users, moderate tasks, watch escrow, handle disputes, and manage rules.' },
]

const workflow = [
  { kicker: '01', title: 'Post the task', copy: 'Title, category, deliverables, budget, deadline, skills, and location.' },
  { kicker: '02', title: 'Match and shortlist', copy: 'Workers apply directly. Recruiters can submit vetted candidates.' },
  { kicker: '03', title: 'Fund the deposit', copy: 'Employer funds up to 50% before the contract becomes active.' },
  { kicker: '04', title: 'Approve and pay', copy: 'Delivery approval releases deposit and raises the remaining balance.' },
]

const sampleTasks = [
  { title: 'Customer support agents', category: 'Operations', location: 'Remote', budget: 'NGN 450k', deposit: '50%' },
  { title: 'Field survey team', category: 'Research', location: 'Lagos', budget: 'NGN 780k', deposit: '40%' },
  { title: 'Landing page copy', category: 'Writing', location: 'Remote', budget: 'NGN 120k', deposit: '35%' },
]
</script>
