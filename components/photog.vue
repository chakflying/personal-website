<template>
  <client-only>
    <div
      v-masonry
      transition-duration="1s"
      item-selector=".item"
      class="masonry-container w-full lg:w-4/5"
    >
      <div
        v-for="(item, index) in photos"
        :key="index"
        v-masonry-tile
        class="item w-full lg:w-1/3 p-4 lg:p-1"
      >
        <img class="myphoto" :src="item" :alt="'Photo' + index" />
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
      photos: [
        '/photog/_DSC0044.webp',
        '/photog/_DSC0046.webp',
        '/photog/_DSC0033.webp',
        '/photog/_DSC0173.webp',
        '/photog/_DSC9292.webp',
        '/photog/_DSC9597.webp',
        '/photog/_DSC9995.webp',
        '/photog/_DSC0999.webp',
        '/photog/_DSC0614.webp',
        '/photog/_DSC0084.webp',
        '/photog/_DSC9213.webp'
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

.myphoto {
  width: 100%;
  @apply shadow-2xl;
}

.myphoto:hover {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
  z-index: 999;
}

img {
  transition: transform 0.25s ease-in-out;
}
</style>
