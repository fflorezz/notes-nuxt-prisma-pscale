<script setup lang="ts">
const noteId = useRoute().params.id
const { data: note } = await useFetch(`/api/notes/${noteId}`)
</script>
<template>
  <h1
    class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
  >
    {{ note.title }}
  </h1>
  <p>{{ note.content }}</p>
</template>
