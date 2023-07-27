<template>
  <div>
    <NuxtLink to="/"> Home </NuxtLink>
    <NuxtLink to="/calendar"> Calendar </NuxtLink>

    <main class="my-24">
      <div class="container max-w-lg">
        <div class="bg-white p-8 shadow-sm">
          <h1 class="text-center text-3xl font-bold text-cyan-500">{{ title }}</h1>

          <div class="mt-8 grid grid-cols-[auto_1fr_auto]">
            <button
              class="ml-1 rounded border border-slate-300 p-1 hover:border-cyan-500"
              @click="toPrevMonth"
            >
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
            <h3 class="text-center font-bold">{{ currentMonthName }} {{ currentYear }}</h3>
            <button
              class="mr-1 rounded border border-slate-300 p-1 hover:border-cyan-500"
              @click="toNextMonth"
            >
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
              <!-- render empty divs for days before the start day of month -->
              <div
                v-for="day in startDayOfMonth"
                :key="day"
                class="flex items-center justify-center"
              ></div>

              <div
                v-for="number in totalDaysInMonth"
                :key="number"
                class="flex items-center justify-center"
              >
                {{ number }}
              </div>
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
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(), // January - December : 0 - 11
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {
        month: 'long'
      })
    },
    totalDaysInMonth() {
      // pass 0 as day to get last day of current month
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
    },
    startDayOfMonth() {
      // pass 1 as day to get first day of current month

      // default first day of month is Sunday : 0
      // Sunday - Saturday : 0 - 6

      // but we want Monday - Sunday : 0 - 6
      // so we subtract 1 from first day of month
      const startDay = new Date(this.currentYear, this.currentMonth, 1).getDay() - 1

      if (startDay === -1) {
        // if start day is Sunday, we want it to be the last day of week
        return 6
      }

      return startDay
    }
  },
  methods: {
    toNextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },
    toPrevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11
        this.currentYear--
      } else {
        this.currentMonth--
      }
    }
  }
}
</script>
