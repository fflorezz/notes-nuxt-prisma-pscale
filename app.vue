<script setup lang="ts">
const { data: notes } = await useFetch('/api/notes')
</script>

<template>
  <div class="p-10">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      My awesome notes
    </h1>
    <div class="mt-16 flex flex-wrap gap-4">
      <card
        v-for="note in notes"
        :title="note.title"
        :body="note.content"
        :key="note.id"
      />
    </div>
  </div>
</template>
