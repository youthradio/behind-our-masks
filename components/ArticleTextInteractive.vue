<template>
  <div>
    <div class="relative">
      <img
        :data-src="article.featureImage"
        src="blankfeature.jpg"
        class="db img-fluid lazyload"
        loading="lazy"
        :alt="article.featureImageCaption"
        :title="article.featureImageCaption"
      />
      <div v-if="article.featureImageCredits" class="f7 gray">
        <small>{{ article.featureImageCredits }}</small>
      </div>
    </div>
    <h1 class="serif blue f3 f2-ns lh-title mb0">
      {{ article.title }}
    </h1>
    <div class="flex flex-column flex-row-ns justify-between">
      <div
        ref="container"
        class="absolute random-textures z-0 pointer-events-none"
      />
      <div class="w-20-ns relative z-1">
        <h5 class="dark-red lh-title pr3-ns normal mb0">WRITTEN BY</h5>
        <h3 class="dark-red lh-title pr3-ns mt1 mb1">
          {{ article.author }}
        </h3>
        <h3 class="dark-red lh-title pr3-ns mt1 normal mb1">
          {{ article.location }}
        </h3>
        <h5 class="dark-red lh-title pr3-ns normal ma0 mt2">
          {{ article.date }}
        </h5>
        <ShareButtons
          :title="article.title"
          :description="article.summary"
          class="mv3"
        />
      </div>

      <p class="dn db-ns lh-copy order-2 w-20-ns pl3-ns">
        {{ article.summary }}
      </p>
      <div class="relative measure-wide w-60-ns lh-copy f5 f4-ns">
        <!-- <article v-html="article.text"></article> -->
        <article ref="containerRef">
          <template v-for="(p, i) in article.paragraphs" class="">
            <div
              v-if="p.spanish && p.spanish"
              :key="`lang-selection-${i}`"
              class="gray nb3 f6 ttu fw b"
            >
              <span>
                <a
                  :data-lang-bt="i"
                  data-lang="es"
                  class="dib green link grow"
                  href="#"
                  @click.prevent="toggleParagraph(i, 'es')"
                >
                  Spanish
                </a>
              </span>
              /
              <span class="gray">
                <a
                  :data-lang-bt="i"
                  data-lang="en"
                  class="dib gray link grow"
                  href="#"
                  @click.prevent="toggleParagraph(i, 'en')"
                  >English</a
                >
              </span>
            </div>
            <div
              :key="`paragraph-en-${i}`"
              class="p-container anima deactive"
              :data-i="i"
              data-lang="en"
              v-html="p.english.text"
            ></div>
            <div
              v-if="p.spanish"
              :key="`paragraph-es-${i}`"
              :data-i="i"
              data-lang="es"
              class="anima"
              v-html="p.spanish.text"
            ></div>
            <div
              v-else
              :key="`paragraph-en-${i}`"
              v-html="p.english.text"
            ></div>
          </template>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import mixinMethods from '~/utils/mixinMethods'
import ShareButtons from '~/components/ShareButtons.vue'

export default {
  components: {
    ShareButtons,
  },
  mixins: [mixinMethods],
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  mounted() {
    this.randomImage(this.$refs.container)
  },
  methods: {
    toggleParagraph(id, lang) {
      const els = this.$refs.containerRef.querySelectorAll(`[data-i="${id}"]`)
      els.forEach((el) => {
        if (el.dataset.lang === lang) {
          el.classList.remove('deactive')
        } else {
          el.classList.add('deactive')
        }
      })
      const bts = this.$refs.containerRef.querySelectorAll(
        `[data-lang-bt="${id}"]`
      )
      bts.forEach((el) => {
        if (el.dataset.lang === lang) {
          el.classList.remove('gray')
          el.classList.add('green')
        } else {
          el.classList.add('gray')
          el.classList.remove('green')
        }
      })
    },
  },
}
</script>

<style lang="scss">
.anima {
  position: relative;
  transition: all 1s ease-in-out;
  top: 0px;
  left: 0px;
}
.deactive {
  display: none;
  position: relative;
  color: grey;
  opacity: 0.5;
  z-index: -1;
  transition: all 1s ease-in-out;
  // filter: blur(3px);
}
</style>
