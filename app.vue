<script setup lang="ts">
console.log('Hello from app.vue')

const posts = ref([])

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => (posts.value = json))

watchEffect(() => {
  console.log(posts.value[0])
})
</script>

<template>
  <div class="p-10">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      My awesome notes
    </h1>
    <div class="mt-16 flex flex-wrap gap-4">
      <card
        v-for="post in posts"
        :title="post.title"
        :body="post.body"
        :key="post.id"
      />
    </div>
  </div>
</template>
