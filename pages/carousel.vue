<template>
  <div>
    <main class="my-24">
      <h2 class="text-center text-3xl font-bold text-cyan-500">Carousel</h2>

      <div class="mt-8">
        <div v-for="slide in slider" :key="slide.name" class="relative">
          <figure>
            <img :src="slide.img" alt="slide.name" />
            <figcaption class="absolute inset-x-0 bottom-16 text-center text-xl text-white">
              {{ slide.name }}
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Carousel',
      slider: [
        {
          name: 'white and purple heart shaped stone',
          img: 'https://images.unsplash.com/photo-1604699229817-27301bdfed68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80'
        },
        {
          name: 'assorted-color button pins on top of white surface',
          img: 'https://images.unsplash.com/photo-1521249730512-fddd11477549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3569&q=80'
        },
        {
          name: 'heart-shaped bowl with strawberries',
          img: 'https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3650&q=80'
        }
      ]
    }
  }
}
</script>
