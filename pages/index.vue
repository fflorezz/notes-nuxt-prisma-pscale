<script setup lang="ts">
const { data: notes } = await useFetch('/api/notes')
const router = useRouter()
const isLoading = ref(false)
const isModalOpen = ref(false)

const addNote = async ({ title, content }) => {
  if (isLoading.value) return

  isLoading.value = true

  await useFetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      title: title,
      content: content,
    },
  })

  router.go(0)
}
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <NoteCard
      v-for="note in notes"
      :title="note.title"
      :body="note.content"
      :id="note.id"
      :key="note.id"
    />
  </div>
</template>
