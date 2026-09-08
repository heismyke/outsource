<template>
  <section class="space-y-5">
    <div>
      <h2 class="text-lg font-semibold">Applications</h2>
      <p class="text-sm text-gray-600">Review worker proposals and accept one to create a contract requiring deposit funding.</p>
    </div>
    <div class="overflow-hidden border border-line bg-white">
      <table class="min-w-full divide-y divide-line text-sm">
        <thead class="bg-surface text-left text-gray-600">
          <tr>
            <th class="px-5 py-3 font-medium">Worker</th>
            <th class="px-5 py-3 font-medium">Proposal</th>
            <th class="px-5 py-3 font-medium">Fee</th>
            <th class="px-5 py-3 font-medium">Status</th>
            <th class="px-5 py-3 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="application in applications" :key="application.id" class="border-t border-line">
            <td class="px-5 py-4 font-semibold">{{ application.worker_id.slice(0, 8) }}</td>
            <td class="px-5 py-4 text-gray-600">{{ application.cover_note }}</td>
            <td class="px-5 py-4">{{ application.currency }} {{ application.proposed_fee.toLocaleString() }}</td>
            <td class="px-5 py-4"><StatusBadge :value="application.status" /></td>
            <td class="px-5 py-4 text-right">
              <button class="rounded-md bg-[#3989f7] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50" :disabled="application.status !== 'SUBMITTED'" @click="accept(application.id)">Accept</button>
            </td>
          </tr>
          <tr v-if="!applications.length">
            <td colspan="5" class="px-5 py-10 text-center text-gray-600">No applications yet. Log in as Worker and apply to a task.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-if="message" class="border border-line bg-white p-4 text-sm text-brand">{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'employer', middleware: 'employer' })

const applications = ref<any[]>([])
const message = ref('')

const load = async () => {
  const { data } = await useApi().get('/employer/applications')
  applications.value = data
}

const accept = async (id: string) => {
  await useApi().post(`/employer/applications/${id}/accept`)
  message.value = 'Application accepted. Contract created and awaiting deposit.'
  await load()
}

onMounted(load)
</script>
