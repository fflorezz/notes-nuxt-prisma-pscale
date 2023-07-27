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
  <NoteForm
    v-if="isEditing"
    @submit="editNote"
    :isLoading="isLoading"
    :defaultData="note"
    class="max-w-md"
  />
  <div v-else>
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      {{ note.title }}
    </h1>
    <p>{{ note.content }}</p>
    <button
      :disabled="isLoading"
      @click="isEditing = true"
      type="button"
      class="w-32 mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <span> Edit </span>
    </button>
  </div>
</template>
