<template>
  <client-only>
    <div
      v-masonry="'photogma'"
      transition-duration="1s"
      :item-selector="`.${$style.item}`"
      stagger="0.03s"
      class="w-full lg:w-4/5"
      :class="$style.masonrycontainer"
    >
      <div
        v-for="(item, index) in photos"
        :key="index"
        v-masonry-tile
        class="w-full sm:w-1/2 lg:w-1/3 p-4 sm:p-1"
        :class="$style.item"
      >
        <picture>
          <source :srcset="item + '.webp'" type="image/webp" />
          <img
            :class="$style.myphoto"
            :src="item + '.jpeg'"
            :alt="'Photo ' + (index + 1)"
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
export default class VuePhotog extends Vue {
  photos = [
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

  imagesloaded = 0

  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry('photogma')
    }
  }

  imageLoaded() {
    this.imagesloaded += 1
    if (this.imagesloaded % 3 === 0 || this.imagesloaded === this.photos.length) {
      this.$redrawVueMasonry('photogma')
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

.myphoto {
  @apply shadow-2xl;
  transition: transform 0.1s ease-out;
}

.myphoto:hover {
  transform: scale(1.15);
  transition: transform 0.25s ease-out;
}
</style>
