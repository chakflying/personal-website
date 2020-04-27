<template>
  <div>
    <div :class="$style.bg">
      <svg
        :id="$style.bgsvg"
        viewBox="0 0 3970 1672"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          :id="$style.left"
          d="M1969 1639.5L2000.5 1669H3969V1H2000.5V43.5L1969 73V110.5L2000.5 136.5V179L1969 208.5V249.5L2000.5 279V321.5L1969 351V388.5L2000.5 414.5V457L1969 486.5V527.5L2000.5 557V599.5L1969 629V666.5L2000.5 692.5V735L1969 764.5V805.5L2000.5 835V877.5L1969 907V944.5L2000.5 970.5V1013L1969 1042.5V1083.5L2000.5 1113V1155.5L1969 1185V1222.5L2000.5 1248.5V1291L1969 1320.5V1361.5L2000.5 1391V1433.5L1969 1463V1500.5L2000.5 1526.5V1569L1969 1598.5V1639.5Z"
          fill="#1F1F1F"
          stroke="none"
        ></path>
        <path
          :id="$style.right"
          d="M1969.5 1639.5L2001 1669H1V1H2001V43.5L1969.5 73V110.5L2001 136.5V179L1969.5 208.5V249.5L2001 279V321.5L1969.5 351V388.5L2001 414.5V457L1969.5 486.5V527.5L2001 557V599.5L1969.5 629V666.5L2001 692.5V735L1969.5 764.5V805.5L2001 835V877.5L1969.5 907V944.5L2001 970.5V1013L1969.5 1042.5V1083.5L2001 1113V1155.5L1969.5 1185V1222.5L2001 1248.5V1291L1969.5 1320.5V1361.5L2001 1391V1433.5L1969.5 1463V1500.5L2001 1526.5V1569L1969.5 1598.5V1639.5Z"
          fill="#1F1F1F"
          stroke="none"
        ></path>
        <path
          :id="$style.gap"
          d="M2000.5 1669L1969 1639.5V1598.5L2000.5 1569V1526.5L1969 1500.5V1463L2000.5 1433.5V1391L1969 1361.5V1320.5L2000.5 1291V1248.5L1969 1222.5V1185L2000.5 1155.5V1113L1969 1083.5V1042.5L2000.5 1013V970.5L1969 944.5V907L2000.5 877.5V835L1969 805.5V764.5L2000.5 735V692.5L1969 666.5V629L2000.5 599.5V557L1969 527.5V486.5L2000.5 457V414.5L1969 388.5V351L2000.5 321.5V279L1969 249.5V208.5L2000.5 179V136.5L1969 110.5V73L2000.5 43.5V1"
          stroke="#1F1F1F"
          stroke-width="7"
          :filter="`url(#${this.$style.glow})`"
        ></path>
        <defs>
          <linearGradient
            :id="$style.paint0_linear"
            x1="1927.75"
            y1="0"
            x2="1927.75"
            y2="1668"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.135417" stop-color="#1F1F1F" />
            <stop offset="0.177083" stop-color="white" />
            <stop offset="0.34375" stop-color="white" />
            <stop offset="0.395833" stop-color="#1F1F1F" />
            <stop offset="0.552083" stop-color="#1F1F1F" stop-opacity="0.932651" />
            <stop offset="0.583333" stop-color="white" />
            <stop offset="0.84375" stop-color="white" stop-opacity="0.968916" />
            <stop offset="0.895833" stop-color="#1F1F1F" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <filter :id="$style.glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
            <feFlood
              :id="$style.glowflood"
              result="flood"
              flood-color="#ffffff"
              flood-opacity="0"
            ></feFlood>
            <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
            <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
            <feGaussianBlur in="dilated" result="blurred" stdDeviation="10"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blurred"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
    <div :class="$style.bg_noise"></div>
    <div :class="$style.mainheader">
      <div class="title">Hi, I'm Nelson!</div>
      <div class="flex justify-center mt-2">
        <picture>
          <source srcset="/webicon1.webp" type="image/webp" />
          <img :id="$style.headericon" src="/webicon1.png" alt="my icon" />
        </picture>
      </div>
      <div class="mt-2" :class="$style.subtitle">
        I like design, tech and exploring new things.
      </div>
      <hr :class="$style.divider" />
      <div class="mt-4 mb-5 flex w-auto justify-center">
        <ul class="flex">
          <li class="mx-6 md:mx-10">
            <button
              :class="{
                [$style.nav_link_active]: currentComponent == 'bio',
                [$style.nav_link]: currentComponent != 'bio'
              }"
              @click="swapComponent('bio')"
            >
              <fa :class="$style.navcon" :icon="['far', 'file-alt']"></fa>Bio
            </button>
          </li>
          <li class="mx-6 md:mx-10">
            <button
              :class="{
                [$style.nav_link_active]: currentComponent == 'doodle',
                [$style.nav_link]: currentComponent != 'doodle'
              }"
              @click="swapComponent('doodle')"
            >
              <fa :class="$style.navcon" :icon="['fas', 'pen']"></fa>Doodles
            </button>
          </li>
          <li class="mx-6 md:mx-10">
            <button
              :class="{
                [$style.nav_link_active]: currentComponent == 'photog',
                [$style.nav_link]: currentComponent != 'photog'
              }"
              @click="swapComponent('photog')"
            >
              <fa :class="$style.navcon" :icon="['fas', 'camera']"></fa>Photography
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div :id="$style.toReplace">
      <div :is="currentComponent"></div>
    </div>
    <div :class="$style.footer">
      <hr :class="$style.divider" />
      <div class="mt-3 mb-8 flex w-auto justify-center text-2xl">
        <a href="https://gitlab.com/chakflying/" :class="$style.social"
          ><fa class="mx-6" :icon="['fab', 'gitlab']"></fa
        ></a>
        <a href="https://github.com/chakflying/" :class="$style.social"
          ><fa class="mx-6" :icon="['fab', 'github']"></fa
        ></a>
        <a href="https://www.linkedin.com/in/nelsoncch/" :class="$style.social"
          ><fa class="mx-6" :icon="['fab', 'linkedin']"></fa
        ></a>
        <a href="mailto:chan.chak@northeastern.edu" :class="$style.social"
          ><fa class="mx-6" :icon="['fas', 'inbox']"></fa
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import photog from '~/components/photog.vue'
import doodle from '~/components/doodle.vue'
import bio from '~/components/bio.vue'

