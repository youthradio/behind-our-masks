<template>
  <header>
    <div class="center ph3 relative z-1 pv3">
      <div class="flex flex-wrap justify-between">
        <h1 class="mt2 mb0 f-4-5-ns f1 f1-ms fw8 nowrap-ns pr2-ns lh-0-9">
          BEHIND OUR MASKS
        </h1>
        <h3 class="mt3 mb1 f5 fw8 flex flex-column justify-around pl2-ns">
          <div class="ttu mw5">
            Uncovering pandemic life for California’s young adults
          </div>
        </h3>
      </div>
      <div class="bt b--black bw4 pb3"></div>
      <img class="db w-100" src="images/header.jpg" />
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
