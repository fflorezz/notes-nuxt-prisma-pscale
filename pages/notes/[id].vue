<script setup lang="ts">
const noteId = useRoute().params.id
const { data: note } = await useFetch(`/api/notes/${noteId}`)
const isLoading = ref(false)
const router = useRouter()
const isModalOpen = useState('isModalOpen', () => false)

const editNote = async ({ title, content }) => {
  if (isLoading.value) return

  isLoading.value = true

  await useFetch(`/api/notes/${noteId}`, {
    method: 'PUT',
    body: {
      title: title,
      content: content,
    },
  })

  isModalOpen.value = false
  router.go(0)
}
</script>
<template>
  <div class="">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <NoteForm
        @submit="editNote"
        @close="isModalOpen = false"
        :isLoading="isLoading"
        class="bg-white rounded p-10"
        :defaultData="note"
        :buttonText="'Save'"
      />
    </Modal>
    <div v-else class="">
      <div class="flex items-start justify-between">
        <h2 class="text-4xl font-bold dark:text-white break-words">
          {{ note.title }}
        </h2>
        <button
          @click="isModalOpen = true"
          class="text-gray-400 bg-transparent rounded-full p-2 hover:bg-gray-50"
        >
          <edit-icon class="w-6 h-6" />
        </button>
      </div>
      <p class="mt-6 break-words">{{ note.content }}</p>
    </div>
  </div>
</template>
