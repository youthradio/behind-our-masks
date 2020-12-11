<template>
  <header class="bg-washed-red pv3">
    <div class="flex mw8 center ph3 justify-between items-center">
      <div class="w-50 w-auto-ns">
        <nuxt-link title="Home" :to="{ path: '/' }">
          <img
            src="logos/logoarticle.svg"
            class="db"
            loading="lazy"
            alt="Young America 18 to 29 Now Speaks UP"
          />
        </nuxt-link>
      </div>
      <nav class="serif pl2 pl4-ns f7 f5-ns b">
        <div class="flex flex-column justify-between b">
          <nuxt-link
            class="link b dib pv1 underline-hover blue"
            title="Home"
            :to="{ path: '/' }"
          >
            Home
          </nuxt-link>
          <nuxt-link
            class="link b dib pv1 underline-hover blue"
            title="About"
            :to="{ path: '/', hash: '#about' }"
          >
            About this Project
          </nuxt-link>
          <nuxt-link
            class="link b dib pv1 underline-hover blue"
            title="Stories"
            :to="{ path: '/', hash: '#stories' }"
          >
            Stories
          </nuxt-link>
          <nuxt-link
            class="link b dib pv1 underline-hover blue"
            title="Contributors"
            :to="{ path: '/', hash: '#contributors' }"
          >
            Contributors
          </nuxt-link>
        </div>
      </nav>
      <div class="dn db-ns w-30 ml-auto sans-serif tr pr4">
        <p v-html="copy"></p>
      </div>
      <div class="dn db-l w-20 bl pl4">
        <div class="flex">
          <p class="sans-serif lh-title ttu tr f7 mt0 w-50">
            BROUGHT TO YOU BY
          </p>
          <div class="w-50 pl3">
            <a
              href="https://yr.media/"
              target="_blank"
              class="db pointer link grow no-underline"
              ><img
                src="logos/yrlogo.svg"
                height="40"
                class="db"
                alt="YR Media Logo"
            /></a>
          </div>
        </div>
        <div class="flex pt3">
          <div class="w-50">
            <a
              href="https://wnyc.org"
              target="_blank"
              class="db pointer link grow no-underline"
              ><img
                src="logos/wnyclogo.svg"
                height="40"
                class="db"
                alt="WNYC Logo"
            /></a>
          </div>
          <div class="w-50 pl3">
            <a
              href="https://www.wnyc.org/shows/rookies"
              target="_blank"
              class="db pointer link grow no-underline"
              ><img
                src="logos/radio-rookies.svg"
                height="40"
                class="db"
                alt="Radio Rookies"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="db dn-l mt3 ph3">
      <p class="sans-serif lh-title ttu tc f7">BROUGHT TO YOU BY</p>
      <div class="flex center justify-center items-baseline">
        <div class="ph2 ph4-ns">
          <a
            href="https://yr.media"
            target="_blank"
            class="db pointer link grow no-underline"
          >
            <img
              src="logos/yrlogo.svg"
              height="40"
              class="db"
              alt="YR Media Logo"
            />
          </a>
        </div>
        <!-- <div class="dn db-ns br bw1 self-stretch mv3"></div> -->
        <div class="ph2 ph4-ns">
          <a
            href="https://wnyc.org"
            target="_blank"
            class="db pointer link grow no-underline"
          >
            <img
              src="logos/wnyclogo.svg"
              height="40"
              class="db"
              alt="WNYC Logo"
            />
          </a>
        </div>
        <div class="ph2 ph4-ns">
          <a
            href="https://www.wnyc.org/shows/rookies"
            target="_blank"
            class="db pointer link grow no-underline"
          >
            <img
              src="logos/radio-rookies.svg"
              height="40"
              class="db"
              alt="Radio Rookies"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    copy: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss"></style>
