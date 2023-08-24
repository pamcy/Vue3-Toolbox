<template>
  <div>
    <main class="my-24">
      <div class="relative h-[calc(100vh_-_96px*2)] md:h-[60vh]">
        <div v-for="(slide, index) in slider" :key="slide.name" class="absolute h-full w-full">
          <Transition name="slideIn">
            <figure v-if="index == currentSlide" class="relative h-full">
              <img :src="slide.img" alt="slide.name" class="h-full w-full object-cover" />
              <figcaption class="absolute inset-x-0 bottom-16 p-5 text-center text-xl text-white">
                <span class="mb-4 block text-3xl">{{ title }}</span>
                <span>{{ slide.name }}</span>
              </figcaption>
            </figure>
          </Transition>
        </div>
        <nav></nav>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Carousel',
      currentSlide: 0,
      interval: null,
      speed: 5000,
      slider: [
        {
          name: 'heart-shaped bowl with strawberries',
          img: 'https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3650&q=80'
        },
        {
          name: 'assorted-color button pins on top of white surface',
          img: 'https://images.unsplash.com/photo-1521249730512-fddd11477549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3569&q=80'
        },
        {
          name: 'white and purple heart shaped stone',
          img: 'https://images.unsplash.com/photo-1604699229817-27301bdfed68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80'
        }
      ]
    }
  },
  mounted() {
    this.changeSlide()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeSlide() {
      this.interval = setInterval(() => {
        if (this.currentSlide >= this.slider.length - 1) {
          this.currentSlide = 0

          return
        }

        this.currentSlide++
      }, this.speed)
    }
  }
}
</script>

<style>
.slideIn-enter-active,
.slideIn-leave-active {
  transform: translateX(0);
  opacity: 1;
  transition:
    opacity 0.25s,
    transform 0.7s;
}

.slideIn-enter-from,
.slideIn-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
