<template>
  <section class="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
    <form class="space-y-4 border border-line bg-white p-6" @submit.prevent="createTask">
      <div>
        <h2 class="text-lg font-semibold">Post a task</h2>
        <p class="mt-1 text-sm text-gray-600">Create work that workers or recruiters can respond to.</p>
      </div>
      <input v-model="form.title" class="w-full rounded-md border border-line px-3 py-2" placeholder="Task title" />
      <input v-model="form.category" class="w-full rounded-md border border-line px-3 py-2" placeholder="Category" />
      <textarea v-model="form.description" class="w-full rounded-md border border-line px-3 py-2" rows="4" placeholder="Work description"></textarea>
      <div class="grid gap-3 md:grid-cols-2">
        <input v-model.number="form.budget" class="rounded-md border border-line px-3 py-2" placeholder="Budget" />
        <input v-model="form.currency" class="rounded-md border border-line px-3 py-2" placeholder="Currency" />
        <input v-model.number="form.deposit_percent" class="rounded-md border border-line px-3 py-2" placeholder="Deposit percent" />
        <input v-model="form.location" class="rounded-md border border-line px-3 py-2" placeholder="Location" />
      </div>
      <input v-model="skills" class="w-full rounded-md border border-line px-3 py-2" placeholder="Required skills, comma separated" />
      <button class="w-full rounded-md bg-brand px-4 py-3 font-semibold text-white">Create task</button>
      <p v-if="message" class="text-sm text-brand">{{ message }}</p>
    </form>

    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold">Employer tasks</h2>
          <p class="text-sm text-gray-600">Tasks include full employer-side status and funding requirements.</p>
        </div>
        <button class="rounded-md border border-line px-3 py-2 text-sm" @click="load">Refresh</button>
      </div>
      <div v-for="task in tasks" :key="task.id" class="border border-line bg-white p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold">{{ task.title }}</p>
            <p class="mt-1 text-sm text-gray-600">{{ task.description }}</p>
            <p class="mt-3 text-sm font-medium">{{ task.currency }} {{ task.budget.toLocaleString() }} · {{ task.deposit_percent }}% deposit</p>
          </div>
          <StatusBadge :value="task.status" />
        </div>
      </div>
      <p v-if="!tasks.length" class="border border-line bg-white p-8 text-center text-sm text-gray-600">No tasks yet.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'employer', middleware: 'employer' })

const tasks = ref<any[]>([])
const message = ref('')
const skills = ref('Go, PostgreSQL, Payments')
const form = reactive({
  title: '',
  category: 'Software Engineering',
  description: '',
  budget: 0,
  currency: 'NGN',
  deposit_percent: 50,
  location: 'Remote',
  remote_allowed: true,
})

const load = async () => {
  const { data } = await useApi().get('/employer/tasks')
  tasks.value = data
}

const createTask = async () => {
  message.value = ''
  await useApi().post('/employer/tasks', { ...form, required_skills: skills.value.split(',').map((skill) => skill.trim()).filter(Boolean) })
  message.value = 'Task created.'
  Object.assign(form, { title: '', description: '', budget: 0 })
  await load()
}

onMounted(load)
</script>
