<script setup lang="ts">
const { onSuccess, loading, addNote } = useNoteApi()
const isModalOpen = useState('isModalOpen', () => false)

onSuccess(async () => {
  isModalOpen.value = false
})
</script>

<template>
  <Modal v-if="isModalOpen" @close="isModalOpen = false">
    <NoteForm
      @submit="addNote"
      @close="isModalOpen = false"
      :isLoading="loading"
      class="bg-white rounded p-10"
    />
  </Modal>
  <MainButton @click="isModalOpen = true">
    <span> Add note </span>
  </MainButton>
</template>
