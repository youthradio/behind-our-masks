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
    <div class="relative measure-wide lh-copy f5 f4-ns">
      <article v-html="article.text"></article>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  mounted() {},
}
</script>

<style lang="scss"></style>
