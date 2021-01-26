<template>
  <footer>
    <div class="mw8 center ph3">
      <div class="bb bw2 flex flex-column flex-row-ns items-center">
        <NewsletterSignup class="w-60-ns" :message="content.newsletter.text" />
      </div>

      <div class="flex flex-wrap">
        <div class="measure" v-html="content.text"></div>

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
