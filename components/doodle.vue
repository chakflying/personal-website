<template>
  <client-only>
    <div
      v-masonry
      transition-duration="1s"
      item-selector=".item"
      class="masonry-container w-full lg:w-4/5"
    >
      <div
        v-for="(item, index) in doodles"
        :key="index"
        v-masonry-tile
        class="item w-full lg:w-1/3 lg:p-1"
      >
        <img class="mydoodle" :src="item" :alt="'Doodle' + index" />
      </div>
    </div>
  </client-only>
</template>

<script>
import ClientOnly from 'vue-client-only'
export default {
  components: {
    ClientOnly
  },
  data() {
    return {
      doodles: [
        '/doodle/brainbird.webp',
        '/doodle/Day7_louvre.webp',
        '/doodle/Day12_sometroop.webp',
        '/doodle/outerworlds_1.webp',
        '/doodle/Scene1.webp',
        '/doodle/Scene3_1.webp',
        '/doodle/Scene3_2.webp'
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.masonry-container {
  @apply flex justify-center items-center mx-auto;
}
.item {
  @apply p-4;
}

.mydoodle {
  width: 100%;
  @apply shadow-2xl;
}

.mydoodle:hover {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
  z-index: 999;
}

img {
  transition: transform 0.25s ease-in-out;
}
</style>
