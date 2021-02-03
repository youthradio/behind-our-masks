<template>
  <div class="relative center">
    <Menu
      ref="menu"
      :active-story="activeStory"
      :articles="latest"
      :footer="articleData.main.footer"
    />
    <div class="grid-container relative">
      <div class="top-grid-area bg-orange grid-row-1 mb5"></div>
      <div class="middle-grid-area grid-row-1">
        <MainHeader :copy="articleData.main.header.copy" />
      </div>
      <div class="middle-grid-area">
        <div class="relative">
          <section class="center ph3 relative z-1">
            <template v-for="article in latest">
              <article :key="article.slug" class="pv4">
                <div class="flex flex-column flex-row-ns">
                  <div class="w-30-ns pr2-ns">
                    <div class="flex items-center">
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 16"
                        width="10"
                        class="di"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 0a5 5 0 00-5 5c0 2.8 4.6 10.4 4.8 10.7l.2.3.2-.3c.2-.3 4.8-8 4.8-10.6A5 5 0 005 0zm0 7a2 2 0 100-4 2 2 0 000 4z"
                          fill="#606060"
                        />
                      </svg>
                      <h4 class="di mid-gray lh-title ma1 f6 f5-ns fw5">
                        {{ article.location }}
                      </h4>
                    </div>
                    <h2
                      :id="article.slug"
                      ref="headline"
                      class="mv0 lh-solid f4 f2-ns"
                      v-html="article.title"
                    ></h2>

                    <h3 class="mid-gray lh-title mt-0-1-5 mb1 f5 f4-ns fw5">
                      {{ article.author }}
                    </h3>
                    <a
                      :href="article.org.link"
                      target="_blank"
                      rel="noreferrer"
                      class="dib pointer link dim no-underline"
                    >
                      <h4 class="mid-gray lh-title mt-0-1-5 mb1 f6 f5-ns fw5">
                        {{ article.org.name }}
                      </h4>
                    </a>
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
          <div class="flex justify-center pv4">
            <a
              href="#"
              class="pointer black f6 grow no-underline br-pill ph3 pv2 mb2 dib bg-orange center"
              title="Back to Top"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
      <div class="middle-grid-area grid-row-3">
        <Footer :content="articleData.main.footer" />
      </div>
      <div class="relative z-1 menu-bar">
        <div class="sticky top-0">
          <div class="dib">
            <ul class="ma0 pl0 ph1 pv3 list">
              <li class="mb4 flex justify-center items-center">
                <a
                  class="pointer db"
                  tabindex="0"
                  @click="$refs.menu.toggleMenu = true"
                >
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 22"
                    width="24"
                    class="db"
                  >
                    <path
                      stroke="#000"
                      stroke-width="4"
                      stroke-linecap="round"
                      d="M2 2h20M2 11h20M2 20h20"
                    />
                  </svg>
                </a>
              </li>
              <template v-for="article in latest">
                <li
                  :key="`${article.slug}-1`"
                  class="pa1 flex justify-center items-center"
                >
                  <a :href="`#${article.slug}`" class="link dim black pl1">
                    <svg
                      width="18"
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
                  </a>
                </li>
              </template>
            </ul>
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
