<template>
  <div class="relative mw9 center bg-white">
    <Menu ref="menu" :active-story="activeStory" :articles="latest" />
    <div class="grid-container relative">
      <div>
        <MainHeader :copy="articleData.main.header.copy" />
        <div class="relative">
          <section class="mw8 center ph3 relative z-1">
            <template v-for="article in latest">
              <article :key="article.slug" class="pb4">
                <div class="flex flex-column flex-row-ns">
                  <div class="w-30-ns pr2-ns">
                    <h2
                      :id="article.slug"
                      ref="headline"
                      class="mv0 lh-title f4 f2-ns"
                      v-html="article.title"
                    ></h2>

                    <h3 class="black lh-title mv1 f5 f4-ns">
                      {{ article.author }}
                    </h3>
                    <ShareButtons
                      :title="article.title"
                      :description="article.summary"
                      :hash="`#${article.slug}`"
                      tweet-message=" @itsYRmedia etc "
                    />
                  </div>
                  <div class="w-70-ns pl2-ns">
                    <main class="center">
                      <component
                        :is="articleFormatComponent(article)"
                        v-bind="{ article: article }"
                      />
                    </main>
                  </div>
                </div>
              </article>
            </template>
          </section>
          <!-- <section class="mw8 center ph3 mt4 mt5-ns relative z-1">
            <h2 id="about" class="blue mt0 lh-title ttu">About</h2>
            <div
              class="mw9 center lh-copy f5 f4-ns"
              v-html="articleData.main.about.text"
            ></div>
            <div
              class="mw9 center lh-copy f7 i"
              v-html="articleData.main.about.credits"
            ></div>
          </section> -->
          <div class="flex justify-center pv4">
            <a
              href="#"
              class="pointer f6 grow no-underline br-pill ph3 pv2 mb2 dib washed-red bg-blue center"
              title="Back to Top"
            >
              Back to Top
            </a>
          </div>
        </div>
        <Footer :content="articleData.main.footer" />
      </div>
      <div class="bg-orange relative z-1">
        <div class="sticky top-0">
          <div class="pointer">
            <div
              class="dib bg-orange sticky top-0"
              @click="$refs.menu.toggleMenu = true"
            >
              <ul class="ma0 pl0 ph1 pv3 list">
                <li class="mb4 flex justify-center items-center">
                  <svg
                    fill="none"
                    class="db"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 22"
                    height="20"
                  >
                    <path
                      transform-origin="center center"
                      d="M15 5a3 3 0 10-4-4l4 4zM5 11L3 9l-2 2 2 2 2-2zm6 10a3 3 0 104-4l-4 4zm0-20L3 9l4 4 8-8-4-4zM3 13l8 8 4-4-8-8-4 4z"
                      fill="#000"
                    />
                    <!-- <path
                      d="M1 17a3 3 0 104 4l-4-4zm10-6l2 2 2-2-2-2-2 2zM5 1a3 3 0 10-4 4l4-4zm0 20l8-8-4-4-8 8 4 4zm8-12L5 1 1 5l8 8 4-4z"
                      fill="#000"
                    /> -->
                  </svg>
                </li>
                <template v-for="article in latest">
                  <li
                    :key="`${article.slug}-1`"
                    class="pa1 flex justify-center items-center"
                  >
                    <svg
                      width="20"
                      height="20"
                      class="db"
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
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleData from '~/data/data.json'
import MainHeader from '~/components/MainHeader.vue'
import Footer from '~/components/Footer.vue'
import ShareButtons from '~/components_local/ShareButtons.vue'
import Menu from '~/components/Menu.vue'

import ArticleText from '~/components/ArticleText.vue'
import ArticleVideo from '~/components/ArticleVideo.vue'
import ArticleAudio from '~/components/ArticleAudio.vue'

export default {
  components: {
    MainHeader,
    ArticleText,
    ArticleVideo,
    ArticleAudio,
    Footer,
    Menu,
    ShareButtons,
  },
  asyncData(ctx) {
    const latest = ArticleData.main.latest.map((l) =>
      ArticleData.stories.find((e) => e.slug === l.slug)
    )

    return {
      latest,
      articleData: ArticleData,
    }
  },
  data() {
    return {
      activeStory: '',
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeStory = entry.target.id
            // history.pushState(
            //   {},
            //   null,
            //   '#' + encodeURIComponent(entry.target.id)
            // )
          }
        }
      },
      { threshold: 1.0 }
    )
    this.$refs.headline.forEach((e) => observer.observe(e))
  },
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
</style>
