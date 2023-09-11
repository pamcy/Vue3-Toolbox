<script setup>
import { auth } from '../utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { watch, ref, nextTick } from 'vue'
import CloseIcon from './icons/CloseIcon.vue'

const props = defineProps({
  isLoginModalOpen: Boolean
})

const emit = defineEmits(['closeLogin'])

const formData = ref({
  email: '',
  password: ''
})
const emailRef = ref(null)
const isAuthLoading = ref(false)

watch(() => {
  if (props.isLoginModalOpen) {
    // 確保 LoginModal DOM 已經完全 render
    nextTick(() => {
      emailRef.value.focus()
    })
  }
})

const closeLoginModal = () => {
  emit('closeLogin')
}

const submitForm = () => {
  if (!formData.value.email | !formData.value.password) {
    alert('Please fill in all fields')

    return
  }

  isAuthLoading.value = true

  // Sign in existing users
  // https://firebase.google.com/docs/auth/web/start
  signInWithEmailAndPassword(auth, formData.value.email, formData.value.password)
    .then((res) => {
      console.log(res)

      formData.value.email = ''
      formData.value.password = ''

      closeLoginModal()
    })
    .catch((error) => {
      const errorCode = error.errorCode
      const errorMsg = error.message

      console.error(`${errorCode}: ${errorMsg}`)
    })
    .finally(() => {
      isAuthLoading.value = false
    })
}
</script>

<template>
  <Transition name="modal">
    <div v-if="isLoginModalOpen" class="fixed inset-0 z-20">
      <div class="fixed inset-0 bg-stone-950 opacity-50" @click="closeLoginModal"></div>

      <div class="flex h-full items-center justify-center">
        <div class="modal-dialog z-10 m-8 w-full max-w-md bg-white shadow transition-transform">
          <header class="relative flex min-h-[64px] items-center justify-center px-6">
            <h2 class="text-3xl font-bold">Login</h2>
            <button class="absolute right-6 ml-auto" @click="closeLoginModal">
              <CloseIcon />
            </button>
          </header>

          <main class="p-6">
            <form @submit.prevent="submitForm">
              <div class="mb-2">
                <label for="email">Email</label>
                <input
                  id="email"
                  ref="emailRef"
                  v-model="formData.email"
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
                  v-model="formData.password"
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
                <span v-if="isAuthLoading">⌛</span>
                <span v-else>Continue</span>
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
  </Transition>
</template>

<style scoped>
.modal-enter-from .modal-dialog,
.modal-leave-to .modal-dialog {
  transform: translateY(30%);
}
</style>
