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
    <div class="">
      <p class="dn db-ns lh-copy order-2 w-20-ns pl3-ns"></p>
      <div class="relative measure-wide lh-copy f5 f4-ns">
        <article v-html="article.text"></article>
      </div>
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
