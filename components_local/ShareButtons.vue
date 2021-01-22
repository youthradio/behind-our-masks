<template>
  <aside>
    <div class="flex items-center justify-around w-content nl1 mv2">
      <a
        class="db link grow bg-orange br-pill mh1"
        target="_blank"
        rel="nofollow"
        :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${title}: ${url} ${tweetMessage}`
        )}`"
      >
        <svg
          class="db pa1"
          width="24"
          height="24"
          viewBox="0 0 24 20"
          fill="none"
        >
          <path
            d="M24 2.309C23.117 2.701 22.168 2.965 21.172 3.084C22.189 2.475 22.97 1.51 23.337 0.36C22.386 0.924 21.332 1.334 20.21 1.555C19.313 0.598 18.032 0 16.616 0C13.437 0 11.101 2.966 11.819 6.045C7.728 5.84 4.1 3.88 1.671 0.901C0.381 3.114 1.002 6.009 3.194 7.475C2.388 7.449 1.628 7.228 0.965 6.859C0.911 9.14 2.546 11.274 4.914 11.749C4.221 11.937 3.462 11.981 2.69 11.833C3.316 13.789 5.134 15.212 7.29 15.252C5.22 16.875 2.612 17.6 0 17.292C2.179 18.689 4.768 19.504 7.548 19.504C16.69 19.504 21.855 11.783 21.543 4.858C22.505 4.163 23.34 3.296 24 2.309Z"
            fill="black"
          />
        </svg>
      </a>
      <a
        class="dbi link grow bg-orange br-pill mh1"
        target="_blank"
        rel="nofollow"
        :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}&t=${encodeURIComponent(title)}`"
      >
        <svg
          class="db pa1"
          width="24"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
        >
          <path
            d="M3 8H0V12H3V24H8V12H11.642L12 8H8V6.333C8 5.378 8.192 5 9.115 5H12V0H8.192C4.596 0 3 1.583 3 4.615V8Z"
            fill="black"
          />
        </svg>
      </a>

      <a
        target="_blank"
        rel="nofollow"
        class="db link grow bg-orange br-pill mh1"
        :href="`mailto:info@example.com?&subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(`${description}\n${url}`)}`"
      >
        <svg
          class="db pa1"
          width="24"
          height="24"
          viewBox="0 0 24 18"
          fill="none"
        >
          <path
            d="M0 0V18H24V0H0ZM6.623 7.929L2 13.641V4.183L6.623 7.929ZM2.482 2H21.517L12 9.713L2.482 2ZM8.176 9.188L12 12.287L15.83 9.183L21.442 16H2.663L8.176 9.188ZM17.384 7.924L22 4.183V13.531L17.384 7.924Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  </aside>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tweetMessage: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    url() {
      if (process.client && this.isMounted) {
        return window.location.href + this.hash
      }
      return null
    },
  },
  mounted() {
    this.isMounted = true
  },
}
</script>

<style lang="scss">
.w-content {
  width: fit-content;
}
</style>
