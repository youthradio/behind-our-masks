<template>
  <footer class="bg-orange">
    <div class="mw8 center ph3">
      <div class="bb bw2 flex flex-column flex-row-ns items-center">
        <NewsletterSignup class="w-60-ns" :message="content.newsletter.text" />
        <div class="blue ml4-ns w-40-ns" v-html="content.text"></div>
      </div>
      <div
        class="flex flex flex-column flex-row-ns items-center justify-between justify-start-ns pv3"
      >
        <div
          class="flex w-80 w-60-ns justify-around justify-start-ns items-baseline"
        >
          <div class="ph2">
            <a
              href="https://yr.media"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img
                src="logos/yrlogo.svg"
                class="db img-fluid-h"
                loading="lazy"
                alt="YR Media Logo"
            /></a>
          </div>
          <!-- <div class="dn db-ns br bw1 self-stretch mv3"></div> -->
          <div class="ph2">
            <a
              href="https://wnyc.org"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img
                src="logos/wnyclogo.svg"
                class="db img-fluid-h"
                loading="lazy"
                alt="WNYC Logo"
            /></a>
          </div>
          <div class="ph2">
            <a
              href="https://www.wnyc.org/shows/rookies"
              target="_blank"
              class="db pointer link grow no-underline"
            >
              <img
                src="logos/radio-rookies.svg"
                class="db img-fluid-h"
                loading="lazy"
                alt="Radio Rookies"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import NewsletterSignup from '~/components/NewsletterSignup.vue'

export default {
  components: {
    NewsletterSignup,
  },
  props: {
    content: {
      type: Object,
      required: false,
      default: null,
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss"></style>
