<script setup lang="ts">
const { data: notes } = await useFetch('/api/notes')
const router = useRouter()
const isLoading = ref(false)

const addNote = async ({ title, content }) => {
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
  <div>
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      My awesome notes
    </h1>
    <NoteForm @submit="addNote" :isLoading="isLoading" class="max-w-md mt-10" />
    <div class="mt-10 grid grid-cols-4 gap-4">
      <Note
        v-for="note in notes"
        :title="note.title"
        :body="note.content"
        :id="note.id"
        :key="note.id"
      />
    </div>
  </div>
</template>
