<template>
  <client-only>
    <div
      v-masonry="photogma"
      transition-duration="1s"
      item-selector=".item"
      stagger="0.1s"
      class="masonry-container w-full lg:w-4/5"
    >
      <div
        v-for="(item, index) in photos"
        :key="index"
        v-masonry-tile
        class="item w-full lg:w-1/3 p-4 lg:p-1"
      >
        <picture>
          <source :srcset="item + '.webp'" type="image/webp" />
          <img class="myphoto" :src="item + '.jpeg'" :alt="'Photo ' + index + 1" />
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
      photos: [
        '/photog/_DSC0033',
        '/photog/_DSC0052',
        '/photog/_DSC1079',
        '/photog/_DSC0173',
        '/photog/_DSC9292',
        '/photog/_DSC9597',
        '/photog/_DSC0425',
        '/photog/_DSC0999',
        '/photog/_DSC0614',
        '/photog/_DSC0084',
        '/photog/_DSC9213'
      ]
    }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry('photogma')
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
  min-height: 100px;
}

.item:hover {
  z-index: 999;
  @apply shadow-2xl;
}

.myphoto {
  width: 100%;
}

.myphoto:hover {
  transform: scale(1.15);
}

img {
  transition: transform 0.25s ease-in-out;
}
</style>
