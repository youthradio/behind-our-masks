<template>
  <aside>
    <div class="flex items-end flex-wrap">
      <div class="pr3">
        <img
          src="blank.jpg"
          :data-src="author.image"
          class="mwimg db lazyload"
          loading="lazy"
          :alt="`${author.name} Profile Picture`"
        />
      </div>
      <div class="bb bw2 b--dark-red">
        <h3 class="blue serif mt3 mb0 lh-title f5 f4-ns">
          {{ author.name }}
        </h3>
        <h4 class="normal lh-title mt0 f6 f5-ns mb2">
          {{ author.location }}
        </h4>
      </div>
    </div>
    <div class="f5 f4-ns measure-wide lh-copy" v-html="author.text"></div>
  </aside>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: '',
    },
    author: {
      type: Object,
      required: true,
      default: null,
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss"></style>
