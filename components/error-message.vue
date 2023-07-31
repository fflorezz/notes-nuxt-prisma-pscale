<script setup lang="ts">
function handleError(error: any) {
  navigateTo('/')
  error.value = null
}
</script>

<template>
  <NuxtErrorBoundary>
    <template #error="{ error }">
      <div class="flex flex-col items-center justify-center mt-32">
        <div class="text-2xl font-bold">An error occurred</div>
        <code class="mt-6 text-red-500"> {{ error }}</code>
        <button
          class="bg-gray-400 py-2 px-6 rounded mt-6"
          @click="handleError(error)"
        >
          Go back
        </button>
      </div>
    </template>
    <slot />
  </NuxtErrorBoundary>
</template>
