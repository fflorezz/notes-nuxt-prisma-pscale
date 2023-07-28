<script setup>
defineEmits(['close'])
</script>

<template>
  <div
    id="staticModal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    @click="$emit('close')"
    class="fixed top-0 left-0 right-0 z-50 bg-black/50 bg-w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div
      @click.stop=""
      class="relative w-full max-w-2xl max-h-full mx-auto mt-16"
    >
      <slot />
    </div>
  </div>
</template>
