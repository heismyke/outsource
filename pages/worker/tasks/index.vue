<template>
  <section class="space-y-5">
    <div>
      <h2 class="text-lg font-semibold">Available tasks</h2>
      <p class="text-sm text-gray-600">Worker view is sanitized: employer private contacts are not exposed.</p>
    </div>
    <div v-for="task in tasks" :key="task.id" class="border border-line bg-white p-5">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p class="font-semibold">{{ task.title }}</p>
          <p class="mt-1 text-sm text-gray-600">{{ task.description }}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span v-for="skill in task.required_skills" :key="skill" class="rounded-md bg-surface px-2 py-1 text-xs font-medium text-gray-700">{{ skill }}</span>
          </div>
          <p class="mt-3 text-sm font-medium">{{ task.currency }} {{ task.budget.toLocaleString() }} · {{ task.deposit_percent }}% employer deposit</p>
        </div>
        <form class="min-w-72 space-y-3" @submit.prevent="apply(task.id)">
          <textarea v-model="coverNote" class="w-full rounded-md border border-line px-3 py-2 text-sm" rows="3" placeholder="Short proposal"></textarea>
          <input v-model.number="proposedFee" class="w-full rounded-md border border-line px-3 py-2 text-sm" placeholder="Proposed fee" />
          <button class="w-full rounded-md bg-brand px-4 py-2 font-semibold text-white">Apply</button>
        </form>
      </div>
    </div>
    <p v-if="message" class="border border-line bg-white p-4 text-sm text-brand">{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'worker', middleware: 'worker' })

const tasks = ref<any[]>([])
const coverNote = ref('I can deliver this with weekly progress updates.')
const proposedFee = ref(2400000)
const message = ref('')

const load = async () => {
  const { data } = await useApi().get('/worker/tasks')
  tasks.value = data
}

const apply = async (taskId: string) => {
  await useApi().post(`/worker/tasks/${taskId}/apply`, { cover_note: coverNote.value, proposed_fee: proposedFee.value })
  message.value = 'Application submitted. Employer can now review it.'
  await load()
}

onMounted(load)
</script>
