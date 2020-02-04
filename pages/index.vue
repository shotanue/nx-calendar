<template>
  <div class="container">
    <div>
      <logo />
      <div class="bg-white rounded-lg p-6">
        <div>
          <h2 class="text-lg">
            Erin Lindford
          </h2>
          <div class="text-purple-500">
            Customer Support
          </div>
          <div class="text-gray-600">
            erinlindford@example.com
          </div>
          <div class="text-gray-600">
            (555) 765-4321
          </div>
        </div>
      </div>
      <h1 class="title">
        nx-calendar
      </h1>
      <h2 class="subtitle">
        nuxt toy calendar
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
  /* Sample `apply` at-rules with Tailwind CSS
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
