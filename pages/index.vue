<script setup lang="ts">
const { data: notes } = await useFetch('/api/notes', {
  key: 'notes',
})
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <NoteCard v-for="note in notes" :note="note" :key="note.id" />
  </div>
</template>
