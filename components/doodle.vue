<template>
  <client-only>
    <div
      v-masonry="'doodlema'"
      transition-duration="1s"
      :item-selector="`.${$style.item}`"
      stagger="0.03s"
      class="w-full lg:w-4/5"
      :class="$style.masonrycontainer"
    >
      <div
        v-for="(item, index) in doodles"
        :key="index"
        v-masonry-tile
        class="w-full sm:w-1/2 lg:w-1/3 p-4 sm:p-1"
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

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ClientOnly from 'vue-client-only'

@Component({ components: { ClientOnly } })
export default class VueDoodle extends Vue {
  doodles = [
    '/doodle/louvre',
    '/doodle/sometroop',
    '/doodle/brainbird',
    '/doodle/greg01',
    '/doodle/looker1'
  ]

  imagesloaded = 0

  mounted() {
    if ('ontouchstart' in document.documentElement) {
      document.documentElement.classList.add(this.$style.touch)
    }
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry('doodlema')
    }
  }

  imageLoaded() {
    this.imagesloaded += 1
    if (this.imagesloaded % 3 === 0 || this.imagesloaded === this.doodles.length) {
      this.$redrawVueMasonry('doodlema')
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
  min-height: 200px;
}

.item:hover {
  z-index: 9;
}

.mydoodle {
  @apply shadow-2xl;
  transition: transform 0.1s ease-out;
}

.mydoodle:hover {
  transform: scale(1.15);
  transition: transform 0.25s ease-out;
}

.touch .mydoodle:hover {
  transform: none !important;
}
</style>
