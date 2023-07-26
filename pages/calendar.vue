<template>
  <div>
    <NuxtLink to="/"> Home </NuxtLink>
    <NuxtLink to="/calendar"> Calendar </NuxtLink>

    <main class="my-24">
      <div class="container max-w-lg">
        <div class="bg-white p-8 shadow-sm">
          <h1 class="text-center text-3xl font-bold text-cyan-500">{{ title }}</h1>

          <div class="mt-8 grid grid-cols-[auto_1fr_auto]">
            <button class="ml-1 rounded border border-slate-300 p-1 hover:border-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <h3 class="text-center">{{ currentMonth }}</h3>
            <button class="mr-1 rounded border border-slate-300 p-1 hover:border-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div class="mt-5">
            <div class="grid grid-cols-7 gap-4">
              <div
                v-for="day in days"
                :key="day"
                class="flex items-center justify-center text-slate-400"
              >
                {{ day }}
              </div>
            </div>
            <div class="mt-4 grid grid-cols-7 gap-4">
              <div v-for="d in 31" :key="d" class="flex items-center justify-center">{{ d }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Calendar',
      currentMonth: new Date().getMonth(),
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // Sunday - Saturday : 0 - 6
    }
  }
}
</script>
