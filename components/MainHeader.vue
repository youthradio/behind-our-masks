<template>
  <header class="bg-orange">
    <div class="mw8 center ph3 relative z-1 pv3">
      <div class="flex flex-wrap justify-between lh-title">
        <h1 class="mt2 mb0 f-4-ns f2 fw8 nowrap-ns pr2-ns">BEHIND OUR MASK</h1>
        <h3 class="mt3 mb1 f6 fw8 flex flex-column justify-around pl2-ns">
          <div class="ttu mw5">
            The reality of COVID-19: Uncovering pandemic life for California’s
            young adults
          </div>
        </h3>
      </div>
      <div class="bt b--black bw4 mt3 pb3"></div>
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
