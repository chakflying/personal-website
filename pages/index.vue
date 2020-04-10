<template>
  <div>
    <div class="bg">
      <svg
        id="bgsvg"
        viewBox="0 0 3945 1671"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          id="left"
          d="M1948.5 1639L1980 1668.5H3944V0.5H1980V43L1948.5 72.5V110L1980 136V178.5L1948.5 208V249L1980 278.5V321L1948.5 350.5V388L1980 414V456.5L1948.5 486V527L1980 556.5V599L1948.5 628.5V666L1980 692V734.5L1948.5 764V805L1980 834.5V877L1948.5 906.5V944L1980 970V1012.5L1948.5 1042V1083L1980 1112.5V1155L1948.5 1184.5V1222L1980 1248V1290.5L1948.5 1320V1361L1980 1390.5V1433L1948.5 1462.5V1500L1980 1526V1568.5L1948.5 1598V1639Z"
          fill="#1F1F1F"
          stroke="none"
        />
        <path
          id="right"
          d="M1880.5 1639L1912 1668.5H1V0.5H1912V43L1880.5 72.5V110L1912 136V178.5L1880.5 208V249L1912 278.5V321L1880.5 350.5V388L1912 414V456.5L1880.5 486V527L1912 556.5V599L1880.5 628.5V666L1912 692V734.5L1880.5 764V805L1912 834.5V877L1880.5 906.5V944L1912 970V1012.5L1880.5 1042V1083L1912 1112.5V1155L1880.5 1184.5V1222L1912 1248V1290.5L1880.5 1320V1361L1912 1390.5V1433L1880.5 1462.5V1500L1912 1526V1568.5L1880.5 1598V1639Z"
          fill="#1F1F1F"
          stroke="none"
        />
        <path
          id="line"
          d="M1943.5 1668L1912 1638.5V1597.5L1943.5 1568V1525.5L1912 1499.5V1462L1943.5 1432.5V1390L1912 1360.5V1319.5L1943.5 1290V1247.5L1912 1221.5V1184L1943.5 1154.5V1112L1912 1082.5V1041.5L1943.5 1012V969.5L1912 943.5V906L1943.5 876.5V834L1912 804.5V763.5L1943.5 734V691.5L1912 665.5V628L1943.5 598.5V556L1912 526.5V485.5L1943.5 456V413.5L1912 387.5V350L1943.5 320.5V278L1912 248.5V207.5L1943.5 178V135.5L1912 109.5V72L1943.5 42.5V0"
          stroke="url(#paint0_linear)"
          stroke-width="7"
          filter="url(#glow)"
        >
          <animate
            attributeName="stroke-width"
            values="7; 0"
            begin="1.85s"
            dur="0.01s"
            fill="freeze"
          />
        </path>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="1927.75"
            y1="0"
            x2="1927.75"
            y2="1668"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.34375" stop-color="white" />
            <stop offset="0.352083" stop-color="#1F1F1F">
              <animate
                attributeName="stop-color"
                values="#1F1F1F; white"
                begin="0.5s"
                dur="1s"
                fill="freeze"
              />
            </stop>
            <stop offset="0.583333" stop-color="#1F1F1F">
              <animate
                attributeName="stop-color"
                values="#1F1F1F; white"
                begin="0.5s"
                dur="1s"
                fill="freeze"
              />
            </stop>
            <stop offset="0.64375" stop-color="white" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <filter id="glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
            <feFlood result="flood" flood-color="#ffffff" flood-opacity="0">
              <animate
                attributeName="flood-opacity"
                values="0; 1"
                begin="0.5s"
                dur="1.5s"
                fill="freeze"
              />
            </feFlood>
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
    <div class="bg-noise"></div>
    <div class="mainheader">
      <div class="title">Hi, I'm Nelson!</div>
      <div class="flex justify-center mt-2">
        <img id="headericon" src="/webicon1.webp" alt="my icon" />
      </div>
      <div class="mt-2 subtitle">
        I like design, tech and exploring new things.
      </div>
      <div class="mt-4 flex w-auto justify-center">
        <a href="https://gitlab.com/chakflying/" class="social"
          ><fa class="mx-4" :icon="['fab', 'gitlab']" size="lg"></fa
        ></a>
        <a href="https://github.ccs.neu.edu/ckfy/" class="social"
          ><fa class="mx-4" :icon="['fab', 'github']" size="lg"></fa
        ></a>
        <a href="https://www.linkedin.com/in/nelsoncch/" class="social"
          ><fa class="mx-4" :icon="['fab', 'linkedin']" size="lg"></fa
        ></a>
        <a href="mailto:chan.chak@northeastern.edu" class="social"
          ><fa class="mx-4" :icon="['fas', 'inbox']" size="lg"></fa
        ></a>
      </div>
      <div class="mt-4 mb-5 flex w-auto justify-center">
        <ul class="flex">
          <li class="mx-10">
            <a
              href="#"
              v-bind:class="{
                'nav-link-active': currentComponent == 'bio',
                'nav-link': currentComponent != 'bio'
              }"
              @click="swapComponent('bio')"
              >Bio</a
            >
          </li>
          <li class="mx-10">
            <a
              href="#"
              v-bind:class="{
                'nav-link-active': currentComponent == 'doodle',
                'nav-link': currentComponent != 'doodle'
              }"
              @click="swapComponent('doodle')"
              >Doodles</a
            >
          </li>
          <li class="mx-10">
            <a
              href="#"
              v-bind:class="{
                'nav-link-active': currentComponent == 'photog',
                'nav-link': currentComponent != 'photog'
              }"
              @click="swapComponent('photog')"
              >Photography</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div id="toReplace">
      <div :is="currentComponent"></div>
    </div>
  </div>
