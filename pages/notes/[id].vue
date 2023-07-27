<script setup lang="ts">
const noteId = useRoute().params.id
const { data: note } = await useFetch(`/api/notes/${noteId}`)
const router = useRouter()
const isEditing = ref(false)
const isLoading = ref(false)

const editNote = async ({ title, content }) => {
  isLoading.value = true
  await useFetch(`/api/notes/${noteId}`, {
    method: 'PUT',
    body: {
      title: title,
      content: content,
    },
  })
  router.go(0)
}
</script>
<template>
  <div class="">
    <NoteForm
      v-if="isEditing"
      @submit="editNote"
      @close="isEditing = false"
      :isLoading="isLoading"
      :defaultData="note"
      :buttonText="'Save'"
      class="max-w-lg mx-auto pt-6"
    />
    <div v-else class="mt-10">
      <div class="flex items-start justify-between">
        <h2 class="text-4xl font-bold dark:text-white break-words">
          {{ note.title }}
        </h2>
        <svg
          @click="isEditing = true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </div>
      <p class="mt-6 break-words">{{ note.content }}</p>
    </div>
  </div>
</template>
