<template>
  <div class="mx-auto w-4/5 md:w-1/2 lg:w-1/3 p-2 mt-2 md:mt-6">
    <ul class="lg:ml-10" :class="$style.biolist">
      <li>
        I live in Hong Kong, the city I will always love. &nbsp;<img
          class="inline w-4"
          src="/flag-for-hong-kong.png"
          alt="HK"
        />
      </li>
      <li>
        I studied Computer Science in The Chinese University of Hong Kong. The learning never ends,
        4 years in the amazing campus goes by in a heartbeat, and everywhere I go reminds me of
        memories that would last a lifetime.
      </li>
      <li>
        I studied in Northeastern University for a semester as an exchange program. Boston is a city
        full of history and culture, and I will definitely miss the freezing weather.
      </li>
      <li>
        I am currently working in <a href="https://aecom.com/hk/">AECOM</a> as a programmer
        involving web development and GIS applications.
      </li>
      <li>
        I love movies and the art of storytelling. We only have one lifetime, but through movies we
        get to experience numerous others.
      </li>
      <li>
        Photography is my best friend during my travels. Capturing genuine moments as I experience
        them gives me great satisfaction.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="postcss" scoped module>
.biolist {
  @apply text-gray-700 list-disc;
  text-align: justify;
  text-justify: inter-word;
}
.biolist > li {
  @apply mb-6;
}
</style>
