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
    <div class="mt-4">
      <spinner v-if="isLoading" class="h-8 text-red-500" />
      <button
        v-else
        @click.prevent="deleteNote"
        class="text-red-500 bg-transparent rounded-full p-2 hover:bg-red-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
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
