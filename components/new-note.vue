<script setup lang="ts">
const title = ref('')
const content = ref('')
const router = useRouter()

const addNote = async () => {
  const { status } = await useFetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      title: title.value,
      content: content.value,
    },
  })
  router.go(0)
}
</script>

<template>
  <form class="max-w-md mt-10">
    <label
      for="first_name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Title</label
    >
    <input
      v-model="title"
      type="text"
      id="first_name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
    <label
      for="message"
      class="mt-6 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Content</label
    >
    <textarea
      v-model="content"
      id="message"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
    <button
      @click.prevent="addNote"
      type="button"
      class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Add
    </button>
  </form>
</template>
