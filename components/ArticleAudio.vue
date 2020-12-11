<template>
  <div>
    <AudioPlayer v-if="songData.svgStr" :song-data="songData" class="z-10" />
    <!-- <iframe
      frameborder="0"
      scrolling="no"
      height="130"
      width="100%"
      src="https://www.wnyc.org/widgets/ondemand_player/18-to-29-now/#file=/audio/json/975844/&share=1"
    ></iframe> -->
    <h1 class="serif blue f3 f2-ns lh-title mb0">
      {{ article.title }}
    </h1>
    <div class="flex flex-column flex-row-ns justify-between mt2">
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

      <p class="dn db-ns lh-copy order-2 w-20-ns pl3-ns mt0">
        {{ article.summary }}
      </p>
      <div class="measure-wide w-60-ns lh-copy center f5 f4-ns">
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

        <article v-html="article.text"></article>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from '~/components/AudioPlayer.vue'
import generateWaveform from '~/utils/waveformGenerator'
import mixinMethods from '~/utils/mixinMethods'
import ShareButtons from '~/components/ShareButtons.vue'

export default {
  components: { AudioPlayer, ShareButtons },
  mixins: [mixinMethods],
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      svgStr: null,
    }
  },
  computed: {
    songData() {
      return {
        svgStr: this.svgStr,
        songUrl: this.article.audioURL,
        title: this.article.title,
        url: '',
        author: this.article.author,
      }
    },
  },
  mounted() {
    this.svgStr = this.generateWaveformSVG(
      JSON.parse(atob(this.article.audioWaveform)),
      {
        height: 100,
        width: 500,
        padding: 0.8,
      }
    )
    this.randomImage(this.$refs.container)
  },
  methods: {
    generateWaveformSVG(data, options) {
      return generateWaveform(data, options)
    },
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
