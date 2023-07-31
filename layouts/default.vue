<template>
  <div>
    <ErrorMessage>
      <EditNoteModal />
      <TheNav />
      <TheSidebar />
      <NuxtLoadingIndicator />
      <main class="pl-10 pr-6 pb-10 pt-6 sm:ml-64 sm:mt-16">
        <slot />
      </main>
    </ErrorMessage>
  </div>
</template>