</template>

<script>
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

<style lang="postcss">
.mainheader {
  @apply justify-center items-center text-center pt-12 mx-auto;
}

#headericon {
  height: 150px;
}

.nav-link {
  font-family: Nunito;
  @apply text-gray-400 font-bold;
}

.nav-link-active {
  font-family: Nunito;
  @apply text-gray-800 font-bold;
}

.nav-link:hover {
  @apply text-indigo-700;
}

.bg {
  margin: 0;
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bg-noise {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  animation: fadeoutnoise 3.5s forwards;
}

.bg-noise::after {
  content: '';
  position: absolute;
  width: 200vw;
  height: 200vh;
  left: -50%;
  top: -50%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA0LTEwVDE2OjU1OjMxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA0LTEwVDE2OjU1OjMxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0xMFQxNjo1NTozMSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4ODk0MzlhYy1iYTA1LTFmNDUtOGM4OS1lNjFlYmI0ODI0MzciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYmU5MmJhMS03NGM3LWRhNDAtODFh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);
  animation: grain 1.5s steps(6) infinite;
}

@keyframes fadeoutnoise {
  0% {
    opacity: 1;
    z-index: 2;
  }
  20% {
    opacity: 1;
  }
  99% {
    z-index: 2;
  }
  100% {
    opacity: 0;
    z-index: -100;
  }
}

@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  30% {
    transform: translate(3%, -15%);
  }
  50% {
    transform: translate(12%, 9%);
  }
  70% {
    transform: translate(9%, 4%);
  }
  90% {
    transform: translate(-1%, 7%);
  }
}

#bgsvg {
  position: fixed;
  transform-box: fill-box;
  transform-origin: center;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  animation: sendtoback 1ms 2.5s forwards;
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
}

#line {
  transform-box: fill-box;
  transform-origin: center;
  /* transform:; */
  stroke: #1f1f1f;
  animation: dash 1.5s 0.5s ease-in forwards;
}

#left {
  transform-box: fill-box;
  transform-origin: left;
  transform: translateX(-42px);
  height: 100vh;
  animation: left 1s 2.15s forwards;
}

#right {
  transform-box: fill-box;
  transform-origin: right;
  transform: translateX(42px);
  height: 100vh;
  animation: right 1s 2.15s forwards;
}

@keyframes sendtoback {
  to {
    z-index: -100;
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 0, 105;
    stroke-dashoffset: 52;
    stroke: url(#paint0_linear);
  }

  95% {
    z-index: 1;
  }

  100% {
    stroke-dasharray: 100, 0;
    stroke-dashoffset: 52;
    stroke: url(#paint0_linear);
    z-index: -100;
  }
}

@keyframes left {
  0% {
    transform: translateX(-35px);
  }
  100% {
    transform: translateX(70%);
  }
}

@keyframes right {
  0% {
    transform: translateX(35px);
  }
  100% {
    transform: translateX(-70%);
  }
}
</style>
