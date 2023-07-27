<template>
  <nav
    class="fixed left-0 right-0 top-0 h-16 border-b bg-white border-gray-200 dark:bg-gray-900"
  >
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8 mr-3 text-blue-700"
        >
          <path
            d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"
          />
        </svg>

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
            <button
              @click.prevent="$emit('submit', { title, content })"
              type="button"
              class="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <span> Add note </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
