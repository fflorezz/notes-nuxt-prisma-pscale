<script setup lang="ts">
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})
const { title, content, id } = props.note
const { editNote } = useEditNote()
const { loading, deleteNote } = useDeleteNote()
</script>
<template>
  <NuxtLink
    :to="`/notes/${id}`"
    class="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div>
      <h5
        :title="title"
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words"
      >
        {{ title }}
      </h5>
      <p class="mt-2 font-normal text-gray-700 dark:text-gray-400 break-words">
        {{ content }}
      </p>
    </div>
    <div class="mt-4 flex">
      <button
        @click.prevent="deleteNote(id)"
        class="text-red-500 bg-transparent rounded-full p-2 hover:bg-red-50 flex-shrink-0"
        :class="loading ? 'cursor-default  hover:bg-transparent' : ''"
      >
        <spinner v-if="loading" class="h-5 text-red-500" />
        <DeleteIcon v-else class="w-5 h-5" />
      </button>
      <button
        @click.prevent="editNote(note)"
        class="text-gray-400 bg-transparent rounded-full p-2 hover:bg-gray-50"
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
