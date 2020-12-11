<template>
  <div>
    <ArticleHeader :copy="articleData.main.header.copy" />
    <div class="relative overflow-x-hidden">
      <div
        ref="flourishes"
        class="absolute flex flex-column justify-between z-0 top-0 left-0 right-0 bottom-0"
      />
      <main class="center mw8 pa3 relative z-1">
        <div class="center w-60-ns lh-copy f5 f4-ns">
          <h1 class="blue f3 sans-serif mt0 lh-title ttu">Contributor</h1>
          <BioContainer :author="authordata" />
          <div v-if="articlesbyauthor.length">
            <h4 class="dark-red ttu">
              WRITTEN BY {{ authordata.name | first }}
            </h4>
            <template v-for="article in articlesbyauthor">
              <article :key="article.slug" class="pb4">
                <div class="">
                  <nuxt-link
                    :title="article.title"
                    :to="{ path: `/story/${article.slug}` }"
                    class="link db blue underline-hover"
                  >
                    <h2 class="blue serif mv0 lh-title f4 f3-ns">
                      {{ article.title }}
                    </h2>
                  </nuxt-link>
                  <a
                    :title="`${article.author} Bio`"
                    class="pointer link db blue dim black"
                    @click.prevent="toggleBioModalSlug(article.authorslug)"
                  >
                    <h3 class="dark-red lh-title mv1 f5 f4-ns">
                      {{ article.author }} |
                      <span class="ttc normal"> {{ article.format }}</span>
                    </h3>
                  </a>
                  <nuxt-link
                    :title="article.summary"
                    :to="{ path: `/story/${article.slug}` }"
                    class="link db dim black"
                  >
                    <p class="f4-l lh-copy mv0">{{ article.summary }}</p>
                  </nuxt-link>
                </div>
              </article>
            </template>
          </div>
          <div class="flex justify-center pv3">
            <nuxt-link
              title="Home"
              :to="{ path: '/' }"
              class="f6 grow no-underline br-pill ph3 pv2 mb2 dib washed-red bg-blue"
            >
              Back to Main Page
            </nuxt-link>
          </div>
        </div>
      </main>
    </div>
    <Footer :content="articleData.main.footer" />
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import ArticleData from '../../data/data.json'
import ArticleHeader from '~/components/ArticleHeader.vue'
import Footer from '~/components/Footer.vue'
import BioContainer from '~/components/BioContainer.vue'
import mixinMethods from '~/utils/mixinMethods'

export default {
  components: { ArticleHeader, Footer, BioContainer },
  filters: {
    first(val) {
      return val.split(' ')[0]
    },
  },
  mixins: [mixinMethods],
  async asyncData(ctx) {
    const slug = await ctx.params.slug
    const articlesbyauthor = ArticleData.stories.filter(
      (e) => e.authorslug === slug
    )
    const authordata = ArticleData.bios.find((e) => e.authorslug === slug)
    return {
      slug,
      authordata,
      articlesbyauthor,
      articleData: ArticleData,
    }
  },
  computed: {},
  mounted() {
    if (window.innerWidth > 900) {
      this.randomIcons(this.$refs.flourishes, 3, true, true)
    }
  },
}
</script>

<style lang="scss"></style>
