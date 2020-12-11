<template>
  <div>
    <ArticleHeader :copy="articleData.main.header.copy" />
    <div class="relative">
      <div
        ref="flourishes"
        class="absolute flex flex-column justify-around z-0 top-0 left-0 right-0 bottom-0 pointer-events-none"
      />
      <main class="center mw8 ph3 relative z-1">
        <component
          :is="articleFormatComponent"
          v-bind="{ article: article }"
          class="pt4"
        />

        <BioContainer
          v-if="authordata"
          class="pt4 w-60-ns center relative z-1"
          mode="small"
          :author="authordata"
        />

        <h3 id="readmore" class="blue bb bw2 ttu mt5 relative z-1">
          Read More
        </h3>
      </main>
    </div>

    <div class="center mw8 ph3 relative z-1">
      <HorizontalContainer
        :articles="randomArticles"
        @toggleBioModalSlug="(authorslug) => toggleBioModalSlug(authorslug)"
      />
    </div>
    <div class="flex justify-center pv3">
      <nuxt-link
        title="Home"
        :to="{ path: '/' }"
        class="f6 grow no-underline br-pill ph3 pv2 mb2 dib washed-red bg-blue center"
      >
        Back to Main Page
      </nuxt-link>
    </div>
    <Modal
      v-if="modelBioData"
      class="z-10"
      :authordata="modelBioData"
      :article-data="articleData"
      @toggleModal="toggleBioModal"
    />
    <Footer :content="articleData.main.footer" />
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import ArticleData from '~/data/data.json'
import POSTCONFIG from '~/post.config'
import ArticleHeader from '~/components/ArticleHeader.vue'
import Footer from '~/components/Footer.vue'
import BioContainer from '~/components/BioContainer.vue'
import ArticleText from '~/components/ArticleText.vue'
import ArticleTextInteractive from '~/components/ArticleTextInteractive.vue'
import ArticleVideo from '~/components/ArticleVideo.vue'
import ArticleAudio from '~/components/ArticleAudio.vue'
import HorizontalContainer from '~/components/HorizontalContainer.vue'
import mixinMethods from '~/utils/mixinMethods'

export default {
  components: {
    ArticleHeader,
    Footer,
    BioContainer,
    ArticleText,
    ArticleTextInteractive,
    ArticleVideo,
    ArticleAudio,
    HorizontalContainer,
  },
  mixins: [mixinMethods],
  async asyncData(ctx) {
    const slug = await ctx.params.slug
    const article = ArticleData.stories.find((e) => e.slug === slug)
    const readMoreArticles = ArticleData.stories.filter((e) => e.slug !== slug)
    const authordata = ArticleData.bios
      .filter((e) => !e.hide)
      .find((e) => e.authorslug === article.authorslug)
    // bios data sorted by last name
    const bios = ArticleData.bios
    const biosData = bios.sort((a, b) =>
      a.name.split(' ')[1] > b.name.split(' ')[1] ? 1 : -1
    )

    return {
      slug,
      article,
      biosData,
      authordata,
      readMoreArticles,
      articleData: ArticleData,
    }
  },
  data() {
    return {
      randomArticles: [],
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.summary,
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.article.title,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: POSTCONFIG.url + this.$route.fullPath,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: POSTCONFIG.url + this.article.featureImage,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.summary,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.article.summary,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.summary,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: POSTCONFIG.url + this.article.featureImage,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.featureImage,
        },
        {
          hid: 'itemprop:description',
          itemprop: 'description',
          content: this.article.summary,
        },
        {
          hid: 'itemprop:image',
          itemprop: 'image',
          content: POSTCONFIG.url + this.article.featureImage,
        },
      ],
    }
  },
  computed: {
    articleFormatComponent() {
      if (this.article.format === 'text') {
        return 'article-text'
      } else if (this.article.format === 'video') {
        return 'article-video'
      } else if (this.article.format === 'audio') {
        return 'article-audio'
      } else if (this.article.format === 'interactive') {
        return 'article-text-interactive'
      }
      return null
    },
  },
  mounted() {
    if (window.innerWidth > 800) {
      this.randomIcons(this.$refs.flourishes, 8, true, true, 1)
    }
    const stories = this.readMoreArticles.slice()
    this.randomArticles = stories.sort(() => 0.5 - Math.random()).slice(0, 2)
  },
  methods: {},
}
</script>

<style lang="scss"></style>
