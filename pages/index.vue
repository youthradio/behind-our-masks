<template>
  <div class="relative mw9 center">
    <div class="flex relative">
      <div class="flex-grow-1">
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
          <div class="bg-washed-red relative z--1">
            <blockquote
              class="flex flex-column flex-row-ns items-end f3 f2-ns center mw8 ph3"
            >
              <p class="blue serif fw9 lh-copy lh-title-ns w-80-ns mv3 mv5-ns">
                {{ randomQuote.quote }}
              </p>
              <cite class="blue sans f6 fs-normal w-20-ns mv3 mv5-ns">
                <a
                  :title="`${randomQuote.author} Bio`"
                  class="pointer link db blue dim black"
                  @click.prevent="toggleBioModalSlug(randomQuote.authorslug)"
                >
                  <div class="cite-symbol">
                    {{ randomQuote.author }}
                  </div>
                  {{ randomQuote.location }}
                </a>
              </cite>
            </blockquote>
          </div>
          <section class="mw8 center relative z-1 pt4">
            <h1 id="contributors" class="blue f3 lh-title ttu ph3 relative">
              Contributors
            </h1>
            <div ref="bios" class="flex flex-wrap ph2 relative">
              <template v-for="bio in biosData">
                <div :key="bio.authorslug" class="w-50 w-20-ns relative">
                  <div class="ph2 ph2-ns">
                    <a
                      class="link pointer db dim black"
                      :title="`${bio.name}\n${bio.location}`"
                      @click.prevent="toggleBioModal(bio)"
                    >
                      <div class="bb bw2 pb3 b--dark-red">
                        <div class="aspect-ratio aspect-ratio--1x1">
                          <img
                            :data-src="bio.image"
                            src="blank.jpg"
                            class="aspect-ratio--object db img-fluid lazyload"
                            loading="lazy"
                            alt="Photo of a dimly lit room with a computer interface terminal."
                          />
                        </div>
                      </div>
                      <h3 class="blue serif mt3 mb0 lh-title f5 f4-ns">
                        {{ bio.name }}
                      </h3>
                      <h4 class="normal lh-title mt0 f6 f5-ns">
                        {{ bio.location }}
                      </h4>
                    </a>
                  </div>
                </div>
              </template>
            </div>
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
      <div class="flex-grow-1 bg-orange relative z-1">
        <div class="sticky top-0">
          <div class="menu pointer">
            <div class="dib bg-orange sticky top-0" @click="toggleMenu = true">
              <ul class="ma0 pl0 ph2 pv3 list">
                <li class="mb4 flex justify-center items-center">
                  <svg
                    fill="none"
                    class="db"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 22"
                    height="15"
                  >
                    <path
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
                      width="15"
                      height="15"
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
            <div
              :class="[
                'pa3 bg-orange z-2 menu-body',
                toggleMenu ? 'open' : 'close',
              ]"
              @click="toggleMenu = false"
            >
              <div class="fr">
                <svg
                  fill="none"
                  class="db pa2"
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
              <ul class="ma0 pl0 ph3 list">
                <template v-for="article in latest">
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
          </div>
          <ShareButtons title="Test" description="test" class="mt4 ph3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleData from '~/data/data.json'
import MainHeader from '~/components/MainHeader.vue'
import Footer from '~/components/Footer.vue'
import ShareButtons from '~/components/ShareButtons.vue'

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
    ShareButtons,
  },
  asyncData(ctx) {
    const l = ArticleData.main.quotes.length

    const latest = ArticleData.main.latest
      .slice(1, 13)
      .map((l) => ArticleData.stories.find((e) => e.slug === l.slug))
    const randomQuote = ArticleData.main.quotes[~~(Math.random() * l)]
    const featured = ArticleData.main.featured.map((l) =>
      ArticleData.stories.find((e) => e.slug === l.slug)
    )
    // bios data sorted by last name
    const bios = ArticleData.bios.filter((e) => !e.hide)
    const biosData = bios.sort((a, b) =>
      a.name.split(' ')[1] > b.name.split(' ')[1] ? 1 : -1
    )

    return {
      featured,
      randomQuote,
      latest,
      biosData,
      articleData: ArticleData,
    }
  },
  data() {
    return {
      activeStory: -1,
      toggleMenu: false,
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeStory = entry.target.id
            history.pushState(
              {},
              null,
              '#' + encodeURIComponent(entry.target.id)
            )
          }
        })
      },
      { threshold: 1.0 }
    )
    this.$refs.headline.forEach((e) => observer.observe(e))
  },
  methods: {
    articleFormatComponent(article) {
      if (article.format === 'text') {
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

.menu {
  .menu-body {
    transition: transform 0.5s ease-in-out;
    position: fixed;
    top: 0px;
    right: 0;
    // transform: translateX(100%);
    max-width: 100%;
  }
  .close {
    transform: translateX(100%);
  }
  .open {
    transform: translateX(0);
  }

  &:hover {
    .menu-item {
      visibility: visible;
    }
    .menu-body {
      // transform: translateX(0);
    }
  }
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
