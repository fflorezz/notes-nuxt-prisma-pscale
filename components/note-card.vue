<script setup lang="ts">
defineProps({
  note: {
    type: Object,
    required: true,
  },
})

const { editNote } = useEditModal()
const { loading, deleteNote } = useNoteApi()
</script>

<template>
  <NuxtLink
    :to="`/notes/${note.id}`"
    class="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div>
      <h5
        :title="note.title"
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words"
      >
        {{ note.title }}
      </h5>
      <p class="mt-2 font-normal text-gray-700 dark:text-gray-400 break-words">
        {{ note.content }}
      </p>
    </div>
    <div class="mt-4 flex justify-end">
      <button
        @click.prevent="deleteNote(note.id)"
        type="button"
        class="text-red-500 bg-transparent rounded-full p-2 hover:bg-red-50 flex-shrink-0"
        :class="loading ? 'cursor-default  hover:bg-transparent' : ''"
      >
        <spinner v-if="loading" class="h-5 text-red-500" />
        <DeleteIcon v-else class="w-5 h-5" />
      </button>
      <button
        @click.prevent="editNote(note)"
        class="text-gray-400 bg-transparent rounded-full p-2 hover:bg-gray-100"
      >
        <edit-icon class="w-5 h-5" />
      </button>
    </div>
  </NuxtLink>
</template>

<style scoped>
h5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
}
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
}
</style>
