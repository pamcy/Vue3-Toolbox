<template>
  <div class="fixed inset-0 z-10">
    <div class="fixed inset-0 -z-10 bg-stone-950 opacity-50"></div>
    <div class="flex h-full items-center justify-center">
      <div class="m-8 w-full max-w-md bg-white">
        <header class="relative flex min-h-[64px] items-center justify-center px-6">
          <h2 class="text-3xl font-bold">Login</h2>
          <button class="absolute right-6 ml-auto">
            <CloseIcon />
          </button>
        </header>
        <main class="p-6">
          <form>
            <div class="mb-2">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                class="block w-full rounded border p-2"
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                class="block w-full rounded border p-2"
              />
            </div>
            <button
              type="submit"
              class="mt-5 w-full rounded bg-cyan-500 p-3 text-white hover:opacity-80"
            >
              Continue
            </button>
          </form>

          <div
            class="my-4 flex items-center justify-center text-xs before:mr-4 before:h-[1px] before:w-full before:bg-gray-200 after:ml-4 after:h-[1px] after:w-full after:bg-gray-200"
          >
            or
          </div>

          <button class="w-full rounded border border-stone-950 p-3 hover:opacity-80">
            Continue with Google
          </button>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from './icons/CloseIcon.vue'
</script>
