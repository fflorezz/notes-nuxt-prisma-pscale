<script setup lang="ts">
const props = defineProps({
  title: String,
  body: String,
  id: Number,
})

const router = useRouter()
const isLoading = ref(false)

const deleteNote = async () => {
  isLoading.value = true
  await useFetch(`/api/notes/${props.id}`, {
    method: 'DELETE',
  })
  router.go(0)
}
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
        {{ body }}
      </p>
    </div>
    <div class="mt-4 flex">
      <button
        @click.prevent="deleteNote"
        class="text-red-500 bg-transparent rounded-full p-2 hover:bg-red-50"
        :class="isLoading ? 'cursor-default  hover:bg-transparent' : ''"
      >
        <spinner v-if="isLoading" class="h-5 text-red-500" />
        <DeleteIcon v-else class="w-5 h-5" />
      </button>
      <button
        @click="isEditing = true"
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
