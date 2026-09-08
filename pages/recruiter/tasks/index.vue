<template>
  <section class="space-y-5">
    <div>
      <h2 class="text-lg font-semibold">Recruiter task marketplace</h2>
      <p class="text-sm text-gray-600">Submit vetted workers without exposing private worker contact information.</p>
    </div>
    <div v-for="task in tasks" :key="task.id" class="border border-line bg-white p-5">
      <div class="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div>
          <p class="font-semibold">{{ task.title }}</p>
          <p class="mt-1 text-sm text-gray-600">{{ task.description }}</p>
          <p class="mt-3 text-sm font-medium">{{ task.currency }} {{ task.budget.toLocaleString() }}</p>
        </div>
        <form class="space-y-3" @submit.prevent="submitWorker(task.id)">
          <input v-model="worker.worker_name" class="w-full rounded-md border border-line px-3 py-2 text-sm" placeholder="Worker display name" />
          <input v-model="worker.worker_title" class="w-full rounded-md border border-line px-3 py-2 text-sm" placeholder="Worker title" />
          <textarea v-model="worker.note" class="w-full rounded-md border border-line px-3 py-2 text-sm" rows="3" placeholder="Recruiter note"></textarea>
          <button class="w-full rounded-md bg-brand px-4 py-2 font-semibold text-white">Submit worker</button>
        </form>
      </div>
    </div>
    <p v-if="message" class="border border-line bg-white p-4 text-sm text-brand">{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'recruiter', middleware: 'recruiter' })

const tasks = ref<any[]>([])
const message = ref('')
const worker = reactive({ worker_name: 'Screened Product Designer', worker_title: 'Senior Product Designer', note: 'Available within one week.' })

const load = async () => {
  const { data } = await useApi().get('/recruiter/tasks')
  tasks.value = data
}

const submitWorker = async (taskId: string) => {
  await useApi().post(`/recruiter/tasks/${taskId}/submit-worker`, worker)
  message.value = 'Worker submitted to Outsorce operations.'
}

onMounted(load)
</script>
