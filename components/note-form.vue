<script setup lang="ts">
defineEmits(['submit', 'close'])

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
    <div class="flex justify-end mt-6 gap-2 items-center">
      <OutlineButton @click.prevent="$emit('close')" class="w-28">
        cancel
      </OutlineButton>

      <MainButton
        :disabled="isLoading"
        class="w-28"
        @click="$emit('submit', { title, content })"
      >
        <spinner v-if="isLoading" class="mx-auto h-5 text-white" />
        <span v-else> {{ buttonText }}</span>
      </MainButton>
    </div>
  </form>
</template>
