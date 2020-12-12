<template>
  <header
    class="flex flex-column items-center justify-center relative bg-orange lh-title"
  >
    <img class="db w-100" src="images/header.jpg" />
    <div class="tc absolute">
      <h3 class="f-2 f-3-m f-4-l fw6 ma0">
        THE CALIFORNIA YOUTH MEDIA NETWORK PRESENTS
      </h3>
      <h1 class="f-4 f-5-ns fw8 mt0">BEHIND OUR MASK</h1>
    </div>
  </header>
</template>
<script>
import mixinMethods from '~/utils/mixinMethods'
export default {
  mixins: [mixinMethods],
  props: {
    copy: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
}
</script>

<style lang="scss"></style>
