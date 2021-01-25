<template>
  <div class="pv3 sans-serif">
    <h4 class="mb2 blue">Sign up for our newsletters</h4>
    <mailchimp-subscribe
      :url="newsletter.url"
      :user-id="newsletter.uid"
      :list-id="newsletter.id"
    >
      <template #default="{ subscribe, setEmail, error, success, loading }">
        <form @submit.prevent="subscribe">
          <div class="flex">
            <div class="flex-auto self-stretch pr2">
              <input
                class="db sans-serif w-100 h-100 ph2 bn f6 f5-ns br-pill"
                placeholder="Enter your email"
                type="email"
                @input="setEmail($event.target.value)"
              />
            </div>
            <button
              class="pointer black sans-serif f6 f5-ns grow no-underline ph3 pv2 dib bg-orange center nowrap br-pill bn"
              type="submit"
            >
              Sign Up
            </button>
          </div>

          <label class="flex items-center pt2 f7">
            <input
              class="checkbox-size-2 checkbox-size-2-ns mr1"
              type="checkbox"
              name="toc"
              value="agree"
              required
            />
            I agree to the Terms and Conditions
          </label>
          <div class="reset-p-m f7 pv2" v-html="message"></div>

          <div v-if="error" class="red pa0">
            <small>{{ error }}</small>
          </div>
          <div v-if="success" class="pa0">
            <small>Thank You!</small>
          </div>
          <div v-if="loading" class="pa0">
            <small>Sending...</small>
          </div>
        </form>
      </template>
    </mailchimp-subscribe>
  </div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import POSTCONFIG from './../post.config'

export default {
  components: { MailchimpSubscribe },
  props: {
    message: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {
    newsletter() {
      return POSTCONFIG.newsletter
    },
  },
}
</script>

<style lang="scss"></style>
