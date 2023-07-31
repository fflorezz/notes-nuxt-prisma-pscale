<script setup lang="ts">
const noteId = useRoute().params.id
const { data: note } = await useFetch(`/api/notes/${noteId}`, {
  key: 'note',
})
const { editNote } = useEditModal()
</script>
<template>
  <div class="flex items-start justify-between">
    <h2 class="text-4xl font-bold dark:text-white break-words">
      {{ note.title }}
    </h2>
    <button
      @click="editNote(note)"
      class="text-gray-400 bg-transparent rounded-full p-2 hover:bg-gray-50"
    >
      <edit-icon class="w-6 h-6" />
    </button>
  </div>
  <p class="mt-6 break-words">{{ note.content }}</p>
</template>
