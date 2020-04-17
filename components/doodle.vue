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
        class="item w-full lg:w-1/3 p-4 lg:p-1"
      >
        <picture>
          <source :srcset="item + '.webp'" type="image/webp" />
          <img class="mydoodle" :src="item + '.jpeg'" :alt="'Doodle ' + index + 1" />
        </picture>
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
        '/doodle/louvre',
        '/doodle/sometroop',
        '/doodle/brainbird',
        '/doodle/outerworlds1',
        '/doodle/Scene3_2'
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
