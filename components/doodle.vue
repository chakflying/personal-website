<template>
  <client-only>
    <div
      v-masonry="doodlema"
      transition-duration="1s"
      item-selector=".item"
      stagger="0.1s"
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
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry('doodlema')
    }
  }
}
</script>

<style lang="postcss" scoped>
.masonry-container {
  @apply flex justify-center items-center mx-auto;
}

.item {
  z-index: 1;
  min-height: 300px;
}

.item:hover {
  z-index: 999;
  @apply shadow-2xl;
}

.mydoodle {
  width: 100%;
}

.mydoodle:hover {
  transform: scale(1.15);
}

img {
  transition: transform 0.25s ease-in-out;
}
</style>
