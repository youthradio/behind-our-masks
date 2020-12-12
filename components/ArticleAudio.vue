<template>
  <div>
    <AudioPlayer v-if="songData.svgStr" :song-data="songData" class="z-10" />
    <div class="">
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
      <div class="relative measure-wide lh-copy f5 f4-ns">
        <article v-html="article.text"></article>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from '~/components/AudioPlayer.vue'
import generateWaveform from '~/utils/waveformGenerator'

export default {
  components: { AudioPlayer },
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
  color: $orange;
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
  background: $orange;
}
</style>
