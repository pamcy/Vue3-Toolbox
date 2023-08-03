<template>
  <div>
    <main class="my-24">
      <div class="container">
        <h2 class="text-center text-3xl font-bold text-cyan-500">{{ title }}</h2>

        <div class="mt-8 flex min-h-screen">
          <textarea
            ref="contentRef"
            :value="content"
            class="w-1/2 bg-white p-6 outline-0"
            @input="updateContent"
          ></textarea>
          <article class="prose w-1/2 bg-stone-100 p-6" v-html="compiledMarkdown"></article>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { debounce } from '../utils/debounce'

export default {
  data() {
    return {
      title: 'Markdown Editor',
      content: '# Hallo World'
    }
  },
  computed: {
    compiledMarkdown() {
      return DOMPurify.sanitize(marked(this.content))
    }
  },
  mounted() {
    this.$refs.contentRef.focus()
  },
  created() {
    // When this hook is called, the following have been set up: reactive data, computed properties, methods, and watchers. However, the mounting phase has not been started, and the $el property will not be available yet.

    // if you want to initialize it once, when the component is first created. This means that the function will only be called once, when the user starts typing in the textarea.

    this.updateContent = debounce((e) => {
      this.content = e.target.value
    }, 300)
  },
  methods: {}
}
</script>
