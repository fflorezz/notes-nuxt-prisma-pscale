<template>
  <nav
    class="fixed left-0 right-0 top-0 h-16 border-b bg-white border-gray-200 dark:bg-gray-900"
  >
    <div
      class="flex flex-wrap items-center justify-between mx-auto py-4 pr-6 pl-5"
    >
      <NuxtLink to="/" class="flex items-center">
        <logo-icon class="w-8 h-8 mr-3 text-blue-700" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Notes</span
        >
      </NuxtLink>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <AddNoteButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
