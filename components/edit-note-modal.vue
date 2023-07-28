<script setup lang="ts">
const props = defineProps({
  note: Object,
})
const isLoading = ref(false)
const router = useRouter()
const editModal = useEditModal()
const stateNote = useNote()

const editNote = async ({ title, content }) => {
  if (isLoading.value) return

  isLoading.value = true

  await useFetch(`/api/notes/${stateNote.value.id}`, {
    method: 'PUT',
    body: {
      title: title,
      content: content,
    },
  })

  editModal.value = false
  router.go(0)
}
</script>
<template>
  <Modal v-if="editModal" @close="editModal = false">
    <NoteForm
      @submit="editNote"
      @close="editModal = false"
      :isLoading="isLoading"
      class="bg-white rounded p-10"
      :defaultData="stateNote"
      :buttonText="'Save'"
    />
  </Modal>
</template>
