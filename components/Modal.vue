<template>
  <div
    class="vh-100 w-100 flex flex-column overflow-scroll fixed top-0 left-0 z-999 bg-oc-washed-red bg-blur"
    tabindex="0"
    @keydown.esc="$emit('toggleModal')"
    @click.self="$emit('toggleModal')"
  >
    <div class="bg-washed-red mw8 center pv4 ph4">
      <div class="relative center lh-copy f5 f4-ns">
        <a
          class="absolute right-1 top-1 pointer f7 f6-ns grow no-underline br-pill ph3 pv2 dib washed-red bg-blue center"
          tabindex="0"
          @click.prevent="$emit('toggleModal')"
        >
          Close
        </a>
        <BioContainer :author="authordata" />
        <div v-if="articlesbyauthor.length" class="measure-wide">
          <h4 class="dark-red ttu">WRITTEN BY {{ authordata.name | first }}</h4>
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
                <h3 class="dark-red lh-title mv1 f5 f4-ns">
                  {{ article.author }} |
                  <span class="ttc normal"> {{ article.format }}</span>
                </h3>
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
      </div>
    </div>
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import BioContainer from '~/components/BioContainer.vue'

export default {
  components: { BioContainer },
  filters: {
    first(val) {
      return val.split(' ')[0]
    },
  },
  props: {
    authordata: { type: Object, required: true, default: null },
    articleData: { type: Object, required: true, default: null },
  },
  computed: {
    articlesbyauthor() {
      return this.articleData.stories.filter(
        (e) => e.authorslug === this.authordata.authorslug
      )
    },
  },
  mounted() {
    this.$el.focus()
  },
}
</script>

<style lang="scss"></style>
