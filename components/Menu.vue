<template>
  <header
    :class="[
      'grid-container bg-orange z-2 menu-body',
      toggleMenu ? 'open' : 'close',
    ]"
    @click="toggleMenu = false"
  >
    <div class="w-100 mw8 center">
      <div class="ph3 relative z-1 pv3 sticky top-0 bg-orange">
        <div class="flex flex-wrap justify-between lh-title">
          <h1 class="mt2 mb0 f1 fw8 nowrap-ns pr2-ns">BEHIND OUR MASK</h1>
          <h3 class="mt3 mb1 f6 fw8 flex flex-column justify-around pl2-ns">
            <div class="ttu mw5">
              The reality of COVID-19: Uncovering pandemic life for California’s
              young adults
            </div>
          </h3>
        </div>
        <div class="bt b--black bw4 mt3 pb3"></div>
      </div>
      <ul class="ma0 pl0 ph3 pv3 list">
        <template v-for="article in articles">
          <li
            :key="`${article.slug}-2`"
            class="pa1 flex justify-start items-start"
          >
            <div>
              <svg
                width="15"
                height="15"
                class="db pr2 pt1"
                viewBox="0 0 20 20"
                :fill="activeStory === article.slug ? 'black' : 'none'"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8.5"
                  stroke="black"
                  stroke-width="3"
                />
              </svg>
            </div>
            <a :href="`#${article.slug}`" class="link db dim black pl1">
              <h4
                class="mv0 lh-title f6 f5-ns menu-item"
                v-html="article.title"
              ></h4
            ></a>
          </li>
        </template>
      </ul>
    </div>
    <div>
      <svg
        fill="none"
        class="db pa2 sticky top-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 22"
        height="15"
      >
        <path
          d="M1 17a3 3 0 104 4l-4-4zm10-6l2 2 2-2-2-2-2 2zM5 1a3 3 0 10-4 4l4-4zm0 20l8-8-4-4-8 8 4 4zm8-12L5 1 1 5l8 8 4-4z"
          fill="#000"
        />
      </svg>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    activeStory: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      toggleMenu: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.menu-body {
  transition: transform 0.5s ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  // transform: translateX(100%);
  max-width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
}
.close {
  transform: translateY(-100%);
}
.open {
  transform: translateY(0);
}

@keyframes fade_in_show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(100%);
  }
}
</style>
