<template>
  <header class="relative min-vh-100 bg-washed-red">
    <div
      ref="flourishes"
      class="absolute flex flex-column justify-around z-0 top-0 left-0 right-0 bottom-0 pointer-events-none"
    />
    <nav class="fixed w-100 top-0 serif db pv2 f6 f4-ns bg-blue b z-5">
      <div class="flex justify-around justify-center-ns">
        <nuxt-link
          class="link dib mh4-ns pv1 underline-hover washed-red"
          title="About"
          :to="{ path: '/', hash: '#about' }"
        >
          About this Project
        </nuxt-link>
        <nuxt-link
          class="link dib mh4-ns pv1 underline-hover washed-red"
          title="Latest"
          :to="{ path: '/', hash: '#stories' }"
        >
          Stories
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#contributors' }"
          class="link dib mh4-ns pv1 underline-hover washed-red"
          title="Contributors"
        >
          Contributors
        </nuxt-link>
      </div>
    </nav>
    <div
      class="relative min-vh-100 layers ph3 ph0-ns mt4 pb4-ns flex flex-column justify-center"
    >
      <img
        alt=""
        src="logos/youngamerica.svg"
        class="db dn-ns w-50 mt3 nb4 ml3 z-2"
      />
      <div
        class="grid-container grid-container-ns grid-container-l h-100 self-center"
      >
        <div class="grid-col-start-2 dn db-ns">
          <img
            alt=""
            src="images/grid/1.jpg"
            class="gridimg db mw-none w-100 z-0"
          />
        </div>
        <div class="">
          <img
            alt=""
            src="images/grid/2.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="">
          <img
            alt=""
            src="images/grid/3.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="">
          <img
            alt=""
            src="images/grid/4.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="dn db-ns grid-col-1-4">
          <div class="flex justify-end items-end h-100 pl4">
            <img alt="" src="logos/ygamerica.svg" class="db h-100" />
          </div>
        </div>
        <!-- <div class="dn db-ns"></div> -->
        <div class="">
          <img
            alt=""
            src="images/grid/5.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="">
          <img
            alt=""
            src="images/grid/6.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="grid-col-start-1 dn db-ns">
          <div class="">
            <p class="sans-serif f7 lh-title ttu tr">BROUGHT<br />TO YOU BY</p>
            <a
              href="https://yr.media"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img
                src="logos/yrlogo.svg"
                class="db ml-auto pa1 pr0 img-fluid-h"
                alt="YR Media Logo"
              />
            </a>
            <a
              href="https://wnyc.org"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img
                src="logos/wnyclogo.svg"
                class="db ml-auto pa1 pr0 img-fluid-h"
                alt="WNYC Logo"
              />
            </a>
            <a
              href="https://www.wnyc.org/shows/rookies"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img
                src="logos/radio-rookies.svg"
                class="db ml-auto pa1 pr0 img-fluid-h"
                alt="Radio Rookies"
              />
            </a>
          </div>
        </div>
        <div class="grid-col-start-2 dn db-ns">
          <img
            alt=""
            src="images/grid/7.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="relative">
          <img
            alt=""
            src="images/grid/8.jpg"
            class="gridimg db mw-none w-100"
          />
          <img
            alt=""
            src="logos/18to29stroke.svg"
            class="absolute mw-none bottom-1 dn db-ns"
            style="width: 220%"
          />
        </div>
        <div class="">
          <img
            alt=""
            src="images/grid/9.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="dn db-ns grid-col-5-7">
          <div class="flex h-100 pr5">
            <img alt="" src="logos/speaksup.svg" class="db h-100" />
          </div>
        </div>
        <div class="grid-col-start-2">
          <img
            alt=""
            src="images/grid/10.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>

        <div class="">
          <img
            alt=""
            src="images/grid/11.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="">
          <img
            alt=""
            src="images/grid/12.jpg"
            class="gridimg db mw-none w-100 db-ns"
          />
        </div>
        <div class="db dn-ns">
          <img
            alt=""
            src="images/grid/7.jpg"
            class="gridimg db mw-none w-100 db-ns"
          />
        </div>
        <div class="db dn-ns">
          <img
            alt=""
            src="images/grid/1.jpg"
            class="gridimg db mw-none w-100 db-ns"
          />
        </div>
        <div class="measure dn db-ns grid-col-5-7 grid-col-5-6-lg">
          <p class="sans-serif lh-title ma0 b" v-html="copy"></p>
        </div>
      </div>
      <div class="db dn-ns mt3 ph3">
        <p class="sans-serif lh-title ttu tc f7">BROUGHT TO YOU BY</p>
        <div
          class="flex w-80 center justify-around justify-start-ns items-baseline"
        >
          <div class="ph2">
            <a
              href="https://yr.media"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img
                src="logos/yrlogo.svg"
                class="db h-100"
                alt="YR Media Logo"
              />
            </a>
          </div>
          <!-- <div class="dn db-ns br bw1 self-stretch mv3"></div> -->
          <div class="ph2">
            <a
              href="https://www.wnyc.org"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img src="logos/wnyclogo.svg" class="db h-100" alt="WNYC Logo" />
            </a>
          </div>
          <div class="ph2">
            <a
              href="https://www.wnyc.org/shows/rookies"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img
                src="logos/radio-rookies.svg"
                class="db h-100"
                alt="Radio Rookies"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="flex ml-auto ph2 db dn-ns">
        <p class="sans-serif lh-title b" v-html="copy"></p>
      </div>
    </div>
  </header>
</template>
<script>
import mixinMethods from '~/utils/mixinMethods'
export default {
  mixins: [mixinMethods],
  props: {
    copy: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    if (window.innerWidth > 1300) {
      this.randomIcons(this.$refs.flourishes, 3, true, true)
    }
  },
}
</script>

<style lang="scss"></style>
