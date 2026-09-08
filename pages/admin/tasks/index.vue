<template>
  <section class="space-y-5">
    <div>
      <h2 class="text-lg font-semibold">Marketplace tasks</h2>
      <p class="text-sm text-gray-600">Admin view of employer task demand and contract status.</p>
    </div>
    <div class="overflow-hidden border border-line bg-white">
      <table class="min-w-full divide-y divide-line text-sm">
        <thead class="bg-surface text-left text-gray-600">
          <tr>
            <th class="px-5 py-3 font-medium">Task</th>
            <th class="px-5 py-3 font-medium">Category</th>
            <th class="px-5 py-3 font-medium">Budget</th>
            <th class="px-5 py-3 font-medium">Deposit</th>
            <th class="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id" class="border-t border-line">
            <td class="px-5 py-4 font-semibold">{{ task.title }}</td>
            <td class="px-5 py-4 text-gray-600">{{ task.category }}</td>
            <td class="px-5 py-4">{{ task.currency }} {{ task.budget.toLocaleString() }}</td>
            <td class="px-5 py-4">{{ task.deposit_percent }}%</td>
            <td class="px-5 py-4"><StatusBadge :value="task.status" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const tasks = ref<any[]>([])
onMounted(async () => {
  const { data } = await useApi().get('/admin/tasks')
  tasks.value = data
})
</script>
