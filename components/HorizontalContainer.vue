<template>
  <main
    v-if="articles"
    id="header"
    class="relative flex flex-column flex-row-ns mw8 center"
  >
    <article
      v-for="(feature, i) in articles"
      :key="feature.slug"
      :class="[i % 2 ? 'pl2-ns' : 'pr2-ns', 'w-50-ns']"
    >
      <div class="flex flex-column">
        <div class="mb2">
          <nuxt-link
            :title="feature.title"
            :to="{ path: `/story/${feature.slug}` }"
            class="link db dim black"
          >
            <div class="relative">
              <img
                :data-src="feature.featureImageSmall"
                loading="lazy"
                src="blankfeature.jpg"
                class="db lazyload"
                alt="Photo of a dimly lit room with a computer interface terminal."
                style="object-fit: cover"
              />
            </div>
          </nuxt-link>
        </div>
        <div class="w-100 w-90-ns">
          <nuxt-link
            :title="feature.title"
            :to="{ path: `/story/${feature.slug}` }"
            class="link db underline-hover blue"
          >
            <h2
              class="blue f3 f2-ns serif ma0 lh-title"
              v-html="feature.title"
            ></h2>
          </nuxt-link>
          <a
            :title="`${feature.author} Bio`"
            class="pointer link db blue dim black"
            @click.prevent="$emit('toggleBioModalSlug', feature.authorslug)"
          >
            <h3 class="dark-red lh-title mv1 f5 f4-ns">
              {{ feature.author }} |
              <span class="ttc normal"> {{ feature.format }} </span>
            </h3>
          </a>
          <nuxt-link
            :title="feature.summary"
            :to="{ path: `/story/${feature.slug}` }"
            class="link db dim black"
          >
            <p class="f4-l lh-copy mt0">
              {{ feature.summary }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </article>
  </main>
</template>
<script>
import mixinMethods from '~/utils/mixinMethods'

export default {
  mixins: [mixinMethods],
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss"></style>
