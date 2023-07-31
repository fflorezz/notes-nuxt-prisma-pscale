<script setup lang="ts">
const router = useRouter()
const isEditOpen = useState('isEditOpen')
const oldNote = useState('note')

const { editNote, loading, onSuccess } = useNoteApi()

onSuccess(async () => {
  isEditOpen.value = false
})
</script>
<template>
  <Modal v-if="isEditOpen" @close="isEditOpen = false">
    <NoteForm
      @submit="newNote => editNote({ ...newNote, id: oldNote.id })"
      @close="isEditOpen = false"
      :isLoading="loading"
      class="bg-white rounded p-10"
      :defaultData="oldNote"
      :buttonText="'Save'"
    />
  </Modal>
</template>
