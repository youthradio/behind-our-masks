<template>
  <div>
    <vue-plyr>
      <div class="plyr__video-embed">
        <iframe
          :src="`https://www.youtube.com/embed/${article.videoid}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`"
          allowfullscreen
          allowtransparency
          playsinline
          allow="autoplay"
        >
        </iframe>
      </div>
    </vue-plyr>
    <h1 class="serif blue f3 f2-ns lh-title mb0">
      {{ article.title }}
    </h1>
    <div class="flex flex-column flex-row-ns justify-between">
      <div
        ref="container"
        class="absolute random-textures z-0 pointer-events-none"
      />
      <div class="w-20-ns relative z-1">
        <h5 class="dark-red lh-title pr3-ns normal mb0">PRODUCED BY</h5>
        <h3 class="dark-red lh-title pr3-ns mt1 mb1">
          {{ article.author }}
        </h3>
        <h3 class="dark-red lh-title pr3-ns normal mt1 mb1">
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

      <p class="dn db-ns lh-copy order-2 w-20-ns pl3-ns"></p>
      <div class="measure-wide w-60-ns lh-copy center f5 f4-ns">
        <article v-html="article.text"></article>
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
}
</script>

<style lang="scss">
@import '~@/node_modules/plyr/dist/plyr.css';
@import '~@/assets/css/variables';

.plyr--full-ui input[type='range'] {
  // -webkit-appearance: none;
  // background: 0 0;
  // border: 0;
  // border-radius: 26px;
  color: $blue;
  // display: block;
  // height: 19px;
  // margin: 0;
  // padding: 0;
  // transition: box-shadow .3s ease;
  // width: 100%;
}

.plyr--audio .plyr__control.plyr__tab-focus,
.plyr--audio,
.plyr--video,
.plyr--audio .plyr__control:hover,
.plyr--audio .plyr__control[aria-expanded='true'],
.plyr--video .plyr__control:hover,
.plyr--video .plyr__control[aria-expanded='true'],
.plyr__control--overlaid {
  background: $blue;
}
</style>
