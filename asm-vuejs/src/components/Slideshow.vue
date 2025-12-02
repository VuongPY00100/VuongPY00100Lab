<script setup>
import { ref } from 'vue'

const slides = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3'
]

const index = ref(0)

function nextSlide() {
  index.value = (index.value + 1) % slides.length
}

function prevSlide() {
  index.value = (index.value - 1 + slides.length) % slides.length
}

function goToSlide(i) {
  index.value = i
}
</script>

<template>
  <div class="slideshow">
    <div class="slide">
      <img :src="slides[index]" />
    </div>

    <!-- Nút prev/next -->
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>

    <!-- Dots -->
    <div class="dots">
      <span
        v-for="(s, i) in slides"
        :key="i"
        class="dot"
        :class="{ active: i === index }"
        @click="goToSlide(i)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.slideshow {
  position: relative;
  max-width: 950px;
  margin: auto;
}

.slide img {
  width: 100%;
  border-radius: 10px;
}

/* Nút */
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 22px;
  border-radius: 5px;
}

.prev:hover, .next:hover {
  background: rgba(0,0,0,0.7);
}

.prev { left: 10px; }
.next { right: 10px; }

/* Dots */
.dots {
  text-align: center;
  margin-top: 10px;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  display: inline-block;
  background: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background: #555;
}
</style>
