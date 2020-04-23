<template>
  <client-only>
    <div
      v-masonry="'doodlema'"
      transition-duration="1s"
      v-bind:item-selector="`.${$style.item}`"
      stagger="0.1s"
      class="w-full lg:w-4/5"
      :class="$style.masonrycontainer"
    >
      <div
        v-for="(item, index) in doodles"
        :key="index"
        v-masonry-tile
        class="w-full lg:w-1/3 p-4 lg:p-2"
        :class="$style.item"
      >
        <picture>
          <source :srcset="item + '.webp'" type="image/webp" />
          <img
            :class="$style.mydoodle"
            :src="item + '.jpeg'"
            :alt="'Doodle ' + (index + 1)"
            @load="imageLoaded"
          />
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
        '/doodle/scene3_2'
      ],
      imagesloaded: 0
    }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry('doodlema')
    }
  },
  methods: {
    imageLoaded() {
      this.imagesloaded += 1
      if (this.imagesloaded === this.doodles.length) {
        this.$redrawVueMasonry('doodlema')
      }
    }
  }
}
</script>

<style lang="postcss" scoped module>
.masonrycontainer {
  @apply flex justify-center items-center mx-auto;
}

.item {
  z-index: 1;
  min-height: 10px;
}

.item:hover {
  z-index: 99;
  transform: scale(1.15);
  transition: transform 0.25s ease-in-out;
}

.mydoodle {
  width: 100%;
  @apply shadow-2xl;
}
</style>
