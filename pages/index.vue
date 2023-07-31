<script setup lang="ts">
const { data: notes } = await useFetch('/api/notes', {
  key: 'notes',
})
</script>

<template>
  <NoteGrid>
    <NoteCard v-for="note in notes" :note="note" :key="note.id" />
  </NoteGrid>
</template>