export default {
  components: {
    photog,
    doodle,
    bio
  },
  data() {
    return {
      currentComponent: 'bio'
    }
  },

  mounted() {
    this.$nextTick(function() {
      const tl = gsap.timeline()
      tl.set(`#${this.$style.left}`, { x: -80 })
        .set(`#${this.$style.right}`, { x: 80 })
        .set(`#${this.$style.gap}`, {
          strokeDasharray: [0, 105],
          strokeDashoffset: 52,
          stroke: `url(#${this.$style.paint0_linear})`
        })
        .set(`.${this.$style.bg_noise}`, { opacity: 0.05 })
        .set(`#${this.$style.glowflood}`, { floodOpacity: 0 })
        .add('crack')
        .to(
          `#${this.$style.gap}`,
          {
            duration: 1.5,
            strokeDasharray: [100, 0],
            strokeDashoffset: 52,
            strokeWidth: 8,
            stroke: 'white',
            ease:
              "rough ({ template:sine.out,strength:1,points:20,taper:'out',randomize:true,clamp:true})"
          },
          'crack'
        )
        .to(
          `#${this.$style.glowflood}`,
          {
            duration: 1.5,
            floodOpacity: 0.7,
            ease: 'slow (0.3, 0.7, false)'
          },
          'crack'
        )
        .to(
          `.${this.$style.bg_noise}`,
          { duration: 1.5, opacity: 1, ease: 'slow (0.3, 0.7, false)' },
          'crack'
        )
        .add('open')
        .to(`#${this.$style.gap}`, { duration: 0.01, strokeWidth: 0 }, 'open')
        .to(`#${this.$style.right}`, { duration: 2.15, x: -1350, ease: 'power2.out' }, 'open')
        .to(`#${this.$style.left}`, { duration: 2.15, x: 1350, ease: 'power2.out' }, 'open')
    })
  },
  methods: {
    swapComponent(comp) {
      this.currentComponent = comp
    }
  },
  head() {
    return {
      title: 'Nelson Chan'
    }
  }
}
</script>

