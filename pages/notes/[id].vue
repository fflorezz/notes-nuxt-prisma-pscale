<script setup lang="ts">
const noteId = useRoute().params.id
const { editNote } = useEditModal()
const { data: note } = await useFetch(`/api/notes/${noteId}`, {
  key: 'note',
})

if (!note.value) {
  throw createError({
    statusCode: 404,
    message: 'Note not found',
  })
}

const title = computed(() =>
  note.value?.title ? `Notes - ${note.value.title}` : 'Notes'
)

useHead({
  title,
})
</script>
<template>
  <div class="flex items-start justify-between">
    <h2 class="text-4xl font-bold dark:text-white break-words">
      {{ note?.title }}
    </h2>
    <button
      @click="editNote(note)"
      class="text-gray-400 bg-transparent rounded-full p-2 hover:bg-gray-50"
    >
      <edit-icon class="w-6 h-6" />
    </button>
  </div>
  <p class="mt-6 break-words">{{ note?.content }}</p>
</template>
