<template>
  <div>
    <main class="my-24">
      <div class="container">
        <h2 class="text-center text-3xl font-bold text-cyan-500">{{ title }}</h2>

        <div class="mt-8 flex min-h-screen">
          <textarea v-model="content" class="w-1/2 bg-white p-5 outline-0"></textarea>
          <article class="w-1/2 bg-stone-100 p-5" v-html="compiledMarkdown"></article>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { marked } from 'marked'
import DOMPurify from 'dompurify'

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
  }
}
</script>
