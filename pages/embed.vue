<template>
  <header
    class="bg-orange z-2 flex flex-column menu-body min-vh-100 open"
    tabindex="0"
  >
    <div class="ph3 relative z-1 pv3 sticky top-0 bg-orange">
      <div class="flex flex-wrap justify-between">
        <h1 class="mt2 mb0 f1-ns f2 fw8 pr2-ns lh-0-9">BEHIND OUR MASKS</h1>
        <h3 class="mt3 mb1 f5 fw8 flex flex-column justify-around pl2-ns">
          <div class="ttu mw5">
            Uncovering pandemic life for California’s young adults
          </div>
        </h3>
      </div>
      <div class="bt b--black bw4 pb3"></div>
    </div>
    <ul class="ma0 pl0 ph3 pv3 list overflow-y-scroll flex-grow-2 max-h-100">
      <template v-for="article in latest">
        <li
          :key="`${article.slug}-2`"
          class="pa1 flex justify-start items-start"
        >
          <div>
            <svg
              width="18"
              class="db pr2 pt1"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="8.5" stroke="black" stroke-width="3" />
            </svg>
          </div>
          <a
            :href="`${canUrl}#${article.slug}`"
            target="_blank"
            rel="noreferrer"
            class="link db dim black pl1"
          >
            <h4
              class="mv0 lh-title f4 fw4 menu-item"
              v-html="article.title"
            ></h4
          ></a>
        </li>
      </template>
    </ul>
    <div class="ph3 flex flex-wrap justify-between items-center">
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
              class="mw3 w-100"
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
              class="mw3 w-100"
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
              class="mw3 w-100"
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
              class="mw3 w-100"
              loading="lazy"
              alt="YR Media"
          /></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ArticleData from '~/data/data.json'
import { url } from '~/post.config'
export default {
  components: {},
  asyncData(ctx) {
    const latest = ArticleData.main.latest.map((l) =>
      ArticleData.stories.find((e) => e.slug === l.slug)
    )

    return {
      canUrl: url,
      latest,
      articleData: ArticleData,
    }
  },
  data() {
    return {
      activeStory: '',
    }
  },
  mounted() {},
  methods: {
    articleFormatComponent(article) {
      if (article.format === 'print') {
        return 'article-text'
      } else if (article.format === 'video') {
        return 'article-video'
      } else if (article.format === 'audio') {
        return 'article-audio'
      }
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
[id]::before {
  content: '';
  display: block;
  height: 50px;
  margin-top: -50px;
  visibility: hidden;
}
.menu-body {
  transition: transform 0.5s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // transform: translateX(100%);
  max-width: 100%;
  max-height: 100vh;
}
</style>
