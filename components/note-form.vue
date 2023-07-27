<script setup lang="ts">
defineEmits(['submit'])

const title = ref('')
const content = ref('')
const props = defineProps({
  isLoading: Boolean,
  defaultData: Object,
  buttonText: {
    type: String,
    default: 'Add',
  },
})

onMounted(() => {
  if (props.defaultData) {
    title.value = props.defaultData.title
    content.value = props.defaultData.content
  }
})
</script>

<template>
  <form>
    <div>
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
      ></textarea>
    </div>
    <div class="flex justify-end mt-6 gap-4">
      <button
        @click.prevent="$emit('close')"
        type="button"
        class="w-32 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        cancel
      </button>

      <button
        :disabled="isLoading"
        @click.prevent="$emit('submit', { title, content })"
        type="button"
        class="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <spinner v-if="isLoading" class="mx-auto h-5 text-white" />
        <span v-else> {{ buttonText }}</span>
      </button>
    </div>
  </form>
</template>