<style lang="postcss" module>
.mainheader {
  @apply grid justify-center items-center text-center pt-12 mx-auto;
}

#headericon {
  height: 150px;
}

.navcon {
  @apply mr-1;
  padding-bottom: 2px;
  font-size: 0.9rem;
}

.nav_link {
  font-family: Nunito;
  @apply text-gray-400 font-bold;
}

.nav_link_active {
  font-family: Nunito;
  @apply text-gray-800 font-bold;
}

.nav_link:hover {
  @apply text-indigo-700;
}

#toReplace {
  min-height: 55vh;
}

.bg {
  margin: 0;
  width: 100%;
}

#bgsvg {
  position: fixed;
  transform-box: fill-box;
  transform-origin: left top;
  display: block;
  width: 100%;
  height: 101%;
  top: -1px;
  left: 0;
  overflow: hidden;
  pointer-events: none;
}

.bg_noise {
  position: absolute;
  width: 99vw;
  height: 99vh;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
  mix-blend-mode: lighten;
}

.bg_noise::after {
  content: '';
  position: fixed;
  overflow: hidden;
  width: 200vw;
  height: 200vh;
  left: -50%;
  top: -50%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA0LTI4VDA1OjUzOjI2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA0LTI4VDA1OjUzOjI2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yOFQwNTo1MzoyNiswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5YjUxOGE3ZC0yOTEwLTZkNDAtOGM2OS0yMDhkMmNmZmU3MDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjOGIwNDc4Ni0xNjkwLWYwNDItOWZmNy1iNmI4MDU3NzFiY2QiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODFmMzkyNC1mZTg3LTk1NGEtOTE3My0xNjQ4ZjcxYTA5YmMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA4MWYzOTI0LWZlODctOTU0YS05MTczLTE2NDhmNzFhMDliYyIgc3RFdnQ6d2hlbj0iMjAyMC0wNC0yOFQwNTo1MzoyNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YjUxOGE3ZC0yOTEwLTZkNDAtOGM2OS0yMDhkMmNmZmU3MDkiIHN0RXZ0OndoZW49IjIwMjAtMDQtMjhUMDU6NTM6MjYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7N5PzhAABrtklEQVR4Xh399XejW7YtCDrznAAzySxLlmVZzMzMzMzMbNkyMztM4WDGw5h5TmLdfO++27eq+90a1T36jdH/TW9X/ODhkPXx3muvNdec8+sw+ZyFdPPLLzsLW2mmkcnRGw9O1yahPVwCZxw9qPYb4dO95bZPk/BPUkZu3n2w221QWO/SZnNvLaX2ej999QqBGUvmoiQIWsgUbh4s/OEPX2ilAoNOMjyJcK+4rTqTNh4TSQVTvTAIHM3UOpFMtosr2D/f6OjocCUL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);
  background-size: 150px 150px;
  animation: grain 2s steps(3, start) infinite;
  opacity: 0.1;
  pointer-events: none;
}

@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(-3%, -4%);
  }
  40% {
    transform: translate(3%, -9%);
  }
  60% {
    transform: translate(12%, 3%);
  }
  80% {
    transform: translate(9%, 5%);
  }
}

.divider {
  border-top: 2px solid;
  @apply border-gray-400 mt-5;
}

.title {
  font-family: Nunito;
  @apply text-2xl font-light w-full;
}

.subtitle {
  font-family: Nunito;
  @apply text-base font-normal text-gray-800 w-full;
}

.links {
  padding-top: 15px;
}

.social {
  @apply text-indigo-200;
}

.social:hover {
  @apply text-gray-700;
}

.social:active {
  @apply text-indigo-500;
}

body {
  background: white;
  max-width: 100vw;
}

#gap {
  transform-box: fill-box;
  transform-origin: center;
  stroke-dasharray: 0, 105;
  stroke-dashoffset: 52;
}

#left {
  transform-box: fill-box;
  transform-origin: left;
  height: 100vh;
}

#right {
  transform-box: fill-box;
  transform-origin: right;
  height: 100vh;
}

#glow {
  pointer-events: none;
}

#glowflood {
  pointer-events: none;
}

#paint0_linear {
  pointer-events: none;
}

.footer {
  @apply grid justify-center items-center text-center pt-12 mx-auto;
}
</style>
