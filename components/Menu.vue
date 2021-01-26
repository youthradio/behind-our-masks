<template>
  <header
    :class="[
      'grid-container bg-orange z-2 menu-body min-vh-100',
      toggleMenu ? 'open' : 'close',
    ]"
    @click="toggleMenu = false"
  >
    <div class="middle-grid-area">
      <div class="center">
        <div class="ph3 relative z-1 pv3 sticky top-0 bg-orange">
          <div class="flex flex-wrap justify-between">
            <h1 class="mt2 mb0 f-4-5-ns fw8 nowrap-ns pr2-ns lh-0-9">
              BEHIND OUR MASKS
            </h1>
            <h3 class="mt3 mb1 f5 fw8 flex flex-column justify-around pl2-ns">
              <div class="ttu mw5">
                Uncovering pandemic life for California’s young adults
              </div>
            </h3>
          </div>
          <div class="bt b--black bw4 pb3"></div>
        </div>
        <ul class="ma0 pl0 ph3 pv3 list">
          <template v-for="article in articles">
            <li
              :key="`${article.slug}-2`"
              class="pa1 flex justify-start items-start"
            >
              <div>
                <svg
                  width="18"
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
                  class="mv0 lh-title f4 fw4 menu-item"
                  v-html="article.title"
                ></h4
              ></a>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="relative z-1 menu-bar">
      <div class="sticky top-0 ph1 pv3">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="18"
          class="db pa2 sticky top-0"
        >
          <path
            d="M19 3a2 2 0 00-2-2l2 2zm-9 7L9 9l-1 1 1 1 1-1zm7 9a2 2 0 002-2l-2 2zm0-18L9 9l2 2 8-8-2-2zM9 11l8 8 2-2-8-8-2 2z"
            fill="#000"
          />
          <path
            d="M1 17a2 2 0 002 2l-2-2zm9-7l1 1 1-1-1-1-1 1zM3 1a1 1 0 10-2 2l2-2zm0 18l8-8-2-2-8 8 2 2zm8-10L3 1 1 3l8 8 2-2z"
            fill="#000"
          />
        </svg>
      </div>
    </div>
    <div
      class="ph3 middle-grid-area dn flex-ns flex-wrap grid-row-3 self-end justify-between items-center"
    >
      <div class="measure" v-html="footer.text"></div>

      <div class="flex justify-around mv3">
        <div class="ph2">
          <a
            href="https://boyleheightsbeat.com/"
            target="_blank"
            rel="noreferrer"
            class="db pointer link grow no-underline"
          >
            <img
              src="n_images/bhb.png"
              class="mw3"
              loading="lazy"
              alt="Boyle Heights Beats"
          /></a>
        </div>
        <!-- <div class="dn db-ns br bw1 self-stretch mv3"></div> -->
        <div class="ph2">
          <a
            href="https://coachellaunincorporated.org/"
            target="_blank"
            rel="noreferrer"
            class="db pointer link grow no-underline"
          >
            <img
              src="n_images/cuninc.png"
              class="mw3"
              loading="lazy"
              alt="Coachella Unincorporated"
          /></a>
        </div>
        <div class="ph2">
          <a
            href="https://theknowfresno.org/"
            target="_blank"
            rel="noreferrer"
            class="db pointer link grow no-underline"
          >
            <img
              src="n_images/thek.png"
              class="mw3"
              loading="lazy"
              alt="The Know Youth Media"
          /></a>
        </div>
        <div class="ph2">
          <a
            href="https://yr.media"
            target="_blank"
            rel="noreferrer"
            class="db pointer link grow no-underline"
          >
            <img
              src="n_images/yrmedia.png"
              class="mw3"
              loading="lazy"
              alt="YR Media"
          /></a>
        </div>
      </div>
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
    footer: {
      type: Object,
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
  left: 0;
  right: 0;
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
